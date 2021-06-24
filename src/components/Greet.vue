<template>
    <div>
        <h3 id="Greeting">{{ greet }}</h3>
       
    </div>
</template>
<script>
export default {
    name: 'Greet',
    data(){
        return {
             isGreet: 'Good Day',
        isDate: new Date().getHours(),
        isUser : 'Didier'
        }
       
    },
    computed: {
        greet(){
            
            if (this.isDate >= 18){
                return `Good Evening ${this.isUser}`;
            }
            else if(this.isDate >= 12){
                return `Good Afternoon ${this.isUser}`;
            }
            else if(this.isDate >= 0){
                return `Good Morning ${this.isUser}`;
            }
            else {
                return this.isGreet
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    @import '../assets/styles/font';
    @import '../assets/styles/color';
#Greeting {
    color: $black;
    @include work-sans;
    font-size: 1.8em
    }

</style>