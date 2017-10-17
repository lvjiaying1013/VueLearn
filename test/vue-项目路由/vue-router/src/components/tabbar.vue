<template>
	<div class="tabbar"> 
		<Item @change='receive' txt='首页' mark='Home' :sel='select' >
			<img slot='normolImg' src="../assets/images/ic_tab_home_normal.png" height="128" width="128" alt="">
			<img slot='activelImg' src="../assets/images/ic_tab_home_active.png" height="128" width="128" alt="">
		</Item>
		<Item @change='receive' txt='书影音' mark='audio' :sel='select'>
			<img slot='normolImg' src="../assets/images/ic_tab_subject_normal.png" height="96" width="96" alt="">
			<img slot='activelImg' src="../assets/images/ic_tab_subject_active.png" height="96" width="96" alt="">
		</Item>
		<Item @change='receive' txt='广播' mark='broadcast' :sel='select'>
			<img slot='normolImg' src="../assets/images/ic_tab_status_normal.png" height="96" width="96" alt="">
			<img slot='activelImg' src="../assets/images/ic_tab_status_active.png" height="96" width="96" alt="">
		</Item>
		<Item @change='receive' txt='小组' mark='group' :sel='select'>
			<img slot='normolImg' src="../assets/images/ic_tab_group_normal.png" height="96" width="96" alt="">
			<img slot='activelImg' src="../assets/images/ic_tab_group_active.png" height="96" width="96" alt="">
		</Item>
		<Item @change='receive' txt='我的' mark='mine' :sel='select'>
			<img slot='normolImg' src="../assets/images/ic_tab_profile_normal.png" height="128" width="128" alt="">
			<img slot='activelImg' src="../assets/images/ic_tab_profile_active.png" height="128" width="128" alt="">
		</Item>
	</div>
</template>
<script>
	import Item from './item.vue'

	export default{
		data:function(){
			return{
				select:'home',
			}
		},
		methods:{
			receive:function(val){
				this.select = val;
			}
		},
		components:{
			Item
		}
	}
</script>
<style>
	.tabbar { width: 100%;height: 64px;border-top: 2px solid #eee;position: fixed;left:0;bottom:0 ;background: #eee;display: flex;justify-content: space-between;align-items: center; }
</style>