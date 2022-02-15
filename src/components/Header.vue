<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope"></i> info@domain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
            <div class="btn-group pull-right">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#">Canada</a></li>
                  <li><a href="#">UK</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#">Canadian Dollar</a></li>
                  <li><a href="#">Pound</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class=" shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li class="dropdown ">
                  <a href=""> Account <i class="fa fa-user"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li class="black">
                      <router-link to="/myProfile">My Profile</router-link>
                    </li>
                    <li>
                      <router-link to="/myOrders">My Orders</router-link>
                    </li>
                    <li><router-link to="/trackOrders">Track Orders</router-link></li>
                  </ul>
                </li>

                <li>
                  <router-link to="/Wishlist"
                    ><i class="fa fa-star"></i>Wishlist</router-link
                  >
                </li>

                <li>
                  <router-link to="/Checkout"
                    ><i class="fa fa-crosshairs"></i>Checkout</router-link
                  >
                </li>

                <li>
                  <router-link to="/Cart"
                    ><i class="fa fa-shopping-cart"></i>Cart
                    <sup id="a">{{ numInCart }}</sup>
                  </router-link>
                </li>

                <li>
                  <router-link to="/Login" v-if="!login"
                    ><i class="fa fa-lock"></i> Login</router-link
                  >
                </li>
                <li>
                  <router-link to="#" v-if="login"
                    >Welcome : {{ email }}</router-link
                  >
                </li>
                <li>
                  <router-link to="/" v-if="login" @click.native="logout()"
                    >Logout</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li class="dropdown">
                  <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li>
                      <router-link to="/ProductDeatils">PD</router-link>
                    </li>

                    <li>
                      <router-link to="/Checkout">Checkout</router-link>
                    </li>
                    <li><router-link to="/Cart">Cart</router-link></li>
                    <li>
                      <router-link to="/Login" v-if="!login">Login</router-link>
                    </li>
                    <li>
                      <router-link to="#" v-if="login"
                        >Welcome : {{ email }}</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/" v-if="login" @click.native="logout()"
                        >Logout</router-link
                      >
                    </li>
                  </ul>
                </li>

                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
import axios from "axios";
import { getToken } from "../common/Jwttoken";
import store from "../store/store";
import * as type from "../store/types";
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState({
    msg: (state) => state.email,
    login: (state) => state.islogin,
    numInCart() {
      return this.inCart.length;
    },
    inCart() {
      return this.$store.getters.inCart;
    },
  }),

  data() {
    return { email: localStorage.getItem("email") };
  },
  methods: {
    logout() {
      const token = getToken();
      const url = "http://127.0.0.1:8000/api/logout/";
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = token;
      axios.post(url, data, config).then((res) => {
        this.$router.push("/Login");
        localStorage.clear();
        store.dispatch({
          type: type.Islogin,
          id: null,
          userId: null,
        });
        console.log(res.data.message);
      });
    },
    show() {
      if ("id_token" in localStorage) {
        store.dispatch({
          type: type.Islogin,
          id: getToken(),
          userId: localStorage.getItem("email"),
        });
      }
    },
  },
  mounted: function mounted() {
    this.show();
  },
};
</script>

<style>
.black{
    text-decoration-color: none;
}
</style>