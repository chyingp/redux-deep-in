var addItem = function(item){
	return {
		type: 'addItem',
		payload: item
	};
};

var removeItem = function(index){
	return {
		type: 'removeItem',
		payload: index
	};
};

module.exports = {
	addItem,
	removeItem
};