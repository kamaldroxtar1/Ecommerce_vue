<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">My Profile</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="row">
        <div class="col-sm-7">
          <div class="review-payment text-center">
            <h2>Profile</h2>
          </div>
          <form @submit.prevent>
            <div class="form-group row">
              <label for="name" class="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="f_name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="lname" class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  v-model="l_name"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input
                  type="email"
                  readonly
                  class="form-control"
                  id="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="userAddress" class="col-sm-2 col-form-label"
                >Address</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="userAddress"
                  v-model="address"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="phone" class="col-sm-2 col-form-label">Phone</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  v-model="phone"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-4"></div>
              <router-link to="/">
                <button class="btn btn-danger col-sm-2">Cancel</button>
              </router-link>
              <div class="col-sm-1"></div>
              <router-link to="">
                <button @click="Post()" class="btn btn-success col-sm-2">
                  Update
                </button>
              </router-link>
            </div>
          </form>
        </div>
        <div class="col-sm-5">
          <div class="review-payment text-center">
            <h2>Password Update</h2>
          </div>
          <form @submit.prevent>
            <div class="form-group row">
              <label for="oldpassword" class="col-sm-2 col-form-label"> Old Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="oldpassword"
                  v-model="old_password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="newpassword" class="col-sm-2 col-form-label">New Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="newpassword"
                  v-model="new_password"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="cpassword" class="col-sm-2 col-form-label">Confirm Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="cpassword"
                  v-model="c_password"
                />
              </div>
            </div>
            <div class="text-right">
              <button class="btn btn-success" @click="Update_password()">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br />
  </section>
  <!--/#cart_items-->
</template>

<script>
import { UserDetails } from "../common/Service";
import { UpdateUserDetails } from "../common/Service";
import { UpdatePassword } from "../common/Service";
export default {
  name: "About",
  data() {
    return {
      server: "http://127.0.0.1:8000/images/",
      user: undefined,
      param: undefined,
      f_name: null,
      l_name: null,
      email: null,
      old_password: null,
      new_password: null,
      c_password: null,
      address: null,
      phone: null,
    };
  },
  methods: {
    Post() {
      let formData={
        name:this.f_name,
        l_name:this.l_name,
        email:this.email,
        address:this.address,
        phone:this.phone
      }
      console.log(formData);
      UpdateUserDetails(formData).then((res)=>{
        console.log(res.data);
        alert("Updated Successfully");
      });
    },
    Update_password(){
      let new_password=this.new_password;
      if(new_password.length<8){
        return alert("Password length must be atleast 8 character");
      }
      let c_password=this.c_password;
      if(new_password!=c_password){
        return alert("Password and Confirm Password must be same");
      }
      let formData={
        password:this.old_password,
        c_password:this.c_password,
        email:this.email
      }
      UpdatePassword(formData).then((res)=>{console.log(res.data)});
    }
  },
  mounted() {
    this.param = localStorage.getItem("email");

    UserDetails(this.param).then((res) => {
      this.user = res.data.user_detail[0];
      console.log(this.user);
      this.f_name = this.user.name;
      this.l_name = this.user.l_name;
      this.email = this.user.email;
      this.address = this.user.address;
      this.phone = this.user.phone;
    });
  },
};
</script>

<style>
.form-check {
  color: rgb(145, 141, 141);
}
</style>