<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addcard">ADD CARD</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">

 * {box-sizing: border-box; }

#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card {
  display:grid;
  grid-template-rows: 40px  40px  40px  40px  40px  40px  40px  40px;
  grid-template-columns: 250px 250px;
  width:500px;
  height: 320px;
  background-color: rgb(228, 228, 228);
  border-radius: 20px;
}

.chip{
  padding:25px;
}
.vendor-img{
  grid-column:2;
  padding:30px;
  text-align: right;
}

.cardnumber{
  grid-row:4 /span 5;
  grid-column: 1 / span 2;
  text-align: left;
  margin-left:20px;
  font-size: 30px;
}

.label-cardholder{
  grid-row-start:6;
  grid-column:1;
  text-align: left;
  margin-left:20px;
  text-transform: uppercase;
}

.input-cardholder{
  grid-row-start:7;
  grid-column:1;
  text-align: left;
  margin-left:20px;
  text-transform: uppercase;
}

.label-year-month{
  grid-row: 6;
  grid-column:2;
  text-align: right;
  width:15px;
}

.input-year-month{
  grid-row: 7;
  grid-column:2;
  text-align: right;
  width:15px;
}

.ninja{
  background-color:rgb(39, 33, 33);
  color: white;
}
.bitcoin{
  background-color:rgb(241, 177, 58);
}
.evil {
  background-color:rgb(221, 55, 55);
  color: white;
}

.blockchain{
  background-color:rgb(132, 38, 247);
color: white;
}
</style>
