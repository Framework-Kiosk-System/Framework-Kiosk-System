/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_RbSOnLW2mT` ON `employees` (`email`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
