<template>
	<div class="newsWrap">
		<div class="news_box">
			<h4><slot name='title'></slot></h4>
			<p style="margin-top:15px;color:#999"><slot name="content"></slot></p>
			<p style="margin-top:25px;" >作者：<slot name='auth'></slot></p>
		</div>
		<div class="news_img"><slot name='img'/></div>
	</div>
</template>

<style>
	.newsWrap{ display: flex;padding: 30px;border-bottom: 1px solid #ccc }
	.newsWrap .news_box{ text-align: left; }
	
	
</style>
<script>
	export default{

	}
</script>

