class Helper {

    /**
     * 
     * @param {*} data 
     */
    deepCopy(data) {
        return JSON.parse(JSON.stringify(data));
    }

    parseJson(data) {
        return JSON.parse(data)
    }

    createCurrentTimestamp() {
        let date_ob = new Date();
        return `${date_ob.getFullYear()}-${("0" + (date_ob.getMonth() + 1)).slice(-2)}-${("0" + date_ob.getDate()).slice(-2)} ${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}`;
    }

}

module.exports = Helper;