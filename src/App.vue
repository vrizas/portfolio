<template>
  <Header />
  <Navbar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>


<style lang="scss">
$blue: blue;
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//   }
// } 

// nav a.router-link-exact-active {
//   color: #42b983;
// }

@import './assets/scss/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $blackColor;
}

</style>
