<template>
    <Breadcrumb>
        <Breadcrumb-item v-for="item in currentPath" :href="item.path" :key="item.name">{{item.title}}</Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
    export default {
        name: "breadcrumbNav",
        props: {
            currentPath: Array
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>