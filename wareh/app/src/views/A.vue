<template>
    <div>
        <h1>A页面</h1>
        <div>
            <router-link to="/a/test1">test1</router-link>
        </div>
        <div>
            <router-link to="/a/test2">test2</router-link>
        </div>
        

        <router-view/>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>
// scoped  代表局部的，只有在当前的好使，避免污染
<style lang="scss" scoped>

</style>