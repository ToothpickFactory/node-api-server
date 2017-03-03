const db = require("../../connections/mongo").db;

function getWeapon(_id){
	return db.weapon.findOne({"_id": db.ObjectId(_id)})
}

module.exports = getWeapon;
