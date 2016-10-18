var React = require('react');

module.exports = React.createClass({
	componentWillReceiveProps: function(nextProps){
		if(nextProps.event === 'addItem'){
			// alert('hello');
		}
	},
	onInputKeyUp: function(evt){		
		if(evt.keyCode===13){
			this.addItem();
		}
	},
	onAddItem: function(){
		this.addItem();
	},
	onRemoveItem: function(index){
		this.props.removeItem( index );
	},
	addItem: function(){
		var todoInput = this.refs.todo;
		var todoValue = todoInput.value.trim() || '代办事项';
		this.props.addItem( todoValue );

		todoInput.value = '';
	},
	render: function(){
		var props = this.props;
		return (
			<div>
				<div>
					<input ref="todo" type="text" placeholder="输入代办项" onKeyUp={this.onInputKeyUp} />
					<button onClick={this.onAddItem}>点击新增</button>
				</div>
				<div>
					最新的事件：{props.event}
				</div>
				<ul>
					{props.items.map(function(item, index){
						return <li key={`li-${index}`}>{item} <a href="javascript:void(0)" onClick={this.onRemoveItem.bind(this, index)}>删除</a></li>;
					}.bind(this))}
				</ul>
			</div> 
		);
	}
});



