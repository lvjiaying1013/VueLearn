<template>
	<div class="filmWrap">
		<div class="film_more">
			<h3>影院热映</h3>
			
				<p>更多</p>
			
			<img src="../../../assets/images/ic_arrow_green_right.png"  alt="">
		</div>
	</div>
</template>

<style>
	.filmWrap{ padding:20px; }
	.filmWrap .film_more { position: relative; display: flex;justify-content: space-between;align-items: center;}
	/*.filmWrap .film_more h3{ float: left; }*/
	.filmWrap .film_more p{ /*float: right;*/margin-right: 20px; font-weight:bold;color: rgb(100,200,116);}
	.filmWrap .film_more  img{ width: 8px; position: absolute; right: 0;}
</style>