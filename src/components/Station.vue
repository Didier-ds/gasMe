<template >
    <div id="Station-Container">
          
        <div v-if="searchedStation == null" class="station bg-white rounded-lg shadow-lg border" >
                    <div class="station-img">
                        <img src="/img/station.svg" alt=""/>
                    </div>
                        <div class="station-details">
                            <div class="firstLine">
                                <h3 class="head-text">Oando</h3>
                                <p class="span-orange">Pickup</p>
                            </div>
                            <p class="address">Isheri-Oshun Road, Ijegun, LG</p>
                            <div class="price">
                                <span class="price-text">N700</span>
                                <span class="kilogram-text">per Kilogram</span>
                            </div>
                        </div>
                </div>
        
        <div v-else class="station bg-white rounded-lg shadow-lg border" v-for="station in searchedStation" :key="station.imdbID">
                    <div class="station-img">
                        <img src="/img/station.svg" alt=""/>
                    </div>
                        <div class="station-details">
                            <div class="firstLine">
                                <h3 class="head-text">nigga</h3>
                                <p class="span-orange">Pickup</p>
                            </div>
                            <p class="address">Isheri-Oshun Road, Ijegun, LG</p>
                            <div class="price">
                                <span class="price-text">N700</span>
                                <span class="kilogram-text">per Kilogram</span>
                            </div>
                        </div>
                </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Station',
        props: ['searchedStation']
    }
</script>
<style lang="scss">
    @import '../assets/styles/DRY';
    @import '../assets/styles/font';
    @import '../assets/styles/color';
    * {
        box-sizing: border-box;
        margin: 0;
    }
    .station {
        @include display(flex, center);
        align-items: flex-start;
        flex-direction: column;
        max-width: 18em;
        box-shadow: 0px 0px 4px #E5E5E5;
        margin: 1em ;
        padding: 1em ;
        background-color: white;
        border-radius: .6em;
    }
    .firstLine {
        @include display(flex, space-between);
        align-items: center;
        
        .head-text {
            @include cairo;
            margin: 0 ;

        }
    }
    .station-details {
        width: 100%;
    }
    .span-orange {
        @include highlight-text($lightOrange, $darkOrange);
        @include work-sans;
        margin: 0;
    }
    .price-text {
         @include highlight-text($spanGreen, $green);
        @include work-sans;
        
        font-weight: 500;
        font-size: 1em;
    }
    .address {
        @include titillium;
        margin: .2em 0;

    }
    .kilogram-text {
        @include titillium;
        font-weight: 500;
        color: $darkGrey;
        font-size: 1em;
        margin: .3em .5em;
    }
    .price {float: right;
    margin: .4em 0}
    .station-img {margin: 10px;
        img {
            width: 100%;
            border-radius: 10px;
            
            box-shadow: 0px 5px 30px rgba(196, 196, 196, 0.85);
        }
    }
    #Station-Container {
        @include display(flex, space-between);
        
        flex-wrap: wrap;
    }

    @media (max-width: 768px ){
        #Station-Container {
           @include display(flex, center);
           
           .station {
               max-width: 24em;
               width: 100%;
               align-items: center;
           }
        }
    }
</style>