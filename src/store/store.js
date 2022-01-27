import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{

        uid:"",
        islogin:"",
        inCart:JSON.parse(localStorage.getItem('myCart'))?JSON.parse(localStorage.getItem('myCart')):[],
        inWishlist:JSON.parse(localStorage.getItem('myWishlist'))?JSON.parse(localStorage.getItem('myWishlist')):[]
    },
    getters:{

        inCart: state=>state.inCart,
        inWishlist: state=>state.inWishlist
       },
    mutations:{

        mylogin(state,payload){
            return state.islogin = payload.id,state.uid = payload.userId
        },
        ADD_TO_CART(state,id){state.inCart.push(id)},
        ADD_TO_WISHLIST(state,id){state.inWishlist.push(id)},
    },
    actions:{

        islogin(context,payload){
            context.commit('mylogin',payload)
        },
        addToCart(context,id){ context.commit('ADD_TO_CART',id)},
        addToWishlist(context,id){ context.commit('ADD_TO_WISHLIST',id)},
    },
})