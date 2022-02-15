import axios from 'axios';
import {MAIN_URL} from '@/common/Url';


 export function userLogin(data)
 {
        return axios.post(`${MAIN_URL}login`,data)
 }
 export function getUserId(email)
 {
        return axios.get(`${MAIN_URL}getuserid/${email}`)
 }
 export function userRegister(data)
 {
     return axios.post(`${MAIN_URL}register`,data)
 }
   
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}

export function Category()
{
    return axios.get(`${MAIN_URL}category`)
}

export function category_product(id)
{
    return axios.get(`${MAIN_URL}category_product/${id}`)
}

export function product()
{
    return axios.get(`${MAIN_URL}product`)
}

export function singleproduct(id)
{
    return axios.get(`${MAIN_URL}singleproduct/${id}`)
}
export function userOrders(data)
{
    return axios.post(`${MAIN_URL}order`,data)
}
export function userAddress(data)
{
    return axios.post(`${MAIN_URL}address`,data)
}
export function sendMail(data)
{
    return axios.post(`${MAIN_URL}sendmail`,data)
}
export function UpdateUserDetails(data)
{
    return axios.post(`${MAIN_URL}UpdateUserDetails`,data)
}
export function UpdatePassword(data)
{
    return axios.post(`${MAIN_URL}UpdatePassword`,data)
}
export function coupons()
{
    return axios.get(`${MAIN_URL}coupons`)
}
export function UserDetails(email){
    return axios.get(`${MAIN_URL}UserDetails/${email}`)
}
export function OrderDetails(email){
    return axios.get(`${MAIN_URL}OrderDetails/${email}`)
}
export function ProductDetails(orderid){
    return axios.get(`${MAIN_URL}ProductDetails/${orderid}`)
}
export default {userLogin,getUserId,userRegister,userContact,Category,category_product,userOrders,sendMail,userAddress,coupons,UserDetails,OrderDetails,ProductDetails,UpdateUserDetails,UpdatePassword};