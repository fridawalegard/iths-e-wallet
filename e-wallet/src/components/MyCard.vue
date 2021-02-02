<template>
  <div class="card" 
  :class="newCard.vendorName">
    <img class="chip" src="../assets/chip-light.svg">
    <section class="vendor-img">
      <img v-if="newCard.vendorName === 'ninja'" src="../assets/vendor-ninja.svg">
      <img v-else-if="newCard.vendorName === 'bitcoin'" src="../assets/vendor-bitcoin.svg">
      <img v-else-if="newCard.vendorName === 'blockchain'" src="../assets/vendor-blockchain.svg">
      <img v-else-if="newCard.vendorName === 'evil'" src="../assets/vendor-evil.svg">

    </section>
    <p class="cardnumber"> {{newCard.cardNumber}}</p>
    <p class="label-cardholder"> Cardholder Name</p>
    <p class="input-cardholder"> {{newCard.name}}</p>
    <p class="label-year-month"> YY/MM</p>
    <p class="input-year-month"> {{newCard.month}}/{{newCard.year}} <p/>
  </div>
</template>


<script>

export default {

  name: 'MyCard',
  props: ['newCard'],

    
}





</script>


<style scoped>




</style>