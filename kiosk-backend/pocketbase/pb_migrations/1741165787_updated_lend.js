/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // remove field
  collection.fields.removeById("bool577945136")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date577945136",
    "max": "",
    "min": "",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool577945136",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("date577945136")

  return app.save(collection)
})
