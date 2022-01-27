<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">Products Ordered</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="review-payment text-center">
        <h2 style="color:orange">Products Ordered</h2>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Image </th>
            <th scope="col"> Price </th>
            <th scope="col"> Quantity </th>
            <th scope="col"> Order Id </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of products" :key="item.id"> 
            <th scope="row"> {{item.name}} </th>
            <td>
                <img :src="server + item.image" alt="" width="150" height="100"/>
              </td>
            <td>{{item.price}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.orderid}}</td>
          </tr>
        </tbody>
      </table>
      <router-link :to="`/myOrders`"><button class="btn btn-warning">Go Back</button></router-link>
    </div>
    <br />
  </section>
  <!--/#cart_items-->
</template>

<script>
import { ProductDetails } from '../common/Service';
export default {
  name: "ProductDetails",
  data() {
    return {
      server: "http://127.0.0.1:8000/images/",
      products: undefined,
      param: undefined,
    };
  },
  methods: {
      },
  mounted() {

    ProductDetails(this.param).then((res)=>{
    this.products = res.data.product_details;
    console.log(this.products);
    
    });
    
  },
  created() {
    this.param = this.$route.params.id;
  },
};
</script>

<style>
.form-check {
  color: rgb(145, 141, 141);
}
</style>