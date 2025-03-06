/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2493310295")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_J6ClLtFKA6` ON `ressources` (`name`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2493310295")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
