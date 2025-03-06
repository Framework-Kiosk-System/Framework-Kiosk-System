/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date190888726",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // remove field
  collection.fields.removeById("bool577945136")

  // remove field
  collection.fields.removeById("date190888726")

  return app.save(collection)
})
