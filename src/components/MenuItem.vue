<template>
    <div class="menu-item" :class="`${sidebarStore.isOpen && 'expanded'}`">
        <div
         class="label"
          @click="sidebarStore.isOpenfolder">
          <div class="left">
              <img v-if="icon" class="icons" :src="icon" alt="">
              <span>{{ label }}</span>

          </div>
          <div v-if="data" class="right">
              <span :class="`${sidebarStore.isOpen && 'expanded'}`" class="expand arrow" v-if="data"><img src="../assets/icons/arrow-down.svg" alt=""></span>

          </div>
        </div>
        <div 
        v-show="sidebarStore.showChildren" 
        class="item-container"
        ref="container"
        :style="{height:sidebarStore.containerHeight}"
        >

            <menu-item v-for="(item, index) in data" 
            :key="index" 
            :label="item.label" 
            :icon="item.icon" 
            :depth="depth + 1"
            :data="item.children" />


        </div>

    </div>
</template >

<script setup>
import { useSidebarStore } from '@/store/sidebar';
const sidebarStore = useSidebarStore()

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    depth: {
        type: Number,
        required: true
    },
    data: {
        type: Array
    }

})

</script>

<style lang="scss" scoped>
.menu-item {
    position: relative;
    widows: 100%;

    .label {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        white-space: nowrap;
        user-select: none;
        height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #6a6a6a;
        transition: all .3s ease;
        >div{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .arrow{
            width: 23px;
            &.expand{
                font-size: 16px;
                color:#cacaca;
                &.expanded{
                    transform: rotate(180deg);
                }
            }
        }
        &:hover{
            background-color: #deedff;
            cursor: pointer;
        }
        .items-container{
            widows: 100%;
            overflow: hidden;
            transition: height .3s ease;
        }
    }
}
</style>