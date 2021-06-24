<template>
    <div id='main'>
        <Greet />
        <Map /> 
       
         <Search @newSearchedValue = "get"/>
        <Station  :searchedStation = 'searchedStation'/>
    </div>
</template>
<script>
import Map from '../components/Map.vue';

import Search from '../components/Search.vue';
import {store} from '../store.js'
import Station from '../components/Station.vue';
import Greet from '../components/Greet.vue'
export default {
    name: 'Main',
    data (){
        return {
            searchValue: 'gate',
            searchInput: null,
            searchedStation: null,
            newList: null,
            isStationName: 'Oando Filling Station'
        }
    },
    methods: {
        Search(e) {
            this.searchedStation = []
            fetch(`http://www.omdbapi.com/?apikey=${store.apiKey}&s=${e}`)
            .then(response => response.json())
            .then(data =>this.searchedStation = (data.Search) );
            
           
        },
        get(e){
            
            this.Search(e)
        }
        
    },
     computed: {
      
         Station(){
              return this.searchedStation;
           
         }
     },
    components: {
        'Map': Map,
        'Search': Search,
        Station,
        Greet,
      
    }
}
</script>
