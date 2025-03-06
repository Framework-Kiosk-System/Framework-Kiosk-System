/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // update collection data
  unmarshal({
    "name": "lentings"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2638786261")

  // update collection data
  unmarshal({
    "name": "lents"
  }, collection)

  return app.save(collection)
})
