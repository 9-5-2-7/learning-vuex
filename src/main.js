// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

// now we create a Vuex.store
// you never change state direct, using mutation to change state



// window.store = new Vuex.Store({...})

// by using mapState
// we need to make it available to every single vue componnet
let store = new Vuex.Store({



    // considering lots of part of your app will using this count
    // instead of to create a global variable to hold it,
    // we using vuex to holding it, and we using mutation to change it or filtering it
    state: {
        count: 0
    },

    mutations: {
        increment(state) {
            state.count++
        }
    }
})

// let CounterVuex.vue work
window.store = store


// 但是，通常我们都会使用单独的文件来存放 store -- src/store/index.js
// 然后把它引进来，再让每个 component 都能够访问到它 -- #1
// **但是需要注意的是，你的 application 里只允许有一个 "store"**
// import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store // make it available to every single vue componnet => this.$store

  // store: Vuex.Store(store) -- #1
})
