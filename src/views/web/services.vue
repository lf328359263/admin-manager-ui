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
    import {getServices} from '../../libs/cloud';
    export default {
        data () {
            return {
                tableColumns : [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'APP名称',
                        key: 'appName'
                    },
                    {
                        title: '端口',
                        key: 'port'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    }
                ],
                // props: {
                //     // tableData: Array
                // },
                // d : {},
                tableData: []
                // tableData: utils.getClouds()

            }
        },
        mounted() {
            getServices().then(response => {
                this.tableData = JSON.parse(JSON.stringify(response.data))['serviceList'];
            })
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