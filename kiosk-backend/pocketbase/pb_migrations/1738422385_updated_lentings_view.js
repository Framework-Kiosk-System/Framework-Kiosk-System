/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', articles.id as 'article', lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Rk50")

  // remove field
  collection.fields.removeById("_clone_cGkK")

  // remove field
  collection.fields.removeById("_clone_Irsa")

  // remove field
  collection.fields.removeById("_clone_Oo10")

  // remove field
  collection.fields.removeById("_clone_k4iC")

  // remove field
  collection.fields.removeById("_clone_VokF")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_zu8x",
    "name": "customer",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_2vhy",
    "name": "supervisor",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3547311433",
    "hidden": false,
    "id": "relation37359206",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "article",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_jkzY",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_S2iL",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_412p",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', articles.details as 'article', lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_Rk50",
    "name": "customer",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_cGkK",
    "name": "supervisor",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_Irsa",
    "maxSize": 0,
    "name": "article",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_Oo10",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_k4iC",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_VokF",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_zu8x")

  // remove field
  collection.fields.removeById("_clone_2vhy")

  // remove field
  collection.fields.removeById("relation37359206")

  // remove field
  collection.fields.removeById("_clone_jkzY")

  // remove field
  collection.fields.removeById("_clone_S2iL")

  // remove field
  collection.fields.removeById("_clone_412p")

  return app.save(collection)
})
