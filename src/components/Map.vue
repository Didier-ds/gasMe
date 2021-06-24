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
     margin: 1em auto;
     height: 20em;
     border-radius: 1em;
     box-shadow: 0px 0px 4px #E5E5E5;
 }
</style>