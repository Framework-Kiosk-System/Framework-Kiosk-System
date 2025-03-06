/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id, ressources.name as 'type', articles.details, articles.amount\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_GqZw")

  // remove field
  collection.fields.removeById("_clone_qqdI")

  // remove field
  collection.fields.removeById("_clone_OgBS")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_rJx9",
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
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_WBHD",
    "maxSize": 0,
    "name": "details",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_Cnxh",
    "max": null,
    "min": 0,
    "name": "amount",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id, ressources.name as 'name', articles.details, articles.amount\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_GqZw",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_qqdI",
    "maxSize": 0,
    "name": "details",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_OgBS",
    "max": null,
    "min": 0,
    "name": "amount",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("_clone_rJx9")

  // remove field
  collection.fields.removeById("_clone_WBHD")

  // remove field
  collection.fields.removeById("_clone_Cnxh")

  return app.save(collection)
})
