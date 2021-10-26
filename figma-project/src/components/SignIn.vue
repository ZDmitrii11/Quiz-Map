<template>
    <div class="sign">
        <!-- Modal Trigger -->
        <a class="sign-in" href="#modal1" @click="openModal">Sign In</a>
        <!-- Modal Structure Login -->
        <div id="modal1" class="modal my-modal" ref="myModal">
            <div class="modal-content" v-if="isActive === false">
                <h4 class="login-text">Login:</h4>

                <input placeholder="Name" class="my-modal-input" v-model="user.name" type="text">
                <input placeholder="Password" class="my-modal-input" v-model="user.password" type="password">
                <div class="register">
                    <span class="span">Not have accaut?</span>
                    <a @click="trigger" style="font-size: 18px;margin-left: 5px;cursor: pointer">Register</a>
                </div>
                <div class="modal-footer">
                    <button @click="closeModal" class="btn red">Cancel</button>
                    <button @click="Login" class="btn green">LogIn</button>
                </div>
            </div>

            <!-- Modal Structure Register Register  -->
            <div class="modal-content" v-if="this.isActive === true">
                <h4 class="login-text">Register:</h4>

                <input placeholder="example@mail.com" class="input-field" v-model="user.name" type="text">
                <input placeholder="Password" class="input-field" v-model="user.password" type="password">
                <div class="register">
                    <span class="span">Have accaut?</span>
                    <a @click="trigger" style="font-size: 18px;margin-left: 5px;cursor: pointer">Login</a>
                    <div v-if="error.length">
                        <h3>{{error}}</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="closeModal" class="btn red">Cancel</button>
                    <button @click="Register" class="btn green">Register</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import M from 'materialize-css'
    import axios from "axios";

    export default {
        name: "SignIn",
        data() {
            return {
                isActive: false,
                user: {
                    id: 0,
                    name: '',
                    password: '',
                },
                emailregex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                passwordregex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
                error:'',
            }
        },
        methods: {
            trigger() {
                return this.isActive = !this.isActive
            },
            openModal() {
                M.Modal.init(this.$refs.myModal).open()
            },
            closeModal() {
                M.Modal.init(this.$refs.myModal).close()
            },
            Login() {

                try {
                    axios.post('http://localhost:3030/api/users', {
                        name: this.user.name,
                        password: this.user.password
                    }).then(res => {
                        console.log(res.data.token)
                    })
                } catch
                    (e) {
                    console.log(e)
                }
            },
            Register() {
                if (this.emailregex.test(this.user.name) && this.passwordregex.test(this.user.password) && this.user.name !== '') {
                    try {
                        axios.post('http://localhost:3030/api/users', {
                            name: this.user.name,
                            password: this.user.password,
                        }).then(res => {
                            localStorage.removeItem('token')
                            console.log(res)
                            this.user.name = ''
                            this.user.password = ''
                            this.isActive = false
                        })

                    } catch (e) {
                        console.log(e)
                    }
                }
                else {
                this.error = `Incorect Email or Password!`
                }
            },


            mounted() {

                console.log(this.token)
                M.Modal.init(this.$refs.myModal)
            }
        }
    }
</script>

<style scoped>
    .sign-in {
        width: 63.45px;
        height: 14.87px;
        font-family: 'Open Sans', sans-serif;;
        font-style: normal;
        font-weight: 600;
        font-size: 19.8294px;
        line-height: 15px;
        /* identical to box height, or 75% */
        color: #575859;
    }

    .modal::v-deep {
        border: 5px solid #BEEBF8;
        width: 70%;
        height: 500px;
        padding: 3rem;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-text {
        margin-bottom: 30px;
    }

    .span {
        font-weight: bold;
        font-size: 16px;
        cursor: default;
    }

    .modal-footer {
        width: 200px;
    }

    .input-field::v-deep {
        width: 100px;
    }

</style>