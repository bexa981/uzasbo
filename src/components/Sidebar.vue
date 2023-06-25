<template>
    <aside :class="`${sidebarStore.isExpanded && 'isExpanded'}`">
        <!-- logo -->
        <div class="logo">
            <h2>UzASBO</h2>
            <span>
                <img src="../assets/logo.png" alt="">
            </span>
        </div>
        <!-- menu toggle -->
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="sidebarStore.toggleMenu">
                <span class="material-icons">
                    <img src="../assets/icons/arrow-right.png" alt="">
                </span>

            </button>
        </div>
        <!-- <a class="dashboard" href=""><img src="../assets/sidebarlinks/home-2.svg" alt=""></a> -->

        <h3 style="margin-left: 7px;" class="mainfunc">Asosiy funksiyalar</h3>
        <div  class="border border1"></div>
        <div class="menu">
            <a href="#" class="links" v-for="item in links" :key="item.id">
                <span class="linksicon"><img :src="item.linkLogo" alt=""></span>
                <span class="text">{{ item.linkName }}</span>
               <img class="menuArrow" src="../assets/icons/arrow-down.svg" alt="">
            </a>
            
            <h3 style="margin: 18px 0px 34px 20px;" class="mainfunc">Qo'shimcha</h3>
            <div class="border border2"></div>
            <a href="" class="links">
                <span  class="linksicon" style="margin-right: 16px;"><img src="../assets/sidebarlinks/setting.svg" alt=""></span>
                <span class="text">Sozlamalar</span>
            </a>
            <a href="" class="links">
                <span  class="linksicon" style="margin-right: 16px;"><img src="../assets/sidebarlinks/info-circle.svg" alt=""></span>
                <span class="text">Yordam</span>
            </a>
            <a href="" class="links">
                <span style="margin-right: 16px;"><img src="../assets/sidebarlinks/logout.svg" alt=""></span>
                <span class="text">Chiqish</span>
            </a>

        </div>
    </aside>
</template>

<script setup>
import { useSidebarStore } from '@/store/sidebar'
const sidebarStore = useSidebarStore()


// import { ref } from 'vue';
// const isExpanded = ref(false)
// const ToggleMenu = () => {
//     isExpanded.value = !isExpanded.value
// }

const links = [
    {
        id: 1,
        linkName: "Tashkilot ma'lumotlari",
        linkLogo: require('../assets/sidebarlinks/buildings-2.svg'),
       
    },
    {
        id: 2,
        linkName: "Xodimlar va ish haqi",
        linkLogo: require('../assets/sidebarlinks/briefcase.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 3,
        linkName: "Asosiy vositalar va TMB",
        linkLogo: require('../assets/sidebarlinks/money-tick.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 4,
        linkName: "Xarajat smetalari",
        linkLogo: require('../assets/sidebarlinks/computing.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 5,
        linkName: "To'lov topshiriqnomalari",
        linkLogo: require('../assets/sidebarlinks/receipt-2.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 6,
        linkName: "Hisobotlar",
        linkLogo: require('../assets/sidebarlinks/folder-2.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 7,
        linkName: "G'azna klient",
        linkLogo: require('../assets/sidebarlinks/bank.svg'),
        itemChild:[{childName:'test1'}]
    },
    {
        id: 8,
        linkName: "Bug'galteriya hisobi",
        linkLogo: require('../assets/sidebarlinks/calculator.svg'),
        itemChild:[{childName:'test1'}]
    },


]



</script>

<style lang="scss" scoped>
aside {
    display: flex;
    box-shadow: 1px 1px 5px rgb(191, 189, 189);
    flex-direction: column;
    background-color: white;
    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;


 
    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: -35px;
        left: 28px;
        z-index: 100;
        transition: .2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            border-radius: 50%;
            padding: 2px;
            cursor: pointer;
            border: none;
            background-color: white;
            box-shadow: 1px 1px 5px rgb(199, 197, 197);
        }

        .material-icons img {
            width: 1.1rem;
            padding-top: 2.5px;
            padding-left: 3px;
            padding-right: 2px;
        }

    }
 .border{
    width: 40px;
    border: 1px solid gray;
    opacity: 1;
 }
 .border1{
    margin-left: -3px;
    margin-top: -40px;
 }
 .border2{
    margin-left: 13px;
    margin-top: -20px;
 }
    .mainfunc,
    .links .text {
        opacity: 0;
        transition: 0.3s ease-out;

    }

    .mainfunc {
        margin-bottom: 20px;
        font-weight: 300;
        font-size: 13px;
        color: var(--headerText);
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .links {
            display: flex;
            align-items: center;
            padding: 0.5rem 1.3rem;
            transition: 0.2s ease-in-out;
            text-decoration: none;
            color: rgb(101, 99, 99);
            height: 50px;

            .linksicon {

                margin-right: 1rem;


            }

            .text {
                transition: .2s ease-out;
                color: rgb(101, 99, 99);
                font-size: 13px;

            }

        }

        .links:hover .linksicon {
            filter: invert(19%) sepia(75%) saturate(5714%) hue-rotate(242deg) brightness(106%) contrast(92%);
        }

        .links:hover .text {
            color: #674ef2;
        }
    }
    .menuArrow{
            display: none;
        }
    &.isExpanded {

        width: var(--sidebar-width);

        // .menu-toggle-wrap{
        //     top: -1rem;
        // }
        .menu-toggle {
            transform: rotate(-180deg);
            border: 2px solid #3B81F4;
        }
        .border{
   
    opacity: 0;
 }
 .border1{
    
    margin-top: 5px;
 }
        .mainfunc,
        .links,
        .text {
            opacity: 1;
        }
       
        .text {
            opacity: 1;
            margin-left: 10px;
            margin-bottom: 2px;
            font-size: 1rem;

        }

        .links {
            .linksicon {
                margin-right: 1rem;
            }
        }
        .menuArrow{
            display: block;
        }

        .logo h2 {
            display: block;

        }

        .dashboard {
            display: none;


        }

        .logo img {
            position: relative;
            right: 60px;
        }

    }

    .logo h2 {
        display: none;
    }

    @media (max-width:768px) {

        position: fixed;
        z-index: 99;

    }
    .dashboard{
        margin-left: 5px;
        margin-bottom: -30px;
    }

    .dashboard img {
        width: 22px;
    }

    .dashboard:hover {
        filter: invert(19%) sepia(75%) saturate(5714%) hue-rotate(242deg) brightness(106%) contrast(92%);
    }

}

.links img {
    width: 22px;
}

.logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.logo h2 {
    font-size: 30px;
}</style>