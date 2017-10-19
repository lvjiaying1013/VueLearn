<template>
	<div>
		<Headers txt='书影音'>
			<img src="../../assets/images/ic_actionbar_search_icon.png"  class="search" slot='left'>
			<img src="../../assets/images/ic_chat_green.png"  alt="" class="chat" slot='right'>
		</Headers>
		<div class="nav">
			<span :class="{active:nowIndex == 1}" @click="nowIndex=1">
				<router-link to='/audio/film' >电影</router-link>
			</span>
			<span :class="{active:nowIndex == 2}" @click="nowIndex=2">
				<router-link to='/audio/book' >读书</router-link>
			</span>
			<span :class="{active:nowIndex == 3}" @click="nowIndex=3">
				<router-link to='/audio/tv'>电视</router-link>
			</span>
			<span :class="{active:nowIndex == 4}" @click="nowIndex=4">
				<router-link to='/audio/city'>同城</router-link>
			</span>
			<span :class="{active:nowIndex == 5}" @click="nowIndex=5">
				<router-link to='/audio/music'>音乐</router-link>
			</span>
		</div>
		<div>
			<router-view></router-view>
		</div>
		

	</div>
</template>

<script>
	import Headers from '../../components/header.vue';
	import Cell from '../../components/cell.vue'
	export default{
		components:{
			Headers,
			Cell
		},

		data:function(){
			return {nowIndex : 1}
		},
		methods:{
			fn(){
				console.log(1)
			}
		}
	}
</script>

<style>
	.nav{ width: 100%;height: 40px;border-bottom: 1px solid #eee; }
	
	.nav .active a{ border-bottom: 2px solid green; }
	.nav  a{ width: 20%; display: block; float: left;text-decoration: none;font-size: 15px; color:#999;line-height: 40px;}
	

</style>