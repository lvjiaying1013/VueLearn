<template>
	<div class="groupWrap">
		<Headers txt='小组'>
			<img src="../../assets/images/ic_actionbar_search_icon.png" class="search" slot='left'>
			<img src="../../assets/images/ic_chat_green.png"  alt="" class="chat" slot='right'>
		</Headers>
		<div class="group_bg">
			<div class="group_join">
				<h1><img src="../../assets/images/ic_group_banner.png"  width="100%" alt=""></h1>
				<div class="group_monment">
					
						<p>428832个小组等你来玩</p>
						<p>立即选择加入吧</p>
					
				</div>
				<p class="group_hoppy">根据你的兴趣推荐</p>
			</div>
		</div>
		<div class="group_parent">
			<div class="group_bg1">
				<img src="../../assets/images/ic_rec_group_banner_6.png" width="100%">
				<p class="group_handpick">精选推荐</p>
			</div>
			<p class="line">影视</p>
		</div>
	</div>
</template>

<script>
	import Headers from '../../components/header.vue';

	export default {
		components:{
			Headers
		}
	}
</script>

<style>
	.groupWrap .group_join{ position:relative;}
	.groupWrap .group_join .group_hoppy{ position:absolute;left: 15px;bottom:5px;color: #ccc;font-size: 14px;}
	.groupWrap .group_monment{ position:absolute;left: 0;right: 0;top: 20%;bottom: 0; }
	.groupWrap .group_parent { width: 95%; margin:0 auto;}
	.groupWrap .group_parent .line {   padding: 0 20px 0;margin: 20px 0;line-height: 1px; border-left: 150px solid #ddd; border-right: 150px solid #ddd;text-align: center;}
	.groupWrap .group_bg1{ position:relative;margin-bottom: 30px;}
	.groupWrap .group_bg1 .group_handpick{ position:absolute;left:10px;bottom:15px;color: #fff}
</style>