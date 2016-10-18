var redux = require('redux');

var initialItems = [];

var reducers = function(state = initialItems, action){
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

var addItem = function(item){
	return {
		type: 'addItem',
		payload: item
	};
};

var store = redux.createStore(reducers);

store.subscribe(function(){
	console.log( store.getState() );
});

store.dispatch( addItem('起床') );
store.dispatch( addItem('刷牙洗脸') );


