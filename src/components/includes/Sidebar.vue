<template>
  <div class="col-sm-3">
    <div class="left-sidebar">
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
       
        <div class="panel panel-default">
          <div class="panel-heading" v-for="cat in catdata" :key="cat.id">
            <h4 class="panel-title"> <router-link :to="`/category/${cat.id}`">{{cat.category_name	}}</router-link></h4>
          </div>
        </div>
      </div>
      <!--/category-products-->

      <!-- <div class="shipping text-center">
        shipping
         <img src="images/home/shipping.jpg" alt="" /> 
       </div> 
      /shipping-->
    </div>
  </div>
</template>

<script>
import {Category} from '../../common/Service'
export default {
  name: "Sidebar",
  data()
  {
    return{
      catdata:undefined
    }
  },
  mounted()
  {
    Category()
    .then(res=>{
      console.log(res.data.Product_category);
      this.catdata = res.data.Product_category;
    })
  }
};
</script>

<style>
</style>