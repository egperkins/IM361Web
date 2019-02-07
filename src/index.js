import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    //where are work is
    message: 'Hello Vue!' ,
    counter: 0 
  }
});

window.app = app;
