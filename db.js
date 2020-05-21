const sql = require('mssql');
const config = require('../config');

createHateoasLinks = (req, records, hateoas) => {
  return records.recordset.map((record) => {
    record.links = {};
    record.links.self = `http://${req.headers.host}/api/products/${record.Id}`;
    return record;
  });
};

get = async (req, res, endpoint, hateoas = [], ...params) => {};
module.exports = {get};
