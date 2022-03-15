<template>
    <nav>
        <router-link to="/" :class="{active:$route.name==='home'}"><ion-icon name="home"></ion-icon></router-link>
        <router-link to="/about" :class="{active:$route.name==='about'}"><ion-icon name="card"></ion-icon></router-link>
        <router-link to="/portfolio" :class="{active:$route.name==='portfolio'}"><ion-icon name="briefcase"></ion-icon></router-link>
        <router-link to="/contact" :class="{active:$route.name==='contact'}"><ion-icon name="mail"></ion-icon></router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
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
            width: 100%;
            height: 60px;

            ion-icon {
                font-size: 24px;
            }
        }

        a.active {
            color: $primaryColor;
        }
    }
</style>