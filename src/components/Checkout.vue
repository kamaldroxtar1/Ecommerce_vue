<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">Check out</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="review-payment">
        <h2>Review & Payment</h2>
      </div>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">Item</td>
              <td class="description">Name</td>
              <td class="price">Price</td>
              <td class="quantity">Quantity</td>
              <td class="total">Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of items" :key="item.p_id">
              <td class="cart_product">
                <router-link to="#"
                  ><img :src="server + item.productname" alt="" width="150" height="100"
                /></router-link>
              </td>
              <td class="cart_description">
                <h4>
                  <router-link to="#">{{ item.productimagename }}</router-link>
                </h4>
                <p>{{ item.p_code }}</p>
              </td>
              <td class="cart_price">
                <p>Rs. {{ item.price }}</p>
              </td>
              <td class="cart_quantity">
                <div>
                  <input
                    class="text-center"
                    type="text"
                    name="quantity"
                    :value="item.quantity"
                    autocomplete="off"
                    size="2"
                    readonly
                  />
                </div>
              </td>
              <td class="cart_total">
                <p class="cart_total_price">
                  Rs. {{ item.price * item.quantity }}
                </p>
              </td>
            </tr>

          </tbody>
        </table>
        <div></div>
      </div>
      <div class="shopper-informations">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-3 clearfix">
            <div class="bill-to">
              <p>Bill To</p>
              <div class="form-group">
                <form @submit.prevent="postOrders()">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Email *"
                    v-model="user.userEmail"
                  /> <br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="First Name *"
                    v-model="user.userfName"
                  /> <br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Last Name *"
                    v-model="user.userlName"
                  /> <br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Address *"
                    v-model="user.userAddress"
                  /> <br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Postal Code *"
                    v-model="user.userPostal"
                  /> <br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Mobile Phone"
                    v-model="user.userMobile"
                  />
                  <div class="form-check">
                    <span>
                      <label
                        ><input
                          type="radio"
                          value="CashOnDelivery"
                          v-model="pay.paymentMethod"
                          
                        />
                        Cash on Delivery</label
                      > </span
                    >&nbsp;&nbsp;
                    <span>
                      <label
                        ><input
                          type="radio"
                          value="Paypal"
                          v-model="pay.paymentMethod"
                        />
                        Paypal</label
                      >
                    </span>
                  </div>
                  

                  <button type="submit" class="btn btn-success">
                    Make Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="total_area">
              
              <ul>
                <div>
                  <input type="text" v-model="couponCode" />  <button
                          class="btn btn-success btn-sm"
                          @click="applyCoupon()"
                        >
                          Apply Coupon
                        </button>
                </div>
                <li>Discount <span>Rs. {{ this.discount_value }} </span></li>
                <li>Shipping Cost <span>Free</span></li>
                <li>Total <span>Rs {{total()}}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div><br>
  </section>
  <!--/#cart_items-->
</template>

<script>
// import Vue from 'vue';
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// Vue.use(VueSweetalert2);
 import { coupons } from "../common/Service";
 import { userOrders } from "../common/Service";
 import { userAddress } from "../common/Service";
import { mapState } from "vuex";
export default {
  name: "Checkout",
  data() {
    return {
      server: "http://127.0.0.1:8000/images/",
      items:undefined,
      couponCode: undefined,
      coupon: undefined,
      discount_value: 0,
      amount: 0,
      discountPercentage: 0,
      data: JSON.parse(localStorage.getItem("myCart")),
      user: {
        userEmail: undefined,
        userfName: undefined,
        userlName: undefined,
        userPostal: undefined,
        userMobile: undefined,
        userAddress: undefined,
      },
      pay :{
          paymentMethod:""
      },
      submitted: false,
    };
  },
  computed: mapState({
    revieworders: (state) => state.revieworders,
  }),
  methods: {
    total() {
      const items = JSON.parse(localStorage.getItem("myCart"));
      var sum = 0;
      items.forEach((item) => {
        sum = sum + item.price * item.quantity;
      });
      this.amount = sum - this.discount_value;
      if (this.amount < 500) {
        this.amount = this.amount + 50;
      }
      return this.amount;
    },
    applyCoupon() {
      if (this.couponCode != undefined) {
        // let flag = 0;
        var arr = this.coupons;
        for(let i in arr){
          if(arr[i].coupon==this.couponCode){
            this.discountPercentage=arr[i].discount;
            this.discount_value=this.amount*this.discountPercentage/100;
            break;
          }
        }
        if(this.discountPercentage==0){
          alert("enter valid coupon code");
        } 
      } 
      else {
        alert("Enter Coupon Code");
      }
    },
    shipping() {
      if (this.amount > 500) {
        return "Free";
      } else {
        this.amount = this.amount + 150;
        return 150;
      }
    },
    postOrders() {
      let order_id=Math.random().toString(36).slice(2);
      this.submitted = true;
        let array = this.data;
        array.forEach((item) => {
          let objdata = {
            name: item.productname,
            pid: item.pid,
            image: item.productimagename,
            price: item.price,
            quantity: item.quantity,
            uid: localStorage.getItem("email"),
            orderid:order_id,
          };
          console.log(objdata);
          userOrders(objdata)
            .then((res) => {
              if (res) {
                console.log(res.data.message);
              } else {
                alert(res.data.err);
              }
            })
            .catch((err) => {
              alert("Something Wrong" + err);
            });
        });

        let formData = {
          first_name: this.user.userfName,
          last_name: this.user.userlName,
          email: this.user.userEmail,
          postal: this.user.userPostal,
          contact: this.user.userMobile,
          address: this.user.userAddress,
          payment_method: this.pay.paymentMethod,
          uid: localStorage.getItem("email"),
          orderid:order_id
          
        };
        console.log(formData);
        userAddress(formData)
          .then((res) => {
            if (res) {
              console.log(res.data);
              alert("Order Placed Successfully");
            } else {
              alert(res.data.err);
            }
          })
          .catch((err) => {
            console.log();
            alert("Something Wrong" + err);
          });
        localStorage.removeItem("myCart");
        this.$router.push("/");
    },
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem("myCart"));
    console.log(this.details);
    // this.total();
    
    coupons().then((res) => {
      if (res) {
        this.coupons = res.data.Coupons;
        console.log(res.data.Coupons);
      }
    });
  },
};
</script>

<style>
.form-check{
    color:rgb(145, 141, 141);
}
</style>