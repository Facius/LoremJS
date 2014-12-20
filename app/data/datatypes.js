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
          title: 'start',
          type: 'date',
          description: 'last date'
        }
      ],
      func: function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
    },
    {name: 'boolean'},
    {name: 'integer'},
    {name: 'guid'},
    {name: 'float'},
    {name: 'datetime'},
    {name: 'array'},
    {name: 'object'},
    {name: 'null'},
    {name: 'longtitude'},
    {name: 'latitude'},
    {name: 'word'},
    {name: 'day'},
    {name: 'year'},
    {name: 'textstring'},
    {name: 'image'}
  ]
})();
