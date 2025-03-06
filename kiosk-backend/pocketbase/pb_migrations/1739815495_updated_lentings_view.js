/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article', lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_8mW0")

  // remove field
  collection.fields.removeById("_clone_upzx")

  // remove field
  collection.fields.removeById("_clone_TJtj")

  // remove field
  collection.fields.removeById("_clone_ueUB")

  // remove field
  collection.fields.removeById("_clone_jzn8")

  // remove field
  collection.fields.removeById("_clone_tKnP")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_Pu1E",
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
    "id": "_clone_2rkN",
    "name": "supervisor",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_g0C0",
    "max": 0,
    "min": 0,
    "name": "type",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_4HhE",
    "maxSize": 0,
    "name": "article",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_chRd",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_pgcD",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_al9t",
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
    "id": "_clone_8mW0",
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
    "id": "_clone_upzx",
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
    "id": "_clone_TJtj",
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
    "id": "_clone_ueUB",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_jzn8",
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
    "id": "_clone_tKnP",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_Pu1E")

  // remove field
  collection.fields.removeById("_clone_2rkN")

  // remove field
  collection.fields.removeById("_clone_g0C0")

  // remove field
  collection.fields.removeById("_clone_4HhE")

  // remove field
  collection.fields.removeById("_clone_chRd")

  // remove field
  collection.fields.removeById("_clone_pgcD")

  // remove field
  collection.fields.removeById("_clone_al9t")

  return app.save(collection)
})
