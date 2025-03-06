/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_ytzx")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_03Q1",
    "name": "email",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email\nFROM customers, lentings\nWHERE customers.id = lentings.customer;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_ytzx",
    "name": "email",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // remove field
  collection.fields.removeById("_clone_03Q1")

  return app.save(collection)
})
