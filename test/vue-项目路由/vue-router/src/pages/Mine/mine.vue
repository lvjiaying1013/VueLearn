<template>
	<div>
		<Headers txt='我的'>
			
			<img src="../../assets/images/ic_settings.png"  alt="" class="chat" slot='right'>
		</Headers>
		<Cell title='提醒'>
			<img src="../../assets/images/ic_mine_notification.png" slot='Icon' class="cell_img">
			<img src="../../assets/images/ic_arrow_gray_small.png" slot='cell-right' class="cell_rightimg">
		</Cell>

	</div>
</template>

<script>
	import Headers from '../../components/header.vue';
	import Cell from '../../components/cell.vue'
	export default {
		components:{
			Headers,
			Cell
		}
	}
</script>