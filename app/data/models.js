(function () {
  'use strict';

  return [
    {
      "name": "ModelOne",
      "properties": [
        {
          "type": "boolean", "key": "Name",
          "attrs": [{"value": 30}]
        },
        {
          "key": "Age",
          "type": "integer",
          "attrs": [{"value": 100}, {"value": 200}]
        }]
    },
    {
      "name": "ModelTwo",
      "properties": [
        {
          "type": "boolean", "key": "Name",
          "attrs": [{"value": 30}]
        }]
    },
    {
      "name": "ModelThree",
      "properties": [
        {
          "key": "Age",
          "type": "integer",
          "attrs": [{"value": 100}, {"value": 200}]
        }]
    }
  ]
})();
