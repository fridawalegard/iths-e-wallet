<template>
    <div>
        <h1>{{title}}</h1>
        <h3>{{subtitle}}</h3>
    </div>
</template>


<script>
export default {

    props: {
        title:{
            type: String
        },
        subtitle:{
            type: String
        },
    }
    
}
</script>


<style scoped>

div{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>