/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lend.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.displayname as 'article', lend.returned, lend.scheduled_return, lend.created\nFROM lend\nLEFT JOIN customers ON customers.id = lend.customer\nLEFT JOIN employees on employees.id = lend.supervisor\nLEFT JOIN articles on articles.id = lend.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_LqfW")

  // remove field
  collection.fields.removeById("_clone_mq1L")

  // remove field
  collection.fields.removeById("_clone_gZzz")

  // remove field
  collection.fields.removeById("_clone_WhuH")

  // remove field
  collection.fields.removeById("_clone_Uw4a")

  // remove field
  collection.fields.removeById("_clone_9aAe")

  // remove field
  collection.fields.removeById("_clone_fr7o")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_1eEa",
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
    "id": "_clone_SH9K",
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
    "id": "_clone_gJc1",
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
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_EGIK",
    "max": 0,
    "min": 0,
    "name": "article",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_upry",
    "max": "",
    "min": "",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_D2Qw",
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
    "id": "_clone_nOyj",
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
    "viewQuery": "SELECT lend.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article', lend.returned, lend.scheduled_return, lend.created\nFROM lend\nLEFT JOIN customers ON customers.id = lend.customer\nLEFT JOIN employees on employees.id = lend.supervisor\nLEFT JOIN articles on articles.id = lend.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_LqfW",
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
    "id": "_clone_mq1L",
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
    "id": "_clone_gZzz",
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
    "id": "_clone_WhuH",
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
    "id": "_clone_Uw4a",
    "max": "",
    "min": "",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_9aAe",
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
    "id": "_clone_fr7o",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_1eEa")

  // remove field
  collection.fields.removeById("_clone_SH9K")

  // remove field
  collection.fields.removeById("_clone_gJc1")

  // remove field
  collection.fields.removeById("_clone_EGIK")

  // remove field
  collection.fields.removeById("_clone_upry")

  // remove field
  collection.fields.removeById("_clone_D2Qw")

  // remove field
  collection.fields.removeById("_clone_nOyj")

  return app.save(collection)
})
