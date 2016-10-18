var ReactDOM = require('react-dom');
var React = require('react');
var redux = require('redux');
var reducers = require('./reducers');
var actions = require('./actions');

var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var store = redux.createStore(reducers);

var mapStateToProps = function(state = {}) {
	return state;
};

var App = require('./app.jsx');
var ConnectedApp = connect(mapStateToProps, actions)(App);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('js-container')
);