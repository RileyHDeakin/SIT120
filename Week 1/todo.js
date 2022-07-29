import Vue from 'vue'
let app = Vue.createApp({})
		app.mount()
let vue = new Vue({
    el: '#app',
    data: {
        todos: [
            { title: 'assignment1', checked: true },
            { title: 'assignment2', checked: false },
            { title: 'assignment3', checked: false },
        ],
    },
});