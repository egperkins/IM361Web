import Vue from 'vue/dist/vue.js'
import "./style.css";





var app = new Vue({

  methods: {


  },


  el: '#app',
  data: {
      ChildChosen: " Emma ",
      RewardChosen:" $2 ",
      TaskChosen: "Clean Bedroom",

      display: 'false',
    //Page Titles
      pageName:"home",

    // Child Count
      EmmaCompleteCount: 2,
      JohnCompleteCount: 1,
      SammieCompleteCount:2,

      EmmaTaskCount:3,
      JohnTaskCount: 4,
      SammieTaskCount: 6,
  }
});

window.app = app;
