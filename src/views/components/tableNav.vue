<template>
    <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData" :columns="tableColumns"></Table>
</template>

<script>
    export default {
        name: "tableNav",
        props: {
            tableData: Array,
            showBorder: false,
            showStripe: false,
            showHeader: true,
            showIndex: true,
            showCheckbox: false,
            fixedHeader: false,
            tableSize: 'default',
            columns: Array
        },
        computed: {
            tableColumns() {
                if (this.showCheckbox) {
                    this.columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    this.columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>