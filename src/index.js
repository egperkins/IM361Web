import Vue from 'vue/dist/vue.js'
import "./style.css";





var app = new Vue({




  el: '#app',
  data: {

    //Page Titles
    pageName:"home",

    // Child Count
      EmmaCompleteCount: 2,
      JohnCompleteCount: 0,
      SammieCompleteCount: 0,

      EmmaTaskCount:3,
      JohnTaskCount: 0,
      SammieTaskCount: 2,

      EmmaRewardCount: 0,
      JohnRewardCount: 0,
      SammieRewardCount:0,

  }
});

window.app = app;
