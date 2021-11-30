const express = require('express')
const app = express()
const port = 3000;
const MOMENT = require('moment');
const axios = require('axios')
const db_config = require("./config/config")
const getTypeID = require('./utils/utils');
// parse requests of content-type - application/json
app.use(express.json());

var mysql = require('mysql');
var connection = mysql.createConnection(db_config);

//Connect MYSQL
connection.connect();

// connection.end();

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello World"
    });
})

//Listen to incoming emails
app.post('/incoming_mails', (req, res) => {

    //Get the type from the NLP Service
    axios.post(process.env.NLPURL, {
        content: req.body.headers.subject + " " + req.body.plain.replace(/\n/g, '')
    }).then(resp => {

        //Insert data into the database
        let datetime = MOMENT().format('YYYY-MM-DD');
        let str = 'INSERT INTO `email`(`from_email`, `opened_date_time`, `email_subject`, `email_content`, `email_type`, `priority`, `closed_time`, `email_status`, `time_difference`, `ticketID`)  VALUES ("' + req.body.headers.from + '","' + datetime + '", "' + req.body.headers.subject + '", "' + req.body.plain.replace(/\n/g, '') + '", "'+resp.category+'", '+resp.priority+', "22-21-12", "sdcdsc", 2, 2)';

        connection.query(str);

        let data = JSON.stringify({
            "fields": {
                "summary": req.body.headers.subject,
                "description": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "text": req.body.plain.replace(/\n/g, ''),
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                },
                "issuetype": {
                    "id": "10008"
                },
                "project": {
                    "id": getTypeID(resp.category)
                },
                "labels": [
                    resp.priority
                ]
            }
        });

        var config = {
            method: 'post',
            url: process.env.JIRA_ENDPOINT,
            headers: {
                'Authorization': process.env.JIRA_API_KEY,
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                //Send SMS
                axios.post(process.env.SMSURL, {
                    "message": `HIGH Priority ${resp.category} \n ${req.body.headers.subject}`
                }).then(response1 => {
                    res.status(200).send({
                        message: "Success",
                        body: JSON.stringify(response1.data)
                    });
                }).catch(error => {
                    res.status(400).send({
                        message: "Failed",
                        body: error
                    });
                })
            })
            .catch(function (error) {
                console.log(error);
                res.status(400).send({
                    message: "Failed",
                    body: error
                });
            });

    }).catch(error => {
        res.status(400).send({
            message: "Failed",
            body: error
        });
    })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})