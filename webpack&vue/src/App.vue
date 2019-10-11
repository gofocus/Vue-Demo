<template>
    <div>
        <p>App</p>
        <router-link to="/">index</router-link>
        <router-link to="/account">account</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "App",
    }
</script>

<style scoped>

</style>
