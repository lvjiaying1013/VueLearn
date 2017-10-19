<template>
	<div class="mineWrap">

		<Headers txt='我的'>
			
			<img src="../../assets/images/ic_settings.png"  alt="" class="chat" slot='right'>
		</Headers>
		
		<div class="mine_bg">
			<div class="head_portrait">
				<img src="../../assets/images/ic_avatar_default.png" alt="">
			</div>
			<div class="home_page">
				<div class="user_name">
					<div >
						<h2 style="text-align:left;margin-bottom:5px;">Ambition <sup style="font-size:12px;">男</sup></h2>
						<div style="overflow:hidden;padding-bottom:10px;">
							<p class="id" style="float:left;font-size:14px;line-height:16px;" >ID:156485465</p>
							<p style="float:right;margin-right:35px;">个人主页 <span class="arrow"><img src="../../assets/images/ic_seti_arrow_right_white.png" width="25px"></span></p>
						</div>
					</div>
				</div>
				<div>
					
				</div>
				<div style="margin-top:15px;">
					<p style="float:left">关注&nbsp;&nbsp;  1</p>
					<p style="float:left;margin-left:15px;">被关注 &nbsp;&nbsp;  0</p>
				</div>
			</div>
			
		</div>


		<Cell title='提醒'>
			<img src="../../assets/images/ic_mine_notification.png" slot='Icon' class="cell_img">
			<img src="../../assets/images/ic_arrow_gray_small.png" slot='cell-right' class="cell_rightimg">
		</Cell>
		
		<div style="padding:15px 10px;color:#ccc;border-bottom:1px solid #eee">
			<p>暂无新提醒</p>
		</div>

		<my-icon txta='喜欢' txtb='日记' txtc='相册' txtd="我的广播">
			<img src="../../assets/images/ic_album_photo_liked.png" width="30px" slot='mine_icon1'>
			<img src="../../assets/images/ic_my_note.png" width="30px" slot='mine_icon2'>
			<img src="../../assets/images/ic_my_album.png" width="30px" slot='mine_icon3'>
			<img src="../../assets/images/ic_my_status.png" width="30px" slot='mine_icon4'>
		</my-icon>

		<my-icon txta='电影·电视' txtb='读书' txtc='音乐' txtd="同城活动">
			<img src="../../assets/images/ic_my_movies_tvs.png" width="30px" slot='mine_icon1'>
			<img src="../../assets/images/ic_my_books.png" width="30px" slot='mine_icon2'>
			<img src="../../assets/images/ic_my_music.png" width="30px" slot='mine_icon3'>
			<img src="../../assets/images/ic_my_events.png" width="30px" slot='mine_icon4'>
		</my-icon>

		<my-icon txta='舞台剧' txtb='豆瓣时间' txtc='豆列' txtd="订单">
			<img src="../../assets/images/ic_drama_channel_logo.png" width="30px" slot='mine_icon1'>
			<img src="../../assets/images/rd__event.png" width="30px" slot='mine_icon2'>
			<img src="../../assets/images/ic_my_doulist.png" width="30px" slot='mine_icon3'>
			<img src="../../assets/images/ic_my_orders.png" width="30px" slot='mine_icon4'>
		</my-icon>
		

		

	</div>
</template>

<script>
	import Headers from '../../components/header.vue';
	import Cell from '../../components/cell.vue'
	import myIcon from './min_icon.vue'
	export default {
		components:{
			Headers,
			Cell,
			myIcon
		}
	}
</script>

<style>
	 .mine_bg{width: 100%;height: 150px;background: url('../../assets/images/camera_bg.png')no-repeat;color: white;display: flex;justify-content: space-between;align-items: center;}
	 .mine_bg .head_portrait{ width: 30% ;}
	 .mine_bg .home_page{ width: 70% ;}
	 .mine_bg .home_page .user_name{ border-bottom: 1px solid #fff;position: relative;}
	 .mine_bg .home_page .user_name .arrow{ position: absolute;right:5px;top:32px;}
	 .mine_bg .home_page .user_name .sex{ position: absolute;right:5px;top:40px;}
</style>