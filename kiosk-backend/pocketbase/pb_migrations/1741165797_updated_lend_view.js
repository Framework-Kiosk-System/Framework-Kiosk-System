/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lend.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article', lend.returned, lend.scheduled_return, lend.created\nFROM lend\nLEFT JOIN customers ON customers.id = lend.customer\nLEFT JOIN employees on employees.id = lend.supervisor\nLEFT JOIN articles on articles.id = lend.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_hvlG")

  // remove field
  collection.fields.removeById("_clone_p3Ag")

  // remove field
  collection.fields.removeById("_clone_i9u8")

  // remove field
  collection.fields.removeById("_clone_QKvB")

  // remove field
  collection.fields.removeById("_clone_2ZI7")

  // remove field
  collection.fields.removeById("_clone_BQl8")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lend.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article',  lend.scheduled_return, lend.created\nFROM lend\nLEFT JOIN customers ON customers.id = lend.customer\nLEFT JOIN employees on employees.id = lend.supervisor\nLEFT JOIN articles on articles.id = lend.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_hvlG",
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
    "id": "_clone_p3Ag",
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
    "id": "_clone_i9u8",
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
    "id": "_clone_QKvB",
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
    "id": "_clone_2ZI7",
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
    "id": "_clone_BQl8",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

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

  return app.save(collection)
})
