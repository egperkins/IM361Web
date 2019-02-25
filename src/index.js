import Vue from 'vue/dist/vue.js'
import "./style.css";





var app = new Vue({




  el: '#app',
  data: {

    //Page Titles
    pageName:"home",
    pageName:"newtask",
    pageName:"about",


    // Child Count
      EmmaCount: 0,
      JohnCount: 0,
      SammieCount: 0,

      EmmaTaskCount:0,

  }
});

window.app = app;
