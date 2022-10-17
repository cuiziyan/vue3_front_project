<template>
  <div class="cover">
      <div>请切换[竖屏手机]进入</div>
  </div>
</template>

<script>
export default{
  name:'cover',
  setup(){

    return{}
  }
}
</script>

<style scoped lang="less">
.cover{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.2);
    &>div{
      font-size:120px;
    }
}
</style>