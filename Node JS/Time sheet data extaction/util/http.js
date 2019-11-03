const axios = require('axios');
const config = require('../config');

const tokenType = "Bearer";

function get(url)
{ 
    const { accessToken } = config.token;
    const axiosConfig = {
        headers: {'Authorization': `${tokenType} ${accessToken}`}
    }

    return axios.get(url, axiosConfig)
}

module.exports = {
    get
};
