const getTypeID = (type) => {
    switch(type){
        case "ISSUE":
            return "10008"
        case "SR":
            return "10009"
        default:
            return "10008"
    }
}
module.exports = getTypeID;