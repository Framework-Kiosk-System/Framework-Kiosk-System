/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id, ressources.name as 'name', articles.details, articles.amount\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_kM2s")

  // remove field
  collection.fields.removeById("_clone_2kwP")

  // remove field
  collection.fields.removeById("_clone_kxIq")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id, ressources.name, articles.details, articles.amount\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_kM2s",
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
    "id": "_clone_2kwP",
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
    "id": "_clone_kxIq",
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
  collection.fields.removeById("_clone_GqZw")

  // remove field
  collection.fields.removeById("_clone_qqdI")

  // remove field
  collection.fields.removeById("_clone_OgBS")

  return app.save(collection)
})
