const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 
module.exports = function (time) {
    
    return dayjs(time).format('L, LTS');
}
