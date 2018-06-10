<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <sidebar-menu :memu-list="menuList"></sidebar-menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <div class="header-avator-con">
                        <!--<div @click="handleChange" v-if="showFullScreenBtn" class="full-screen-btn-con">-->
                            <!--<Tooltip :content="value ? '退出全屏' : '全屏'" placement="bottom">-->
                                <!--<Icon :type="value ? 'arrow-shrink' : 'arrow-expand'" :size="23"></Icon>-->
                            <!--</Tooltip>-->
                        <!--</div>-->
                        <Dropdown trigger="click" style="margin-right: 0; margin-top: 15px" @on-click="handleClickUserDropdown">
                            <a href="javascript:void(0)">
                                {{ user }}
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>修改密码</DropdownItem>
                                <DropdownItem name="logout">退出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main" :style="contentStyle">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2018 &copy;
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import sidebarMenu from './layout/sidebar';
    import Cookies from 'js-cookie';
    export default {
        name: "main",
        components: { sidebarMenu },
        data() {
            return {
                spanLeft: 4,
                spanRight: 20,
                theme1: 'dark',
                user: Cookies.get('user')
            }
        },
        computed:{
            menuList() {
                return this.$store.state.app.menuList;
            },
            iconSize:function () {
                return this.spanLeft === 4 ? 14 : 24;
            },
            contentStyle: function(){
                let innerHeight = window.innerHeight;
                let contentHeight = innerHeight-50-110;
                return "min-height: "+contentHeight+"px";
            }
        },
        methods: {
            toggleClick: function () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            },
            handleClickUserDropdown (name) {
                if (name === 'logout') {
                    this.$store.commit('logout', this)
                    this.$router.push({
                        name: 'home'
                    })
                }
            }
        }
    }
</script>
<style scoped>
    @import "../style/main.css";
    .header-avator-con{
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        width: 300px;
        .switch-theme-con{
            display: inline-block;
            width: 40px;
            height: 100%;
        }
        .message-con{
            display: inline-block;
            width: 30px;
            padding: 18px 0;
            text-align: center;
            cursor: pointer;
            i{
                vertical-align: middle;
            }
        }
        .change-skin{
            font-size: 14px;
            font-weight: 500;
            padding-right: 5px;
        }
        .switch-theme{
            height: 100%;
        }
        .user-dropdown{
            &-menu-con{
                position: absolute;
                right: 0;
                top: 0;
                width: 150px;
                height: 100%;
                .main-user-name{
                    display: inline-block;
                    width: 80px;
                    word-break: keep-all;
                    white-space: nowrap;
                    vertical-align: middle;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: right;
                }
            }
            &-innercon{
                height: 100%;
                padding-right: 14px;
            }
        }
        .full-screen-btn-con{
            display: inline-block;
            width: 30px;
            padding: 18px 0;
            text-align: center;
            cursor: pointer;
            i{
                vertical-align: middle;
            }
        }
        .lock-screen-btn-con{
            display: inline-block;
            width: 30px;
            padding: 18px 0;
            text-align: center;
            cursor: pointer;
            i{
                vertical-align: middle;
            }
        }
    }
</style>