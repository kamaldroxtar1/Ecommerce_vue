<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">Wishlist</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="review-payment">
        <h2>Wishlist</h2>
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
              <td class="cart_delete">
                  <button class="cart_quantity_delete btn btn-danger" @click="delItem(item)">
                    <i class="fa fa-times"></i>
                  </button>
                <br>
                <br>
                <button class="btn btn-success" @click="
                            addtocart(
                              item.pid,
                              item.quantity,
                              item.productimagename,
                              item.productname,
                              item.price )">
                             Move to Cart </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div><br>
  </section>
  <!--/#cart_items-->
</template>

<script>

export default {
  name: "Wishlist",
  data() {
    return {
      server: "http://127.0.0.1:8000/images/",
      items:undefined,
      data: JSON.parse(localStorage.getItem("myWishlist")),
    };
  },
  methods: {
      delItem(item) {
      let i = this.items.indexOf(item);
      this.items.splice(i, 1);
      let arr = JSON.stringify(this.items);
      localStorage.setItem("myWishlist", arr);
    },
      

    addtocart(id, quantity, image_name, product_name, price) {
        if (localStorage.getItem("myCart")) {
          
          let arr = JSON.parse(localStorage.getItem("myCart"));
          for (let i in arr){
              if(image_name==arr[i].productimagename){
                return alert('Item Already present in Cart , kindly Update quantity there.');
              }
          }
          let obj = {
            pid: id,
            quantity: 1,
           productimagename:image_name,
            price: price,
           productname:product_name,
          };
          console.log(obj);
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          alert('Item added in cart');
        } else {
          let arr = [];
          let obj = {
            pid: id,
            quantity: 1,
            productimagename:image_name,
            price: price,
           productname:product_name,
          };console.log(obj);
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
          alert('Item added in cart');
        }
      },
  },
  mounted() {
    this.items = JSON.parse(localStorage.getItem("myWishlist"));
    console.log(this.items);
  },
};
</script>

<style>
.form-check{
    color:rgb(145, 141, 141);
}
</style>