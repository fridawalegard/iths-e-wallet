<template>
    <div class="cardstack">
    <div 
    class="card" 
    :class="cards.vendorName"
    v-for="(cards, index) in cardStack"
    :key="index"
     @click="changeCard"
    :id="[`${index}`]"> 
    <img class="chip" src="../assets/chip-light.svg">
    <section  class="vendor-img">
      <img v-if="cards.vendorName === 'ninja'" src="../assets/vendor-ninja.svg">
      <img v-else-if="cards.vendorName === 'bitcoin'" src="../assets/vendor-bitcoin.svg">
      <img v-else-if="cards.vendorName === 'blockchain'" src="../assets/vendor-blockchain.svg">
      <img v-else-if="cards.vendorName === 'evil'" src="../assets/vendor-evil.svg">
    </section>

    <p class="cardnumber"> {{cards.cardNumber}}</p>
    <p class="label-cardholder"> Cardholder Name</p>
    <p class="input-cardholder"> {{cards.name}}</p>
    <p class="label-year-month"> Valid Thru</p>
    <p class="input-year-month"> {{cards.month}}/{{cards.year}} <p/>
    

    
    </div>

    <button class='add-new' v-on:click="$router.push('/addcard')"> ADD A NEW CARD </button>
    </div>
</template>


<script>

export default {
    

    name: 'CardStack',

  data() {
    return {
      cardStack: this.$root.$data.cards,
    };
  },

    components:{
        
    
      
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

.add-new{

  
    margin-top:250px;
    height:150px;
    border-radius: 5px;
    height:50px;
    background-color: white;
    font-size: 20px;
    letter-spacing: 2px;
 
}

</style>