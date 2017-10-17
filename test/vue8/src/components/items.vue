<template>
	<div class="page">
		<h1 align="center">Update your data here.Page: {{ msg }}</h1>
		<div class="box">
			<ul>
				<li v-show='msg != 1' @click='index()'>首页</li>
				<li v-show='msg != 1'  @click='msg--'>上一页</li>
				<li v-for='(item,index) in arr'  @click='fn(index)' :class='{ bg:msg==index+1 }'>{{ item }}</li>
				<li v-show='msg != 6' @click='msg++'>下一页</li>
				<li v-show='msg != 6' @click='last()'>尾页</li>
			</ul>
			<div class="button">
				<span>当前第{{ msg }}页，共有6页</span>
				<input type="number" placeholder="请输入页码" v-model='num'><input @click='search(num)' type="button" value="Go">
			</div>
		</div>
	</div>
</template>

<style>
	*{ margin:0; padding: 0; }
	/*.page{ position: relative;}*/
	.page ul{list-style: none;display: flex;justify-content: center;position: absolute;bottom: 10%;left: 10%}
	.box{ display: flex;justify-content: center;}
	.page li{ border: 1px solid #ccc;padding:5px 15px;height: 30px; line-height: 30px;text-align: center;cursor: pointer;}
	.bg{color:#fff;background: skyblue;}
	.button{ position: absolute; bottom: 10%;right:20%}
	.button input{ height: 25px ;}
	
</style>

<script>
	export default{
		data:function  () {
			return {
				num:'',
				arr:6,
				msg:1,
			}
		},
		methods:{
			index:function(){
				this.msg = 1;
			
			},
			last:function(){
				this.msg = this.arr;
				
			},
			fn:function(index){
				this.msg = index+1;
				
			},
		
			search:function(num){
				if(isNaN(this.num)){
					
				}else if (this.num == '') {
					alert("请输入")
				}else if(num>6 || num<1	){
					alert('请输入正确页码');
					this.num = '';
				}else {
					this.msg = this.num;
					this.num = '';
				}

			}


		}
	}
	
</script>