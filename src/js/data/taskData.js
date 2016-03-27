' use strict';
var STORE_NAME = 'tasks';
exports.save = function(task){
localStorage.setItem(STORE_NAME,JSON.stringify(task));
};
exports.load = function(){
var storedTask = localStorage.getItem(STORE_NAME);
    if(storedTask){
        return JSON.parse(storedTask);
    }
    return [];
};
exports.clear = function(){
    localStorage.removeItem(STORE_NAME);
};
