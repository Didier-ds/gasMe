<template>
    <div>
        <Header />
        <Map />
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import Map from '../components/Map.vue'
export default {
    name: 'Dashboard',
    components: {
        'Header' : Header,
        'Map': Map
    }
}
</script>
<style lang="scss">
    @import '../assets/styles/main.css';
    
</style>