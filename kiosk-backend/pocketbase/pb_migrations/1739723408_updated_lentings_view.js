/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321")

  // update collection data
  unmarshal({
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("_clone_99l6")

  // remove field
  collection.fields.removeById("_clone_JSxH")

  // remove field
  collection.fields.removeById("_clone_MseY")

  // remove field
  collection.fields.removeById("_clone_szWH")

  // remove field
  collection.fields.removeById("_clone_Wlwm")

  // remove field
  collection.fields.removeById("_clone_eQmc")

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_pEIh",
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
    "id": "_clone_c9q5",
    "name": "supervisor",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_p503",
    "maxSize": 0,
    "name": "article",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_Hc36",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_meOJ",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_RHDg",
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
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_99l6",
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
    "id": "_clone_JSxH",
    "name": "supervisor",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_MseY",
    "maxSize": 0,
    "name": "article",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_szWH",
    "name": "returned",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_Wlwm",
    "max": "",
    "min": "",
    "name": "scheduled_return",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_eQmc",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_pEIh")

  // remove field
  collection.fields.removeById("_clone_c9q5")

  // remove field
  collection.fields.removeById("_clone_p503")

  // remove field
  collection.fields.removeById("_clone_Hc36")

  // remove field
  collection.fields.removeById("_clone_meOJ")

  // remove field
  collection.fields.removeById("_clone_RHDg")

  return app.save(collection)
})
