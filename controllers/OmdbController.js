require('dotenv').config()
const request = require('request');
const API_KEY = process.env.API_KEY;
const URL_PATH = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const callApi = (url) => {
		return new Promise((resolve, reject) => {
			request(url, { timeout: 3000, method: 'GET' }, (err, res, body) => {
			  if (err) {
                  reject(err)
              }
			  resolve(body)
			});
		})
	}

module.exports = {
    detail: async(req, res) => {
        try {
            const { id } = req.params;
            console.log(`${URL_PATH}&i=${id}`)

            return res.json(JSON.parse(result));
        } catch (error) {
            console.log({error})
            
            return error
        }
    },
    search: async(req, res) => {
        try {
            const { title } = req.query;
            const result = await callApi(`${URL_PATH}&s=${title}`);

            return res.json(JSON.parse(result));
        } catch (error) {
            console.log({error})
            
            return error
        }
    }
}