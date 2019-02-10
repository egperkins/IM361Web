import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    //where are work is
    Child1: 'Billy' ,
    counter1: 0 ,

    Child2: 'Annabelle' ,
    counter2: 0 ,

  }
});

window.app = app;
