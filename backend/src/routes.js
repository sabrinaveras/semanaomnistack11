const express = require("express");

const ong = require("./controllers/ongController");
const incidents = require("./controllers/incidentController");
const incidents_profile = require("./controllers/profileController");
const session = require("./controllers/sessionController");

const routes = express.Router();

/* ONGS */
routes.post("/ongs", ong.create);
routes.get("/ongs", ong.index);


/* INCIDENTS */
routes.post("/incidents", incidents.create);
routes.get("/incidents", incidents.index);
routes.get("/incidents/ong", incidents_profile.index_ong);
routes.delete("/incidents/:id", incidents.delete);


/* SESSION */
routes.post("/sessions", session.create);

module.exports = routes;