<template>
<div>
    <Loader />
    <div id="body">
        
        <Header />
        <div id="router">
        <!-- <router-view /> -->
        <Main />
        </div>
        
    </div>
</div>
    
</template>
<script>
import Header from '../components/Header.vue';
import Main from './Main.vue'
import Loader from '../components/Loader.vue'
export default {
    name: 'Dashboard',
    data(){},
    components: {
        'Header' : Header,
        'Main': Main,
        Loader
    }
}
</script>
<style lang="scss">
    @import '../assets/styles/main.css';
    #router {
        @media (min-width:1024px){
            max-width: 85%;
            margin: 0 auto;
        }
        
    }
</style>