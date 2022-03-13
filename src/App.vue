<template>
  <Header />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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

$primaryColor: #F5DF4E;
$secondaryColor: #2B2A2A;
$blackColor: #191919;
$whiteColor: #F7F7F7;

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: $blackColor;
}
</style>
