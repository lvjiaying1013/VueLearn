<template>
	<div>
		<Headers txt='小组'>
			<img src="../../assets/images/ic_actionbar_search_icon.png" class="search" slot='left'>
			<img src="../../assets/images/ic_chat_green.png"  alt="" class="chat" slot='right'>
		</Headers>

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