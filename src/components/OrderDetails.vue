<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">Order Details</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="review-payment text-center">
        <h2 style="color:orange">Orders</h2>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Address</th>
            <th scope="col">Postal Code</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of orders" :key="item.id"> 
            <th scope="row" > <router-link :to="`/ProductDetails/${item.orderid}`" style="color:orange"> {{item.orderid}} </router-link></th>
            <td>{{item.first_name}}</td>
            <td>{{item.last_name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td>{{item.postal}}</td>
            <td>{{item.payment_method}}</td>
            <td>{{item.created_at.slice(0,10)}}</td>

          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </section>
  <!--/#cart_items-->
</template>

<script>
import { OrderDetails } from "../common/Service";
export default {
  name: "OrderDetails",
  data() {
    return {
      server: "http://127.0.0.1:8000/images/",
      orders: undefined,
      param: undefined,
    };
  },
  methods: {},
  mounted() {
    this.param = localStorage.getItem("email");

    OrderDetails(this.param).then((res) => {
      this.orders = res.data.order_details;
      console.log(this.orders);
    });
  },
};
</script>

<style>
.form-check {
  color: rgb(145, 141, 141);
}
</style>