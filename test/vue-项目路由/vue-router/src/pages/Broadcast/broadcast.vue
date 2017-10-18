<template>
	<div>
		<Headers txt='广播'>
			<img src="../../assets/images/ic_status_search_user.png"  class="search" slot='left'>
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