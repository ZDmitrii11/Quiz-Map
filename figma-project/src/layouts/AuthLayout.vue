<template>
    <div class="auth-layout">
        <div class="nav">
            <h3>Autorization</h3>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "auth-layout"
    }
</script>

<style scoped>
.auth-layout{
    background-color: red;
}
</style>