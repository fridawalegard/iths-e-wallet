import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

new Vue({  

  router,

  data: function() {
    return {
      activeCard:-1,
      cards:[
        {
          id:"123",
          name:"frida",
          cardNumber:"1234 5678 9123 4567",
          month:"03",
          year:"92",
          vendorName:"bitcoin"
        },
        {
          id:"456",
          name:"vira",
          cardNumber:"1234 5678 9012 3456",
          month:"03",
          year:"92",
          vendorName:"ninja"
        },
        {
          id:"789",
          name:"colin",
          cardNumber:"1234 5678 9987 6543",
          month:"03",
          year:"92",
          vendorName:"evil"
        },
        
      ]
    }
  },

  render: h => h(App)
}).$mount('#app')

