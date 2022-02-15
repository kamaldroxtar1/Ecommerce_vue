import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// import {createRouter , createWebHistory} from 'vue-router';
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
import Paypal from "../components/Paypal.vue";

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
            component:Contact,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/myProfile',
            name:'About',
            component:About,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/myOrders',
            name:'OrderDetails',
            component:OrderDetails,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/productDetails/:id',
            name:'ProductDetails',
            component:ProductDetails
        },
        {
            path:'/Checkout',
            name:'Checkout',
            component:Checkout,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/Paypal',
            name:'Paypal',
            component:Paypal,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/Wishlist',
            name:'Wishlist',
            component:Wishlist,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
        },
        {
            path:'/Cart',
            name:'Cart',
            component:Cart,
            beforeEnter:((to, from,next) => {
                if (localStorage.getItem('email')){
                next();
                }
                else{
                    next('/Login');
                }
            })
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
    ]
});

