<template>
    <div id="loader">
        <img src="/img/loader.svg" />
    </div>
</template>
<script>
export default {
    name: 'Loader',
    
}
</script>
<style lang="scss">
    #loader {
        position: fixed;
        top: 0;
        background-color: rgba(255, 255, 255, 0.707); 
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>