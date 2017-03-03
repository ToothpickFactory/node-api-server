const db = require("../../connections/mongo").db;

function listWeapons(query = {}){
	return db.weapon.find(query, {"_id": 1, "uniquename": 1})
}

module.exports = listWeapons;
