<template>
    <component :is="comp"></component>
</template>

<script>
import { onMounted, ref } from 'vue'
import cover from './components/cover.vue'
export default{
  name:'app',
  components:{
    cover
  },
  setup(){
    let comp=ref('h1')
      onMounted(()=>{
          if(window.innerWidth>=430){
            comp.value='cover'
          }else{
            comp.value='router-view'
          }        
        window.addEventListener('resize',(e)=>{
          if(e.currentTarget.innerWidth>=430){
            comp.value='cover'
          }else{
            comp.value='router-view'
          }
      })
    })
    return{comp}
  }
}
</script>

<style scoped>
.App{
  /* width:100%; */
  /* height:100%; */
}
routerView{
  width:100%;
  height:80%;
  background: red;
}
</style>