const express = require('express');
//const routerPlace = require('routes');

const routerPlace = express.Router();

const placeController = require("../controllers/places");
routerPlace.get("/api/places", placeController.findPlaces);//nice OK  aficher tout le place  
routerPlace.get("/api/places/:id", placeController.findById);// NO j'ai besoin un user id ou city id  
routerPlace.post("/api/places", placeController.addOnePlace);// niceOK  add un place
routerPlace.delete("/api/places/delete/:id", placeController.delete) ///// OK for delete a place 

 module.exports = routerPlace;