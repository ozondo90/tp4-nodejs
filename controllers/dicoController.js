var {dico , getTranslation} = require("../database/dicoDb")

const index = ( req , res )=>{

};

const store = ( req , res )=>{
  res.writeHead(200 , {"content-type" : "application/json" , "Accept" : "application/json"})
  var reqData = {};

  req.on("data", (chunk)=>{
    reqData = chunk
  })

  req.on("end" , ()=>{
    var resData = getTranslation(dico , JSON.parse(reqData))
    res.writeHead(201)
    res.end(resData)
  })
};

module.exports = { index , store };