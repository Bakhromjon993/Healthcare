<template>
  <div id="app">
    <div class="left">
      <div class="logo">
        <a href="#"><img src="./assets/img/logo.png" alt=""></a>
      </div>
      <div class="title">Medicine</div>
      <ul class="menu">
        <li v-for="(link,index) of links" :key="index">
          <img :src="link.src" alt="">
          <router-link class='btn' :to="link.link" active-class="active" exact>{{link.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="top">
        <div class="tleft">
          <img class="search" src="./assets/img/search.png" alt="">
          <input class="sinput" type="text" placeholder="Search">
        </div>
        <div class="tright">
          <div class="bell">
            <a href="#">
              <span class="orange"></span>
              <img class="bell_pic" src="./assets/img/bell.png" alt="">
            </a>
          </div>
          <div class="ava">
            <a href="#">
              <img src="./assets/img/ava.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="info_panel">
        <div class="row">
          <div class="col-3">
            <div class="item" id='workers'>
              <img src="./assets/img/personnel.png" alt="">
              <div class="text">
                <div class="title">Personnel</div>
                <div class="numbers">{{personnel}}</div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="item" id='patients'>
              <img src="./assets/img/patients.png" alt="">
              <div class="text">
                <div class="title">Patients</div>
                <div class="numbers">{{patients}}</div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="item" id='rooms'>
              <img src="./assets/img/rooms.png" alt="">
              <div class="text">
                <div class="title">Rooms</div>
                <div class="numbers">{{rooms}}</div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="item" id='budget'>
              <img src="./assets/img/budget.png" alt="">
              <div class="text">
                <div class="title">Budget</div>
                <div class="numbers">{{budget}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bottom">
        <!-- <app-patients class="menu" v-show="isPatAc"></app-patients>
        <app-appointments class="menu" v-show="isAppAc"></app-appointments>
        <app-doctors class="menu" v-show="isDocAc"></app-doctors>
        <app-departments class="menu" v-show="isDepAc"></app-departments>
        <app-help class="menu" v-show="isHelpAc"></app-help>   -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      links: [
        {
          src: require('./assets/img/main.svg'),
          title: 'Main Page',
          link: '/'
        },
        {
          src: require('./assets/img/app.svg'),
          title: 'Appointments',
          link: '/appointments'
        },
        {
          src: require('./assets/img/doc.svg'),
          title: 'Doctors',
          link: '/doctors'
        },
        {
          src: require('./assets/img/dep.svg'),
          title: 'Departments',
          link: '/departments'
        },
        {
          src: require('./assets/img/pat.svg'),
          title: 'Patients',
          link: '/patients'
        },
        {
          src: require('./assets/img/help.svg'),
          title: 'Help',
          link: '/help'
        },
      ],
      personnel: 213,
      patients: 104,
      rooms:24,
      budget:12174,
    }
  },
  methods:{
  },
}
</script>

<style lang="scss">
@import "@/scss/style.scss";
  
</style>