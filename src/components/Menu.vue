<template>
    
    <div class="menu">
        <MenuItem 
        v-for="(item,index) in menuTree"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        :depth="0"
        :data="item.children"
        />
        
    </div>
    
</template>
<script setup>
import MenuItem from './MenuItem.vue';

const menuTree=[
    {
        label:"Home",
        icon:require("../assets/sidebarlinks/home-2.svg"),
        children:[
            {
        label:"level 1.1"
            }
        ]
    },
    {
        label:"Settings",
        icon:require("../assets/sidebarlinks/setting.svg"),
     
    },

]
</script>

<style lang="scss" scoped>
.menu{
    position: fixed;
    height: 100vh;
    width:240px;
    left: 0;
    top: 0;
    border-right: 1px solid #cac6c6;
    transition: all .3s ease;
    overflow: auto;
}
</style>