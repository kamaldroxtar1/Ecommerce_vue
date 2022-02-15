<template>
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <!--login form-->
            <h2>Login to your account</h2>
            <form @submit.prevent="postLogin()">
              <input
                type="email"
                placeholder="Email Address"
                v-model="emailLogin"
              />
              <input
                type="password"
                placeholder="Enter Password"
                v-model="passwordLogin"
              />
              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
              <button type="submit" class="btn btn-default">Login</button>
              
            </form>
            <br />
          </div>
          <!--/login form-->
        </div>
        <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4">
          <div class="signup-form">
            <!--sign up form-->
            <h2>New User Signup!</h2>
            <form @submit.prevent="postRegister()">
              <input
                type="text"
                placeholder="First Name"
                v-model="f_nameRegister"
              />
              <input
                type="text"
                placeholder="Last Name"
                v-model="l_nameRegister"
              />
              <input
                type="email"
                placeholder="Email Address"
                v-model="emailRegister"
              />
              <input
                type="password"
                placeholder="Enter Password"
                v-model="passwordRegister"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                v-model="c_passwordRegister"
              />
              <button type="submit" class="btn btn-default">Signup</button>
            </form>
          </div>
          <!--/sign up form-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store/store";
import * as type from "../store/types";
import { userLogin } from "../common/Service";
import { getUserId } from "../common/Service";
import { userRegister } from "../common/Service";
import { saveToken } from "@/common/Jwttoken";
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      emailLogin: null,
      passwordLogin: null,
      f_nameRegister: null,
      l_nameRegister: null,
      emailRegister: null,
      passwordRegister: null,
      c_passwordRegister: null,
    };
  },
  computed: mapState({
    msg: (state) => state.emailLogin,
    login: (state) => state.islogin,
  }),
  methods: {
    postLogin() {
      let formData = { email: this.emailLogin, password: this.passwordLogin };
      userLogin(formData)
        .then((res) => {
          if (res) {
            saveToken(res.data.access_token);
            localStorage.setItem("email", formData.email);
            store.dispatch({
              type: type.Islogin,
              id: res.data.access_token,
              userId: res.data.email,
            });
            this.$router.push("/");
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log("Something Wrong " + err);
        });
        getUserId(formData.email)
        .then((res)=>{
          localStorage.setItem('userid',res.data[0].id);
          console.log(localStorage.getItem('userid'));
        })

    },
    postRegister() {
      if (this.passwordRegister == this.c_passwordRegister) {
        let formData = {
          name: this.f_nameRegister,
          l_name: this.l_nameRegister,
          email: this.emailRegister,
          password: this.passwordRegister,
        };
        userRegister(formData)
          .then((res) => {
            if (res) {
              alert(res.data.message);
              console.log(res.data);
            } else {
              alert(res.data.err);
            }
          })
          .catch((err) => {
            alert("Something Wrong" + err);
          });
      } else {
        alert("password not match.. confirm password!");
      }
    }
  }
};
</script>

<style>
</style>