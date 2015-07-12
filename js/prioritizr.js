(function() {
  var app = angular.module('prioritizr', []);
  
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
  
  var blankItem = {
    body: 'BlankItem'
  };
  
  app.controller('QuadrantController', function() {
    this.items = defaultItems;
    this.newItem = {};
    
    this.addItem = function() {
      quadrant.items.push(this.newItem);
      this.newItem = {};
    };
    
    this.editItem = function(item) {
      var foundItem = $filter('filter')(this.items, {id: item.id}, true)[0];
      foundItem.body = item.body;
    };
  }); 
  
  app.controller('ItemController', function() {
    this.editableBody = "";
    this.readyToSave = false;

    this.enableEditor = function(item) {
      console.log('Triggering');
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