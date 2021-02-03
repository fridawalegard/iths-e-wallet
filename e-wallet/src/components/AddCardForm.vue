<template>
    <div>
      <MyCard :newCard="newCard"/>
    <div class="form-wrapper">
    <form 
    class ="add-card-form" 
    @submit.prevent="saveCard">

    <label for="name">Name </label>
    <input class="name" 
    type="text" 
    placeholder="Name"
    v-model="newCard.name">
    
    <label for="number">Card Number</label>
    <input 
    class="number" 
    type="text" 
    v-mask="'#### #### #### ####'"
    placeholder="XXXX XXXX XXXX XXXX"
    maxlength="16"
    v-model="newCard.cardNumber"> 

    <label for="month">Month</label>
    <select class="month" 
    name="monthNumber" 
    v-model="newCard.month">
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    </select> 

      <label class="label-year" for="year">Year</label>
      <select 
      class="year" 
      name="yearNumber" 
      v-model="newCard.year">
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
    </select> 

    <label for="vendor">Vendor</label>
      <select 
      class="vendor" 
      name="vendorName" 
      v-model="newCard.vendorName">
      <option value="ninja">Ninja</option>
      <option value="evil">Evil</option>
      <option value="bitcoin">Bitcoin</option>
      <option value="blockchain">Blockchain</option>
      </select> 
      <input type="submit" value="ADD CARD" class="save-card">
    
    </form>
    </div>
  </div>
</template>

<script>

import MyCard from '@/components/MyCard.vue'

export default {

    created: function(){
    console.log(this.$root.$data.cards)
    },

  
    components: {
      MyCard,
      
    },

    data() { return {
      newCard: {
      id:"",
      name:"",
      cardNumber:"",
      month:"",
      year:"",
      vendorName:"",
    }
    }
    
  },


  methods: {

      saveCard: function() {
      this.newCard.id = Date.now().toString()
      this.$root.$data.cards.push(this.newCard);
      this.$router.push("/");
      },

    
   }
  }

</script>

<style scoped>

 .form-wrapper{
  display:flex;
  justify-content: center;
}

.add-card-form{
  margin-top:20px;
  width:500px;
  display:grid;
  grid-template-rows: 20px 50px 20px 50px 20px 50px 20px 50px 50px;
  grid-gap:10px;
  background-color: lightgrey;
  padding:25px;
  border-radius: 10px;

}


label{
  display:block;
  text-align: left;
  grid-column:1;
}

.label-year{
  grid-row:5;
  grid-column:2;
}

.name {
  grid-row:2;
  grid-column:1 /span 2;
}
.number{
  grid-row:4;
  grid-column:1 /span 2;
}

.month{
  grid-row:6;
  grid-column-start:1 /span 2;
  
}

.year{
  grid-row:6;
  grid-column-start:2;
 
}

.vendor{
  grid-row:8;
  grid-column:1 /span 2;
}


.chip-dark{
  padding:10px;
  grid-row:2;
}



.save-card{
  grid-row:9;
  grid-column:1 /span 2;
  margin:5px;
  border-radius: 5px;
  height:50px;
  background-color: black;
  color: white;
}

</style>
