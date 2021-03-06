/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const jquery = require('jquery');

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});


/**
 * Config admin side menu
 */
(function($) {
    $('.has-treeview').on('click', function(e) {
        e.preventDefault()
        $(this).toggleClass('menu-open')
        $(this).children('.nav-treeview').toggleClass('d-none')

        $(this).find('.i.nav-right-icon').text('hello')

        if($(this).children('a').children('p').children('i').text() == 'keyboard_arrow_left') {
            $(this).children('a').children('p').children('i').text('keyboard_arrow_down')
        } else {
            $(this).children('a').children('p').children('i').text('keyboard_arrow_left')
        }

    })

    $('.nav-treeview .nav-item a').on('click', function(e) {
        e.stopPropagation()
    })

})(jQuery)


// CommonJS
const Swal = window.Swal = require('sweetalert2')
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.swtoaster = function(msg, icon) {
    Toast.fire({
        icon: icon,
        title: msg
    })
}