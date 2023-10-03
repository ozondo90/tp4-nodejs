var router = require("./router");

var serverHandler = (req,res)=>{
  
  router(req, res);
 
};

module.exports = serverHandler ; 