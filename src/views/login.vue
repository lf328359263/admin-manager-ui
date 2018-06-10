<template>
    <div class="login">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>欢迎登录
                </p>
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="username">
                        <Input type="text" v-model="formInline.username" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>
                </Form>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        data () {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        Cookies.set('user', this.formInline.username);
                        Cookies.set('password', this.formInline.password);
                        this.$store.commit('setUser', this.formInline);
                        this.$Message.success('Success!');
                        this.$router.push({
                            path: '/'
                        });
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
        background-position: center;
        background-color: #495060;
        position: relative;
        &-con {
            width: 300px;
            z-index: 100;
            margin: 0 auto;
            padding-top: 40px;
        }
    }
</style>