import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import Contact from '../components/Contact.vue';
import Checkout from '../components/Checkout.vue';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
//import ProductDeatils from '../components/ProductDeatils.vue';
import CategoryProducts from '../components/CategoryProducts.vue';
import Wishlist from '../components/Wishlist.vue';
import About from '../components/About.vue';
import OrderDetails from '../components/OrderDetails';
import ProductDetails from '../components/ProductDetails.vue';

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/Contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/myProfile',
            name:'About',
            component:About
        },
        {
            path:'/myOrders',
            name:'OrderDetails',
            component:OrderDetails
        },
        {
            path:'/productDetails/:id',
            name:'ProductDetails',
            component:ProductDetails
        },
        {
            path:'/Checkout',
            name:'Checkout',
            component:Checkout
        },
        
        {
            path:'/Wishlist',
            name:'Wishlist',
            component:Wishlist
        },
        {
            path:'/Cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/category',
            name:'Products',
            component:Products
        },
        {
            path:'/category/:id',
            name:'CategoryProducts',
            component:CategoryProducts
        },
        // {
        //     path:"/productdeatils/:id",
        //     name:"ProductDeatils",
        //     component:ProductDeatils
        // }


    ]
});