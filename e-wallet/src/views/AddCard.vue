<template>
  <div>
    <TopComponent :title="'ADD A NEW CARD'" :subtitle="'ADD CARD'"/>
    <AddCardForm/>
  </div>
</template>


<script>

import AddCardForm from '@/components/AddCardForm.vue'
import TopComponent from '@/components/TopComponent.vue'
export default {

  components: {
    AddCardForm,
    TopComponent,
  },

  data: function(){
    return{
      card: {
        name: "",
        number:"",
        year:"",
        month:"",
      },

    }
  }

  
}
</script>


<style scoped>

</style>
