<template>
    <header>
        <a href="/"><img src="../assets/img/logo.svg" alt="Vrizas Logo"></a>
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
        padding: 20px $primaryPadX;
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
</style>