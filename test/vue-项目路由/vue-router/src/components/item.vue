<template>
	<div class="itemWrap" @click='toggle()'>
		<span v-show='!bol'>
			<slot name='normolImg'></slot><br>
		</span>
		<span v-show='bol'>
			<slot name='activelImg'></slot><br>
		</span>
		<span :class='{bg:bol}'>{{ txt }}</span>
	</div>
</template>

<style>
	.itemWrap{ width: 20%;float:left; text-align: center;font-size:0;}
	.itemWrap img{ width: 35px;height: 35px; }
	.itemWrap span{ font-size: 12px;color: #666 }
	.itemWrap .bg{ color:green; }
</style>

<script>
	export default{
		props:['txt','mark','sel'],
		computed:{
			bol:function(){				
				if(this.mark == this.sel){
					return true
				}
				return false				
			}
		},
		methods:{
			toggle:function(){
				this.$emit('change',this.mark);
				this.$router.push('/'+this.mark)
			}
		}
	}
</script>