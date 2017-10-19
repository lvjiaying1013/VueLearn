<template>
	<div class="main">
		<div class="icon">
			<div>
				<slot name='mine_icon1'></slot>

				<p>{{ txta }}</p>
			</div>
		</div>
		<div class="icon">
			<div>
				<slot name='mine_icon2'></slot>

				<p>{{ txtb }}</p>
			</div>
		</div>
		<div class="icon">
			<div>
				<slot name='mine_icon3'></slot>

				<p>{{ txtc }}</p>
			</div>
		</div>
		<div class="icon">
			<div>
				<slot name='mine_icon4'></slot>

				<p>{{ txtd }}</p>
			</div>
		</div>
	</div>
</template>
<style>
	.main{ display: flex;justify-content: space-between;align-items: center; }
	.main .icon{ width: 25%;height: 100px;padding:15px 0; border-bottom: 1px solid #ccc;display: flex;justify-content: center;align-items: center;}

</style>

<script>
	export default{
		props:[ 'txta', 'txtb','txtc','txtd',]
	}
</script>