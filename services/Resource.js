require('dotenv').config()
const request = require('request');
const API_KEY = process.env.API_KEY;
const URL_PATH = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const getUrl = (options) => {
	if (options.params) {
		return `${URL_PATH}&${options.params}`;
	}
	return URL_PATH;
}

const getCallApi = (options) => {
		return new Promise((resolve, reject) => {
			request(getUrl(options), { timeout: 30000, method: 'GET' }, (err, res, body) => {
			  if (err) {
                  reject(err)
              }
			  resolve(body)
			});
		})
	}

module.exports = {
    getCallApi
}