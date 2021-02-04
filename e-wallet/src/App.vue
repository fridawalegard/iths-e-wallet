<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/addcard">Add Card</router-link>
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn-remove{
  margin:10px;
  height:150px;
  border-radius: 5px;
  height:40px;
  background-color:rgb(194, 192, 192);
  
  font-size: 20px;
  letter-spacing: 2px;
}

.btn-add{
  margin:10px;
  height:150px;
  border-radius: 5px;
  height:40px;
  background-color:white;
  font-size: 20px;
  letter-spacing: 2px;
}

.card {
  display:grid;
  grid-template-rows: 40px  40px  40px  40px  40px  40px  40px  40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width:500px;
  height: 320px;
  background-color: rgb(228, 228, 228);
  border-radius: 20px;
  box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
}

.chip{
  padding:25px;
}
.vendor-img{
  grid-column:4;
  padding:30px;
  text-align: right;
}

.cardnumber{
  grid-row:4 /span 5;
  grid-column: 1 / span 4;
  text-align: left;
  margin-left:20px;
  font-size: 35px;
}

.label-cardholder{
  grid-row-start:6;
  grid-column:1 /span 2;
  text-align: left;
  margin-left:25px;
  text-transform: uppercase;
}

.input-cardholder{
  font-size: 20px;
  grid-row-start:7;
  grid-column:1 / span 2;
  text-align: left;
  margin-left:25px;
  margin-top:0px;
  text-transform: uppercase;
}

.label-year-month{
  grid-row: 6;
  grid-column:4;
  text-transform: uppercase;
  margin-right: 25px;
}

.input-year-month{
  margin-top:0px;
  grid-row: 7;
  grid-column:4;
  font-size:25px;
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
