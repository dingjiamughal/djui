/**
 * @Author: Dingjia
 * @Date:   2018-04-15T15:46:56+08:00
 * @Last modified by:   Dingjia
 * @Last modified time: 2018-04-15T15:46:56+08:00
 */

 export default {
   priceAll: state => {
     let price = 0;
     state.cartList.forEach(item => {
       price += item.Quantity*item.Price
     })

     return price.toFixed(2)
   }
 }
