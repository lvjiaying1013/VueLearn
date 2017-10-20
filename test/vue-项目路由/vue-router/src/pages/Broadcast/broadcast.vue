<template>
	<div class="BroadcastWrap">
		<Headers txt='广播'>
			<img src="../../assets/images/ic_status_search_user.png"  class="search" slot='left'>
			<img src="../../assets/images/ic_chat_green.png"  alt="" class="chat" slot='right'>
		</Headers>
		<div class="Broadcast_top">
			<h1><img src="../../assets/images/ic_status_anonymous_header.png" width="120px"></h1>
			<div class="Broadcast_text">
				<h3>发现有趣的人</h3>
				<p>关注他们，发现更大的世界</p>
			</div>
		</div>
		<div>
			
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
	.BroadcastWrap{ background: #ccc; }
	.BroadcastWrap .Broadcast_top{ display: flex;justify-content: center;align-items: center;padding:25px;}
	.BroadcastWrap .Broadcast_top .Broadcast_text{ text-align: left;padding-left: 15px;}
</style>