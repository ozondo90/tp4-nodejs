const index = ( req , res )=>{
  res.writeHead(200);
  res.end("Welcome on the home page! Vous pouvez choisisir le mot à traduire et la langue ");
};

const store = ( req , res )=>{

};

module.exports = { index , store };