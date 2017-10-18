<template>
	<div class="banner">
		<div class="swiper-container"  :class='swiperID'>
			<div class="swiper-wrapper">
				<slot name='swiper-con'></slot>
			</div>
			<div :class="{ 'swiper-pagination':paginationshow }" :style='{ "text-align":paginationdesition }'></div>
		</div>
	</div>
</template>
<script>
	import '../assets/libs/swiper/js/swiper.min.js';
	export default{
		props:{
			swiperID:{
				type:String,
				default: ''
			},
			paginationshow:{
				type:Boolean,
				default:true
			},
			paginationdesition:{
				type:String,
				default:'center'
			},
			paginationType:{
				type:String,
				default:'bullets'
			},
			autoplay:{
				type:Number,
				default:3000
			},
			loop:{
				type:Boolean,
				default:true
			},
			direction:{
				type:String,
				default:'horizontal'
			},
			effect:{
				type:String,
				default:'silde'
			}
		},
		mounted:function(){
			let _this = this;
			new Swiper('.'+_this.swiperID,{
				direction:_this.direction,
				loop:_this.loop,
				pagination:'.swiper-pagination',
				paginationType:_this.paginationType,
				autoplay:_this.autoplay,
				effect:_this.effect
			})
		}
	}
</script>
<style>
	@import '../assets/libs/swiper/css/swiper.min.css';
	.banner{ width: 100%;overflow: hidden; }
	.banner .swiper-container .swiper-wrapper img{ max-width: 100% ;}
	.swiper-pagination-bullet-active{ background: white }
</style>