<template>
  <div id="app">
    <Counter/>

    <hr>
    <p>counter by vuex</p>
    <CounterVuex/>

    <hr>
    <p>counter by vuex with mapState</p>
    <p>But, we need to make it available to every single vue componnet</p>
    <CounterVuex2/>

    <hr>
    <p>other component using this "count"</p>
    <Other/>
  </div>
</template>

<script>
import Counter from './components/Counter'
import CounterVuex from './components/CounterVuex'
import CounterVuex2 from './components/CounterVuex2'
import Other from './components/Other'

export default {
  name: 'app',
  components: {
    Counter,
    CounterVuex,
    CounterVuex2,
    Other
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
