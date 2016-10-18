var redux = require('redux');

var initialItems = [];

var itemsReducer = function(state = initialItems, action){
	var newItems = state.slice(0);
	
	switch(action.type){
		case 'addItem':
			newItems.push(action.payload);
			break;
		case 'removeItem':	
			newItems.splice(action.payload, 1);	
			break;	
		default:
			break;	
	}
	
	return newItems;
};

var eventReducer = function(state = '', action){
	var newEvent = action.type;
	return newEvent;
};

var reducers = redux.combineReducers({
	event: eventReducer, 
	items: itemsReducer
});

module.exports = reducers;