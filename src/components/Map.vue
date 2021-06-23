<template>
    <div ref="map" id="map">

    </div>
</template>
<script>

export default {
    name: 'Map',
    data() {
        return {
            map: null
        }
    },
    methods: {
         initMap() {
       this.map = new window.google.maps.Map(this.$refs["map"], {
     center: { lat: -34.397, lng: 150.644 },
     zoom: 8,
   });
}
    },
    mounted() {
        this.initMap()
    }
}
</script>
<style lang="scss">
 #map {
     width: 100%;
     margin: 0 auto;
     height: 15em;
     border-radius: 1em;
     filter:drop-shadow(0px 5px 30px rgba(196, 196, 196, 0.85));
 }
</style>