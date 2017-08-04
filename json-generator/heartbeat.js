// to be used at http://www.json-generator.com/

[
  '{{repeat(1440)}}',
  {
    value: '{{integer(60, 80)}}',
    timestamp: function(value, index) {
      var date = new Date(2017,7,4);
      var incrementedDate = date.getTime() + index * 1000 * 60;
      var dateNew = date.setTime(incrementedDate);
      var isoDate = new Date(dateNew).toISOString();
      return isoDate;
    }
  }
]
