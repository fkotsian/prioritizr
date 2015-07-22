(function() {
  var app = angular.module('prioritizr', ['ngDragDrop', 'ui.sortable']);

  app.factory('Item', function() {
    var currItemId = 0;
    var nextItemId = function() {
      currItemId += 1;
      return currItemId;
    };
        
    var Item = function(body) {
      this.id = null;
      this.body = "";
          
      this.edit = function(newBody) {
        this.body = newBody;
      };
      
      this.initialize = function(body) {
        this.id = nextItemId();
        this.body = body;
      };
      
      this.initialize(body);
    };
    
    return (Item);
  });
  
  
  app.factory('Quadrant', ['Item', function(Item) {
    var currQuadrantId = 0;
    var nextQuadrantId = function() {
      currQuadrantId += 1;
      return currQuadrantId;
    };

    var Quadrant = function(rootScope) {
      this.id = null;
      this.items = [];
      this.newItem = {};
      
      this.addNewItem = function() {
        this.items.push(new Item(this.newItem.body));
        this.newItem = {};      
      };
  
      this.editItem = function(item) {
        var foundItem = $filter('filter')(this.items, {id: item.id}, true)[0];
        foundItem.body = item.body;
      };
      
      this.initialize = function() {
        this.id = nextQuadrantId();
        this.items = [new Item('Item1'),
                      new Item('Item2'),
                      new Item('Item3'),
                      new Item('Item4')];
      };
      
      this.initialize();
    };
    
    return (Quadrant);
  }]);

  
  app.controller('AppController', function($scope, Quadrant) {
    this.quadrants = [
      new Quadrant(),
      new Quadrant(),
      new Quadrant(),
      new Quadrant()
    ];    
  });
  
  
  app.controller('ItemController', function() {
    this.editableBody = "";
    this.readyToSave = false;

    this.enableEditor = function(item) {
      this.readyToSave = true;
      this.editableBody = item.body; 
    };
    
    this.save = function(item) {
      if(this.readyToSave === true) {
        item.body = this.editableBody;  
        this.readyToSave = false;
      }
    };
  });
  
})();