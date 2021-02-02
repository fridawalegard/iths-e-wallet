import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({  

  router,

  data: function() {
    return {
      activeCardIndex:[0],
      cards:[
        {
          id:"123",
          name:"frida",
          cardNumber:"123456789",
          month:"03",
          year:"92",
          vendorName:"bitcoin"
        },
        {
          id:"456",
          name:"vira",
          cardNumber:"123456789",
          month:"03",
          year:"92",
          vendorName:"ninja"
        },
        {
          id:"789",
          name:"colin",
          cardNumber:"123456789",
          month:"03",
          year:"92",
          vendorName:"evil"
        },
        
      ]
    }
  },

  render: h => h(App)
}).$mount('#app')

