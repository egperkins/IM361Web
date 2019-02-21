import Vue from 'vue/dist/vue.js'
import "./style.css";





var app = new Vue({




  el: '#app',
  data: {
      pageName:"home",
      EmmaCount: 0,
      JohnCount: 0,
      SammieCount: 0,
  }
});

window.app = app;
