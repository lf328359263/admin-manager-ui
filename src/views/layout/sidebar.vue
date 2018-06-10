<template>
    <i-menu :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
        <div class="layout-logo-left">
            <template>
                <Icon type="stats-bars" :size="24" style="color: #fff"></Icon>
                <span class="layout-text" style="color: #fff">服务管理中心</span>
            </template>
        </div>
        <template v-for="item in memuList">
            <Menu-item v-if="item.children.length<=1" :name="item.children[0].name" :key="'menuitem' + item.name">
                <Icon :type="item.children[0].icon || item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
                <span class="layout-text" :key="'title' + item.name">{{ item.children[0].title }}</span>
            </Menu-item>

            <Submenu v-if="item.children.length>1" :name="item.name" :key="item.name">
                <template slot="title">
                    <Icon :type="item.icon" :size="iconSize"></Icon>
                    <span class="layout-text"> {{ item.title }}</span>
                </template>
                <template v-for="child in item.children">
                    <Menu-item :name="'/' + item.name + '/' + child.name" :key="'menuitem' + child.name">
                        <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
                        <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
                    </Menu-item>
                </template>
            </Submenu>
        </template>
    </i-menu>
</template>

<script>
    export default {
        name: 'sidebarMenu',
        props: {
            memuList: Array,
            iconSize: Number,
            menuTheme: {
                type: String,
                default: 'dark'
            },
            openNames: {
                type: Array
            }
        },
        computed:{

        },
        methods: {
            changeMenu (active) {
                this.$router.push({
                    path: active
                });
                this.$emit('on-change', active)
            },
        }
    };
</script>

<style scoped>

</style>