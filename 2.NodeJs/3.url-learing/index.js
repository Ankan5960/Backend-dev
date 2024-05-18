//////url learning given and url and return orginal date
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=?&month=?&date=?';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
var date=new Date();
qdata.year=date.getFullYear();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
qdata.month=month[date.getMonth()];
qdata.date=date.getDate();
console.log(qdata.year,qdata.month,qdata.date); //returns 'february'
