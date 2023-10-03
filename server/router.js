var homeController = require("../controllers/homeController");
var dicoController = require("../controllers/dicoController");

const Route = {
  routes : {},
  get( path , action ){
    this.routes[path] = {
      method : "GET",
      routeHandler : action
    }
  },
  post( path , action ){
    this.routes[path] = {
      method : "POST",
      routeHandler : action
    }
  } 
}

Route.get("/" , homeController.index);
Route.post("/dico" , dicoController.store);


var router = (req, res)=>{
  var { url , method } = req;
  
  var isRoute = Route.routes[url];
  
  if(!isRoute){
    res.writeHead(404);
    return res.end("404 Page Not Found")
  }

  if( method !== isRoute.method ){
    res.writeHead(405);
    return res.end("405 Method Not Allowed")
  }

  isRoute.routeHandler(req , res)
}

module.exports = router