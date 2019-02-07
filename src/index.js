import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    //where are work is
    child1: 'Child 1' ,
    counter: 0
  }
});

window.app = app;
