/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // remove field
  collection.fields.removeById("relation2476688708")

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
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2493310295",
    "hidden": false,
    "id": "relation2476688708",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "article",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("relation37359206")

  return app.save(collection)
})
