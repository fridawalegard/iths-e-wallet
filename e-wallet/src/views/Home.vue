<template>
  <div class="home">
    <TopComponent :title="'E-WALLET'" :subtitle="'ACTIVE CARD'"/>
     <MyCard :newCard="card"
     :class="card.vendor"/>
    
    <p>cardstack</p>
    <CardStack  @sendData="getData"/>
    


  </div>
</template>

<script>
// @ is an alias to /src
import CardStack from '@/components/CardStack.vue'
import TopComponent from '@/components/TopComponent.vue'
import MyCard from '@/components/MyCard.vue'



export default {

 data() {
    return {
      card: this.$root.$data.cards[0],
    };
  },

  name: 'Home',
  components: {
    CardStack,
    TopComponent,
    MyCard,
  },

    created: function(){
    console.log(this.$root.$data.cards[0])
    },


methods:{
    getData(data) {
      const oldActive = this.card;
      const newActive = this.$root.$data.cards[data];
      this.$root.$data.cards.splice(data, 1);
      this.$root.$data.cards.push(oldActive);
      this.card = newActive;
}
}
}


</script>
