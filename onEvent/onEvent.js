var redux = require('redux');

var initialItems = [];

var itemsReducer = function(state = initialItems, action){
	var newItems = state.slice(0);
	
	switch(action.type){
		case 'addItem':
			newItems.push(action.payload);
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

var addItem = function(item){
	return {
		type: 'addItem',
		payload: item
	};
};

var reducers = redux.combineReducers({
	event: eventReducer, 
	items: itemsReducer
});

var store = redux.createStore(reducers);

store.subscribe(function(){
	var state = store.getState();

	console.log( '最新dispatch的事件：' + state.event );
	console.log( store.getState() );
});

store.dispatch( addItem('起床') );
store.dispatch( addItem('刷牙洗脸') );
