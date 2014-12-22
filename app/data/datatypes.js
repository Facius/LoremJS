(function () {
  'use strict';

  return [
    {
      name: 'date',
      description: 'picks a random date between to dates.',
      attrs: [
        {
          title: 'start',
          type: 'date',
          description: 'first date'
        },
        {
          title: 'end',
          type: 'date',
          description: 'last date'
        }
      ],
      func: function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
    },
    {
      name: 'boolean',
      description: '',
      attrs: [
        {
          title: 'percentage',
          type: 'integer',
          description: 'min percentage true'
        }
      ],
      func: function (percentage) {
        percentage = (typeof percentage === 'undefined' ? 50 : percentage);
        var randomNumber = createNumeric(1, 100);
        if (randomNumber <= percentage) {
          return true;
        }
        else {
          return false;
        }
      }
    },
    {
      name: 'integer',
      description: '',
      attrs: [
        {
          title: 'Min',
          type: 'float',
          description: 'min'
        },
        {
          title: 'Max',
          type: 'float',
          description: 'max'
        }],
      func: function (min, max) {
        min = (typeof min === 'undefined' ? -180 : min);
        max = (typeof max === 'undefined' ? 180 : max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    },
    {
      name: 'guid',
      description: '',
      attrs: [],
      func: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {

          /*jshint bitwise: false*/
          var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    },
    //{
    //  name: 'float',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    //{
    //  name: 'datetime',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    {
      name: 'array',
      description: '',
      attrs: [],
      func: function () {
      }
    },
    //{
    //  name: 'object',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    {
      name: 'null',
      description: 'returns a null',
      attrs: [],
      func: function () {
        return null;
      }
    },
    {
      name: 'longtitude',
      description: '',
      attrs: [
        {
          title: 'Min',
          type: 'float',
          description: 'min long'
        },
        {
          title: 'Max',
          type: 'float',
          description: 'max long'
        }
      ],
      func: function (min, max) {
        min = (typeof min === 'undefined' ? 0 : min);
        max = (typeof max === 'undefined' ? 999 : max);
        var minCoor = min.toFixed(10) * Math.pow(10, 10);
        var maxCoor = max.toFixed(10) * Math.pow(10, 10);
        var coordinate = createNumeric(minCoor, maxCoor) / Math.pow(10, 10);
        return coordinate;
      }
    },
    {
      name: 'latitude',
      description: '',
      attrs: [
        {
          title: 'Min',
          type: 'float',
          description: 'min lat'
        },
        {
          title: 'Max',
          type: 'float',
          description: 'max lat'
        }
      ],
      func: function (min, max) {
        min = (typeof min === 'undefined' ? -90 : min);
        max = (typeof max === 'undefined' ? 90 : max);
        var minCoor = min.toFixed(10) * Math.pow(10, 10);
        var maxCoor = max.toFixed(10) * Math.pow(10, 10);
        var coordinate = createNumeric(minCoor, maxCoor) / Math.pow(10, 10);
        return coordinate;
      }
    },
    //{
    //  name: 'word',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    //{
    //  name: 'day',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    //{
    //  name: 'year',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    //{
    //  name: 'textstring',
    //  description: '',
    //  attrs: [],
    //  func: function () {
    //  }
    //},
    {
      name: 'Placehold.it - Image Url',
      description: '',
      attrs: [
        {
          title: 'minWidth',
          type: 'integer',
          description: 'minWidth'
        },
        {
          title: 'maxWidth',
          type: 'integer',
          description: 'maxWidth'
        },
        {
          title: 'minHeight',
          type: 'integer',
          description: 'minHeight'
        },
        {
          title: 'maxHeight',
          type: 'integer',
          description: 'maxHeight'
        },
      ],
      func: function (minWidth, maxWidth, minHeight, maxHeight) {
        minWidth = (typeof minWidth === 'undefined' ? 600 : minWidth);
        maxWidth = (typeof maxWidth === 'undefined' ? 80 : maxWidth);
        minHeight = (typeof minHeight === 'undefined' ? 600 : minHeight);
        maxHeight = (typeof maxHeight === 'undefined' ? 800 : maxHeight);
        return 'http://placehold.it/' + createNumeric(minWidth, maxWidth) + 'x' + createNumeric(minHeight, maxHeight);
        //return 'http://lorempixel.com/' + createNumeric(minWidth, maxWidth) + '/' + createNumeric(minHeight, maxHeight) + '/nightlife/';
      }
    }
  ]
})();
