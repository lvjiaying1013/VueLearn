import Vue from 'vue'

Vue.filter('date',function(val,type){
	let date = new Date(),
	year = date.getFullYear(),
	setTime = date.setTime(val),
	getTime = '',
	month = date.getMonth()+1,
	day = date.getDate()<10?'0'+date.getDate():date.getDate(),
	hours = date.getHours()<10?'0'+date.getHours():date.getHours(),
	minute = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
	second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();

	if(type == 'YMD'){
		return getTime = year+'年'+month+'月'+ day +'日'
	}
})