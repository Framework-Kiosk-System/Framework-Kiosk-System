/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "hidden": false,
        "id": "_clone_ytzx",
        "name": "email",
        "onlyDomains": [],
        "presentable": false,
        "required": true,
        "system": false,
        "type": "email"
      }
    ],
    "id": "pbc_1510649321",
    "indexes": [],
    "listRule": "",
    "name": "lentings_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT lentings.id, customers.email\nFROM customers, lentings\nWHERE customers.id = lentings.customer;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1510649321");

  return app.delete(collection);
})
