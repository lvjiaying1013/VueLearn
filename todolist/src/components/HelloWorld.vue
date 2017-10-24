<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model='content' @keydown.enter='fn(content)'  >
    <ol>
      <li v-for="(item,index) in items" :key='item.index' @click='item.bol = !item.bol' :class='{bg:item.bol}' @dblclick='del(index)'>
       <p>{{ item.case }}</p><p>Time：{{ item.time | date('YMD') }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
  import Storage from './Storage.js'

  export default{
    data(){
      return{
        title:'to do list?',
        items:Storage.fetch(),
        content:''
      }
    },
    methods:{
      fn(content ){
        if(this.content !==''&& this.content.replace(/\s+/g,'')){
          this.items.push({
            case:content,bol:false,time:(new Date()).getTime()
          });
          this.content = ''
        }
      },
      del(i){
        this.items.splice(i,1)
      }
    },
    watch:{
      items(items){
        Storage.save(items)
      }
    }
  }
  
</script>

<style>
  .bg{ color:red; }
</style>