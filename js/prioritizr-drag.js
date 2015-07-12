(function() {
  var itemDivs = $('div.quadrant-item');
  
  itemDivs.draggable({
    'handle': '.quadrant-item',
    'cursor': 'move',
    'snap': true,
    'containment': '#four-quadrant-wrapper'
  })
})();