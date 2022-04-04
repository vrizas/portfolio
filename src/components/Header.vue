<template>
    <header>
        <router-link to="/"><img src="../assets/img/logo.svg" alt="Vrizas Logo"></router-link>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    header {
        height: 60px;
        padding: 15px 20px;

        a {
            display: inline-flex;
            align-items: center;
            min-width: 44px;
            min-height: 44px;

            img {
                width: 24px;
            }
            
        }
    }

    @media screen and (min-width: 640px) {
        header  {
            padding: 20px 35px;
        }
    }
</style>