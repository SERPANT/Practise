const config = require('../config');
const http = require('../util/http');

/**
 * Fetch all timesheet records.
 * 
 * @returns {arry} : All timesheet records.
 */
async function fetchAll()
{
    const { timesheet } = config.baseApiUrl;
    const { data } = await http.get(timesheet);

    return data;
}

module.exports = {
    fetchAll
}