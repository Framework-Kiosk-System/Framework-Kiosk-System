/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2493310295")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json707933067",
    "maxSize": 0,
    "name": "customer_information",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2493310295")

  // remove field
  collection.fields.removeById("json707933067")

  return app.save(collection)
})
