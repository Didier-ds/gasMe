
   <template>
       <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" />
   </template>
<script>
import Dropdown from 'primevue/dropdown';
export default {
    name: "Card",
    data() {
        return {
		selectedCity: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
		]
	}},
    components: {
        'Dropdown': Dropdown
    }
}
</script>