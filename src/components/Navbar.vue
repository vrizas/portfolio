<template>
    <nav>
        <a href="/" class="active"><ion-icon name="home"></ion-icon></a>
        <a href="/about"><ion-icon name="card"></ion-icon></a>
        <a href="/portfolio"><ion-icon name="briefcase"></ion-icon></a>
        <a href="/contact"><ion-icon name="mail"></ion-icon></a>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
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
            color: $whiteColor;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 60px;
            min-width: 44px;
            min-height: 44px;
            ion-icon {
                font-size: 24px;
            }
        }
        a.active {
            color: $primaryColor;
        }
    }
</style>