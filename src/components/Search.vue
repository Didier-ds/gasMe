<template>
    <div id="search">

        <div class="search p-input-filled">
            
           <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <InputText type="text" v-model="searchText" @keyup.enter.prevent = 'Search'/>
        </span>
        </div>
        <div class="city-search">
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
        </div>
        <div class="filter">
            <MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />
        </div>
    </div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

import MultiSelect from 'primevue/multiselect';
export default {
    name: 'Input-box',
    
    data() {
        return {
            stations: [],
            searchText: '',
            selectedGroupedCities: null,
            selectedCity: null,
            selectedCars: null,
            value3: 'eat',
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		],
        cars: [
			{brand: 'Audi', value: 'Audi'},
			{brand: 'BMW', value: 'BMW'},
			{brand: 'Fiat', value: 'Fiat'},
			{brand: 'Honda', value: 'Honda'},
			{brand: 'Jaguar', value: 'Jaguar'},
			{brand: 'Mercedes', value: 'Mercedes'},
			{brand: 'Renault', value: 'Renault'},
			{brand: 'Volkswagen', value: 'Volkswagen'},
			{brand: 'Volvo', value: 'Volvo'}
		]
        }
    } ,
    methods: {
        Search(){
            this.$emit('newSearchedValue', this.searchText)
        }
    },
    
    components: {
        'InputText': InputText,
        'Dropdown': Dropdown,
        'MultiSelect': MultiSelect
    }
}
</script>
<style lang="scss">
 @import '../assets/styles/DRY';
    #search {
        @include display(flex, space-between);
        margin: 2em 0 1em 0;
        flex-wrap: wrap;
    }
    .p-multiselect {
        font-size: 100%;
    }
</style>