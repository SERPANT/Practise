const config = require('../config');
const http = require('../util/http');

/**
 * Fetch all employee's data.
 * 
 * @returns {arry} : List of all employees data.
 */
async function fetchAll()
{
    const { employee } = config.baseApiUrl;
    const { data } = await http.get(employee);

    return data;
}

module.exports = {
    fetchAll
}