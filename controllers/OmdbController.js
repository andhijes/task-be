require('dotenv').config()
const BaseResponse = require('../helpers/BaseResponse');
const { isJsonString } = require('../helpers/JsonHelper');
const { getQueryString } = require('../helpers/QueryHelper');
const { getCallApi } = require('../services/Resource');

const detail = async(req, res) => {
    try {
        const { id } = req.params;
        const query = getQueryString({
            i: id
        });
        const options = {
            params: query
        }

        const result = await getCallApi(options);
        const data = isJsonString(result) && JSON.parse(result) || {};

        if (data.Error){
            throw new Error(data.Error);
        }
        return res.json(BaseResponse.successResponse(data));
    } catch (error) {
        console.log(error)
        return res.json(BaseResponse.errorResponse(error))
    }
}

const search = async(req, res) => {
    try {
        const { title, year, type, page } = req.query;
        const query = getQueryString({
            s: title,
            y: year,
            type,
            page
        });

        const options = {
            params: query
        }

        const result = await getCallApi(options);
        const data = isJsonString(result) && JSON.parse(result) || {};
        
        if (data.Error) {
            throw new Error(data.Error);
        }
        
        return res.json(BaseResponse.successResponse(data.Search));
    } catch (error) {
        console.log(error)
        return res.json(BaseResponse.errorResponse(error))
    }
}

module.exports = {
    detail,
    search
}