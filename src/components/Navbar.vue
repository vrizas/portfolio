<template>
    <nav>
        <router-link to="/" :class="{active:$route.name==='home'}" :onclick="activeHandler"><ion-icon name="home"></ion-icon></router-link>
        <router-link to="/about" :class="{active:$route.name==='about'}" :onclick="activeHandler"><ion-icon name="card"></ion-icon></router-link>
        <router-link to="/portfolio" :class="{active:$route.name==='portfolio'}" :onclick="activeHandler"><ion-icon name="briefcase"></ion-icon></router-link>
        <router-link to="/contact" :class="{active:$route.name==='contact'}" :onclick="activeHandler"><ion-icon name="mail"></ion-icon></router-link>
        <div class="active-underline" ref="activeUnderline"></div>
    </nav>
</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    },
    computed: {
        activeHandler() {
            if(this.$route.name === 'home') {
                gsap.to(this.$refs.activeUnderline, {duration: 0.2, x: `${100 * 0 / 4}%`, ease: 'power2'})
            } else if(this.$route.name === 'about') {
                gsap.to(this.$refs.activeUnderline, {duration: 0.2, x: `${100 * 4 / 4}%`, ease: 'power2'})
            } else if(this.$route.name === 'portfolio') {
                gsap.to(this.$refs.activeUnderline, {duration: 0.2, x: `${100 * 8 / 4}%`, ease: 'power2'})
            } else if(this.$route.name === 'contact') {
                gsap.to(this.$refs.activeUnderline, {duration: 0.2, x: `${100 * 12  / 4}%`, ease: 'power2'})
            }
        }
    },
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    nav {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background-color: $secondaryColor;
        
        a { 
            width: calc(100% / 4);
            height: 60px;

            ion-icon {
                font-size: 24px;
            }
        }

        a.active {
            color: $primaryColor;
        }

        .active-underline {
            width: calc(100% / 4);
            height: 4px;
            background-color: $primaryColor; 
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
</style>