<template>
    <div id="Avatar" label="Toggle" @click="toggle">
        <div><span class="avatar-name">Didier</span>
        <img class="avatar-img" src="/img/avatar.svg" alt="avatar"></div>
        
    </div>
    <Menu ref="menu" :style='dropdownStyle' :model="items" :popup="true"/>
</template>
<script>
import Menu from 'primevue/menu';
export default {
    name: 'Avatar',
    data() {
		return {
            dropdownStyle: {
                'font-size': '100%'
            },

			items: [
				{
					label: 'Profile',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Add A Station',
					url: 'https://vuejs.org/'
				},
				{
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    to: '/fileupload'
                }
			]
		} },
        methods: {
            toggle(event) {
                this.$refs.menu.toggle(event);
            }
        },
    components: {
        'Menu' : Menu
    }
}
</script>
<style lang="scss">
@import '../assets/styles/color';
@import '../assets/styles/font';

.avatar-name {
    color: $black;
    @include cairo;
    
}
.avatar-img {
    vertical-align: middle;
    padding: 1em;
    max-width: 70px;
    img {
        width: 100%
    }
}
</style>