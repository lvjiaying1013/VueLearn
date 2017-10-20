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
		<News v-for="(item,index) in arr">
			<span slot='title'>{{ item.title }}</span>
			<span slot='content'>{{ item.target.desc }}</span>
			<span slot='auth'>{{ item.target.author.name }}</span>
			<img :src="item.target.cover_url" alt="" slot='img' width="100px" height="100px;">
		</News>
		
	</div>
</template>

<script>
	import Headers from '../../components/header.vue'
	import Banner from '../../components/banner.vue'
	import Cell from '../../components/cell.vue'
	import News from './news_list.vue'
	export default {
		components:{
			Headers,
			Banner,
			Cell,
			News
		},
		data:function(){
			return{
				arr:[]
			}
		},
		created(){
			this.fn();
		},
		methods:{
			fn(){
				this.axios.get('/api/homeData').then((response)=>{
					console.log(response.data.data.recommend_feeds)
					this.arr = response.data.data.recommend_feeds;
				}).catch((response)=>{
					console.log(response.status)
				})
			}
		}
		
	}
</script>

<style>
	
</style>