<template>
    <div>
        count
        {{$store.state.count}}
    </div>
</template>

<script>
    export default {
        computed: {
            count(){
                return this.$store.state.count;
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>