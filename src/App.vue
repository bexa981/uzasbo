<template>
  <div class="app">
<!-- sidebar -->
 <Sidebar/>
  <!-- <Menu/> -->
    <router-view/>
  </div>
</template>

<script setup>
// import Menu from './components/Menu.vue';
 import Sidebar from './components/Sidebar.vue'
</script>
<style lang="scss">
:root{
  --main:#efeded;
  --headerText: rgb(151, 151, 151);
  --linksText:rgb(101, 99, 99);
  --exitColor:rgb(204, 26, 26);
  --sidebar-width:300px
}

*{
  font-family: 'Fira Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  display: flex;
}
 .app main{
  flex: 1 1 0;
  padding: 2rem;
  
 }
 @media (max-width:768){
  .app main{
    padding-left: 6rem;
  }
  }
</style>
