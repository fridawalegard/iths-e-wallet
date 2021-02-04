<template>
  <div class="cardstack">
    <div class="card" v-for="(cards, index) in cardStack" :class="cards.vendorName"
    :key="index"
     @click="changeCard"
    :id="[`${index}`]">

      <MyCard :newCard="cards"/>
    
    </div>
    
    </div>
</template>


<script>
import MyCard from '@/components/MyCard.vue'

export default {
  

  name: 'CardStack',

  data() {
    return {
      cardStack: this.$root.$data.cards,
    };
  },

    components:{
      MyCard,
    },

     methods: {
    changeCard(evt) {
      this.$emit("sendData", evt.currentTarget.id);
    },


}
}
</script>

<style scoped>


.cardstack{
  display: flex;
  width: 100%;
  justify-content: center;
  position: sticky;
  display: grid;
  grid-auto-rows: 100px;
}


</style>