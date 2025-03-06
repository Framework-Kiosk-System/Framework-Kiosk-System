/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1575296124")

  // remove field
  collection.fields.removeById("bool2412784838")

  // remove field
  collection.fields.removeById("bool481835259")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1575296124")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool2412784838",
    "name": "noReturnDefault",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool481835259",
    "name": "deleteOnReturnDefault",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
