<template>
	<div :class="{headerWrap:true, green:bol}" >
		<span>{{ txt }}</span>
		<slot name='left'></slot>
		<slot name='right'></slot>
		<slot name='search'></slot>
	</div>
</template>

<script>
	export default{
		props:['txt','bol'],
	}
</script>

<style>
	
	.headerWrap{ width: 100%;height: 44px;border-bottom: 1px solid #ccc;background: #f7f7f7;text-align: center;line-height: 44px; position: relative;}
	.green{ background: #48bd5a }
	.headerWrap img{ width: 25px;position: absolute; }
	.headerWrap .chat{ right: 15px;top:8px; }
	.headerWrap .search{ right: 60px;top:8px; }
	.headerWrap .head input{ width: 85%;height: 30px;position: absolute;left: 5px;border-radius: 5px;top:8px; border: none;text-indent: 3em;line-height: 30px;}
	.headerWrap .head img{ position: absolute; width: 25px;}
	.headerWrap .head .icon_search{left: 10px;top:11px;}
	.headerWrap .head .icon_scan{ right: 65px;top:11px; }
</style>