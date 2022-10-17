<template>
  <div class="container">
  <header_navigateVue class="header_navigateVue"></header_navigateVue>
    <router-view class="router_view"></router-view>
    <div class="navigate">
      <router-link :to="{path:item.path}" v-for="item in navigate_info" :key="item.id" @click="fun(item)">
        <div class="icon">
          <img :src="item.icon" alt="">
        </div>
      {{item.text}}</router-link>
    </div>
  </div>
</template>

<script>
import header_navigateVue from '../components/header_navigate.vue';
import navigateInfo from '../route/navigate_info';
import { onMounted,reactive } from 'vue';
export default{
  name:'entry',
  components:{
    header_navigateVue
  },
  setup(){
    const navigate_info=reactive(navigateInfo)
    onMounted(()=>{
      let now_path=location.pathname
      navigate_info.forEach(item=>{
        if(now_path==item.path){
          item.icon=item.active
          after_icon=item
        }
      })
    })
    let after_icon=reactive({})
    function fun(item){
      if(after_icon)
        after_icon.icon=after_icon.iconPath
      item.icon=item.active
      after_icon=item
    }
    return{navigate_info,fun}
  }
}
</script>

<style scoped lang="less">
.container{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  &>div{
    flex-grow: 1;
  }
}
.router_view{
  width:100%;
  min-height:83%;
  height:83%;
}
.navigate{
  display: flex;
  max-height:10%;
  min-height:10%;
  height:10%;
  &>a{
    padding:5px 0;
    box-sizing:border-box;
    flex-grow: 1;
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-around;
    &>.icon{
      width:45%;
      height:45%;
      &>img{
        width:100%;
        height:100%;
      }
    }
  }
}
</style>