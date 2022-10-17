<template>
  <div class="container">
      <div class="top">
        <div>
          <div class="title">{{time}}</div>
          <div class="time">{{battery_charging}}</div>
          <div class="battery">
            {{battery}}%
            <div>
              <div class="process" ref="process">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="status">2</div>
  </div>
</template>

<script>
import {ref,onMounted, watch} from 'vue'
export default{
  name:'header_navigate',
  setup(){
    let battery=ref(0)
    let time=ref('00:00')
    let battery_charging=ref(false)
    let process=ref(null)
    onMounted(()=>{

      let date=new Date()
      let hour=date.getHours()
      let minute=date.getMinutes()
      let second=date.getSeconds()
      time.value=`${hour}:${minute}`

      setInterval(() => {
        if(second>=60){
          second=0
          minute+=1
          if(minute>=60){
            hour+=1
            minute=0
            if(hour>=24){
              hour=0
            }
            time.value=`${hour}:${minute}`
          }
        }
        second+=1
      }, 1000);      

      // 得到当前的电量
      navigator.getBattery().then(value=>{
        battery.value=value.level*100
        battery_charging.value=value.charging
        process.value.style.width=(value.level*100)+'%'
        setInterval(() => {
          if(battery_charging.value!=value.charging||battery.value!=value.level*100){
            let {level,charging}=value
            battery.value=level*100
            process.value.style.width=(level*100)+'%'
            battery_charging.value=charging
          }
        }, 1000);
      })
    })
    return{battery,battery_charging,process,time}
  }
}
</script>

<style scoped lang="less">
.container{
  display: flex;
  flex-direction: column;
  position: relative;
  // max-height:2%;
  height:2%;
  width:100%;
  .top{
    min-height:30%;
    max-height:30%;
    height:30%;
  }
  .top>div{
    height:100%;
    font-size:13px;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    padding:0 5px;
    box-sizing: border-box;
    &>div{
      flex-grow: 1;
    }
  }
  .title{
    text-align:start;
  }
  .process{
    background: red;
    min-height:100%;
    max-height:100%;
    width:0%;
    border-radius:2px;
  }
  .status{
    background: rgba(255,0,0,.5);
  }
  .battery{
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height:80%;
    &>div{
      min-height:100%;
      max-height:100%;
      height:100%;
      width:20%;
      border-radius:2px;
      border:1px solid red;
    }
  }
}
</style>