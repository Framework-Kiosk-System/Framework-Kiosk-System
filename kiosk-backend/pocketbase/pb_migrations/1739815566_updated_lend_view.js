/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT lend.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article', lend.returned, lend.scheduled_return, lend.created\nFROM lend\nLEFT JOIN customers ON customers.id = lend.customer\nLEFT JOIN employees on employees.id = lend.supervisor\nLEFT JOIN articles on articles.id = lend.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Wnks")

  // remove field
  collection.fields.removeById("_clone_tAZC")

  // remove field
  collection.fields.removeById("_clone_ljfF")

  // remove field
  collection.fields.removeById("_clone_4QOp")

  // remove field
  collection.fields.removeById("_clone_qQat")

  // remove field
  collection.fields.removeById("_clone_P2jC")

  // remove field
  collection.fields.removeById("_clone_VI6H")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_hA4G",
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
    "id": "_clone_kYm6",
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
    "id": "_clone_zf0m",
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
    "id": "_clone_9n66",
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
    "id": "_clone_8u96",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_SJsx",
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
    "id": "_clone_wKKK",
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
    "viewQuery": "SELECT lentings.id, customers.email AS 'customer', employees.email as 'supervisor', ressources.name as 'type', articles.details as 'article', lentings.returned, lentings.scheduled_return, lentings.created\nFROM lentings\nLEFT JOIN customers ON customers.id = lentings.customer\nLEFT JOIN employees on employees.id = lentings.supervisor\nLEFT JOIN articles on articles.id = lentings.article\nLEFT JOIN ressources on ressources.id = articles.type;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_Wnks",
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
    "id": "_clone_tAZC",
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
    "id": "_clone_ljfF",
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
    "id": "_clone_4QOp",
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
    "id": "_clone_qQat",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_P2jC",
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
    "id": "_clone_VI6H",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_hA4G")

  // remove field
  collection.fields.removeById("_clone_kYm6")

  // remove field
  collection.fields.removeById("_clone_zf0m")

  // remove field
  collection.fields.removeById("_clone_9n66")

  // remove field
  collection.fields.removeById("_clone_8u96")

  // remove field
  collection.fields.removeById("_clone_SJsx")

  // remove field
  collection.fields.removeById("_clone_wKKK")

  return app.save(collection)
})
