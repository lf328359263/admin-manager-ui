<style scoped>
    .index {
        width: 100%;
        position: relative;
        /*top: 0;*/
        /*bottom: 0;*/
        /*left: 0;*/
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Table :columns="tableColumns" :data="tableData"></Table>
        </Row>
    </div>
</template>
<script>
    // import {getClouds} from '../../libs/confg';
    export default {
        data () {
            return {
                tableColumns : [
                    {
                        title: 'cloudId',
                        key: 'cloudId'
                    },
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '标识',
                        key: 'ext'
                    },
                    {
                        title: '描述',
                        key: 'desc'
                    }
                ],
                // props: {
                //     // tableData: Array
                // },
                tableData: []
                // tableData: utils.getClouds()

            }
        },
        mounted() {
            // getClouds.then(response => {
            //     this.tableData = response.data
            // })
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>