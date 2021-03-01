
// import Router from 'vue-router'

const Home = resolve => require(['pages/index/home'],resolve)
const Main = resolve => require(['pages/main/main'],resolve)
const Pro = resolve => require(['pages/main/pro'],resolve)
const Orginal = resolve => require(['pages/main/orginal'],resolve)
const About = resolve => require(['pages/main/about'],resolve)
const Cart = resolve => require(['pages/main/cart'],resolve)
const CheckOut = resolve => require(['pages/main/checkOut'],resolve)
const GoodsDetail = resolve => require(['pages/details/goodsdetail'],resolve)
// USER
const User = resolve => require(['pages/user/user'],resolve)
const Warranty = resolve => require(['pages/user/warranty'],resolve)
const Profile = resolve => require(['pages/user/profile'],resolve)
const Address = resolve => require(['pages/user/address'],resolve)
const AddAddress = resolve => require(['pages/user/addAddress'],resolve)
const Orders = resolve => require(['pages/user/orders'],resolve)
const OrderDetail = resolve => require(['pages/user/orderDetail'],resolve)
// Vue.use(Router)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      children:[
        {
          path: '/home',
          name: 'Main',
          component: Main,
        },
        {
          path: '/pro',
          name: 'Pro',
          component: Pro,
        },
        {
          path: '/orginal',
          name: 'Orginal',
          component: Orginal,
        },
        {
          path: '/about',
          name: 'About',
          component: About,
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart,
        },
        {
          path: '/checkOut',
          name: 'CheckOut',
          component: CheckOut,
        },
        {
          path: '/goodsdetail',
          name: 'GoodsDetail',
          component: GoodsDetail,
        },
        {
          path: '/user',
          name: 'User',
          component: User,
          redirect: '/user/warranty',
          children:[
            {
              path: '/user/warranty',
              name: 'Warranty',
              component: Warranty,
            },
            {
              path: '/user/profile',
              name: 'Profile',
              component: Profile,
            },
            {
              path: '/user/address',
              name: 'Address',
              component: Address,
            },
            {
              path: '/user/addAddress',
              name: 'AddAddress',
              component: AddAddress,
            },
            {
              path: '/user/orders',
              name: 'Orders',
              component: Orders,
            },
            {
              path: '/user/orderDetail',
              name: 'OrderDetail',
              component: OrderDetail,
            },
          ]
        }
      ]
    }
  ]
})
