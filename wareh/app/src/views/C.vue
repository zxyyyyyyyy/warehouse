<template>
    <div>
   <h3>C页面</h3>
   {{$route.params.id}}
   ----------------------
   {{$store.state.count}}
    </div>
</template>

<script>
    export default {
        data:function() {
            return {
                msg:'xxx'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>