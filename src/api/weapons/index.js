const WeaponsModule = require("../../modules/weapons");

// Routes
module.exports = (app) => {
  app.get('/api/weapons', (req, res) => {
		//shopecategory: [ "tools", "ranged", "magic", "melee" ]
		//tier: 1-8
		let query = req.query;
		WeaponsModule.listWeapons(query)
			.then(weapons => res.send(weapons))
			.catch(err => res.setStatus(400).send(err));
	});

	app.get('/api/weapons/:id', (req, res) => {
		let id = req.params.id;
		WeaponsModule.getWeapon(id)
			.then(weapon => res.send(weapon))
			.catch(err => res.setStatus(400).send(err));
	});
};
