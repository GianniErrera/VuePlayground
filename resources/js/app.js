/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('coupon', require('./components/Coupon.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('message', require('./components/Message.vue').default);
Vue.component('modal', require('./components/Modal.vue').default);
Vue.component('select-order-by', require('./components/SelectOrderBy.vue').default);
Vue.component('tab', require('./components/Tab.vue').default);
Vue.component('tabs', require('./components/Tabs.vue').default);
Vue.component('task-list', require('./components/TaskList.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
/* Vue.component('task-list', {
    template: <div><task v-for="task in tasks">{{task.task}}</task></div>,

    data() {
        return {
            tasks: [
                { description: "Go to the store", completed: true },
                { description: "Demonstrate", completed: true },
                { description: "Jogging session", completed: true },
                { description: "Go to the pub", completed: false },
                { description: "Lunch break", completed: true },
                { description: "Phone to Giovanni", completed: false },
            ]
        }
    }

}); */

 Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app',

    mounted() {
        console.log("I'm working");
    }
})


