/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool2287965729",
    "name": "deleteOnReturn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // remove field
  collection.fields.removeById("bool2287965729")

  return app.save(collection)
})
