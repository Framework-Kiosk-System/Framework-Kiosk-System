/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3141255993")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT articles.id, ressources.name, articles.details, articles.amount\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_yG4X")

  // remove field
  collection.fields.removeById("_clone_72ls")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_eWRC",
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
    "id": "_clone_OLDm",
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
    "id": "_clone_wr4c",
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
    "viewQuery": "SELECT articles.id, ressources.name, articles.details\nFROM articles, ressources\nWHERE articles.type = ressources.id;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_yG4X",
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
    "id": "_clone_72ls",
    "maxSize": 0,
    "name": "details",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_eWRC")

  // remove field
  collection.fields.removeById("_clone_OLDm")

  // remove field
  collection.fields.removeById("_clone_wr4c")

  return app.save(collection)
})
