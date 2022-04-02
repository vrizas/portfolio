<template>
  <Header />
  <main>
    <router-view/> 
  </main>
  <Navbar />
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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');
@import './assets/scss/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: $blackColor;
  color: $whiteColor;
  font-family: $ff-poppins;
  overflow-x: hidden;
}

p {
  font-family: $ff-inter;
  font-size: $fs-xs;
}

a {
  color: $whiteColor;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  color: $whiteColor;
  font-family: $ff-poppins;
}

a, button {
  min-width: 44px;
  min-height: 44px;
}

ion-icon {
 pointer-events: none;
}

main {
  min-height: calc(100vh - (60px * 2));
  margin-bottom: 60px;
}

</style>
