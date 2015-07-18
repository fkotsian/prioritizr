(function() {
  var app = angular.module('prioritizr', ['ngDragDrop']);

  var defaultItems = [
    {
      id: 1,
      body: 'Item1'
    },
    {
      id: 2,
      body: 'Item2'
    },
    {
      id: 3,
      body: 'Item3'
    },
    {
      id: 4,
      body: 'Item4'
    }
  ];
  
  var dupItems = function(itemsToDup) {
    var dupedItems = [];
    for(i=0;i<itemsToDup.length;i++){
      var itemToDup = itemsToDup[i];
      var dupedItem = jQuery.extend(true,{},itemToDup);
      dupedItems.push(dupedItem);
    }  
    return dupedItems;
  };
  
  app.factory('Quadrant', function() {
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
        this.newItem.id = this.nextItemId();
        this.items.push(this.newItem);
        this.newItem = {};      
      };
  
      this.editItem = function(item) {
        var foundItem = $filter('filter')(this.items, {id: item.id}, true)[0];
        foundItem.body = item.body;
      };
    
      this.nextItemId = function() {
        return this.items[this.items.length-1].id + 1;
      };
      
      this.initialize = function() {
        this.id = nextQuadrantId();
        this.items = dupItems(defaultItems);
      };
      
      this.initialize();
    };
    
    return (Quadrant);
  });


  app.factory('Item', function() {
    var Item = function(id, body) {
      this.id = null;
      this.body = "";
      
      this.edit = function(newBody) {
        this.body = newBody;
      };
      
      this.initialize = function(id, body) {
        this.id = id;
        this.body = body;
      };
      
      this.initialize(id, body);
    };
    
    return (Item);
  });
  
  app.controller('AppController', function($scope, Quadrant) {
    this.quadrants = [
      new Quadrant(),
      new Quadrant(),
      new Quadrant(),
      new Quadrant()
    ];
    
    this.addItem = function(event, ui, quadrant, item) {
      console.log("ADDING: ");
      console.log("To quad " + quadrant.id);
      console.log("Item: " + item.body);
      quadrant.items.push(item);
    };
    
    this.removeItem = function(event, ui, quadrant, itemPos) {

      console.log("REMOVING: ");
      console.log("From quad " + quadrant.id);

      console.log("From position: " + itemPos);
      quadrant.items.splice(itemPos, 1);
    };
  });
  
  
  app.controller('ItemController', function() {
    this.editableBody = "";
    this.readyToSave = false;

    this.enableEditor = function(item) {
      console.log("Item: " + item.body);
      this.readyToSave = true;
      this.editableBody = item.body; 
    };
    
    this.save = function(item) {
      console.log("Ready to save? " + this.readyToSave);
      if(this.readyToSave === true) {
        item.body = this.editableBody;  
        this.readyToSave = false;
      }
    };
  });
  
})();