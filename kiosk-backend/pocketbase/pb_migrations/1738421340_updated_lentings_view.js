/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', articles.details as 'article', lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_IAdA")

  // remove field
  collection.fields.removeById("_clone_0T2y")

  // remove field
  collection.fields.removeById("_clone_LgpK")

  // remove field
  collection.fields.removeById("_clone_m4Pz")

  // remove field
  collection.fields.removeById("_clone_CIYb")

  // remove field
  collection.fields.removeById("_clone_F1jJ")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', articles.details, lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_IAdA",
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
    "id": "_clone_0T2y",
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
    "id": "_clone_LgpK",
    "maxSize": 0,
    "name": "details",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_m4Pz",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_CIYb",
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
    "id": "_clone_F1jJ",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

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

  return app.save(collection)
})
