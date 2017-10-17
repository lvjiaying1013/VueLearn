let vm = new Vue({
	el:'#app',
	data:{
		all:'删除全部'
		date:'',
		items:'',
		arr:[
			
			
		]
	},
	methods:{
		add:function(){
			let date = document.querySelector('#date'),items = document.querySelector('#items');
			if( date.value !== ''&& items.value !== '' ){
				this.arr.push({id:this.arr.length+1,date:this.date,items:this.items});
				this.date = '';
				this.items = '';
			}
		},
		reset:function(){
				this.date = '';
				this.items = '';
		},
		del:function(index){
			this.arr.splice(this.arr.length-1, 1)
		},
		delAll:function(){
			if( confirm('您确定要删除吗？') ){
				
					this.arr = [];

				
			}
		}
	}

})