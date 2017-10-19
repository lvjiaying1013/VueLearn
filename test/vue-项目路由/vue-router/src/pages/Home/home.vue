<template>
	<div>
		<Headers bol=true>
			<img src="../../assets/images/ic_chat_white.png"  alt="" class="chat" slot='right'>
			<div slot='search' class="head">
				<input type="search" placeholder="影视 图书 唱片 小说等">
				<img src="../../assets/images/ic_group_search_small.png"  class="icon_search"  >
				<img src="../../assets/images/ic_scan_gray.png"  class="icon_scan" >
			</div>
		</Headers>
		<Banner swiperID='go'>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/images/banner/01.jpg"  alt="">
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/images/banner/02.jpg"  alt="">
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/images/banner/03.jpg"  alt="">
			</div>
		</Banner>
		<Cell title='热点' hot=true></Cell>
		
	</div>
</template>

<script>
	import Headers from '../../components/header.vue'
	import Banner from '../../components/banner.vue'
	import Cell from '../../components/cell.vue'
	export default {
		components:{
			Headers,
			Banner,
			Cell
		}
		
	}
</script>

<style>
	
</style>