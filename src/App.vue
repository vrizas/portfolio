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
  cursor: pointer;
}

a, button {
  min-width: 44px;
  min-height: 44px;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
}

ion-icon {
 pointer-events: none;
}

main {
  min-height: calc(100vh - (60px * 2));
  margin-bottom: 60px;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}


</style>
