<template>
    <header>
        <a href="/"><img src="../assets/logo.svg" alt="Vrizas Logo"></a>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
    header {
        padding: 20px 25px;
        a {
            display: inline-block;
            min-width: 44px;
            min-height: 44px;
            img {
                width: 24px;
            }
        }
    }
</style>