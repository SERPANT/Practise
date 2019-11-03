const config = require('../config');
const http = require('../util/http');

/**
 * Fetch all projects records.
 * 
 * @returns {arry} : All projects records.
 */
async function fetchAll()
{
    const { projects } = config.baseApiUrl;
    const { data } = await http.get(projects);

    return data;
}

module.exports = {
    fetchAll
}