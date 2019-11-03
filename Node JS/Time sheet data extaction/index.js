const employeeService = require('./services/timesheet')

console.log('Start timesheet Data extration');

employeeService.fetchAll().then(data => console.log(data)).catch(err => console.log(err.message , err.response));