<template>
    <div id='header'>
        <div id="logo-container">
            <img src="/img/logo.svg" alt="logo">
        </div>
        <Avatar />
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue';

export default {
    name: 'Header',
    components: {
        'Avatar' : Avatar
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/color';
@import '../assets/styles/DRY';
#header {
    @include display(flex, space-between);
    align-items: center;
    margin: 1em 0;
    }
span {
    color: $green
}
#logo-container {
    max-width: 80px;
    img {
        width: 100%
    }
}
.avatar-img {
    
}
</style>