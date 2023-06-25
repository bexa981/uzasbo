import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id:'sidebar',
  state:()=>({
    isExpanded:false,
    isOpen:false,
    showChildren:false
  }),
  actions:{
    toggleMenu(){
     this.isExpanded = !this.isExpanded
    },
    isOpenfolder(){
      this.isOpen = !this.isOpen
      this.showChildren=!this.showChildren
      }
      // this.showChildren=!this.showChildren
    }
  })
