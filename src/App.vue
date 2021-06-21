<template>
  
    <router-view />
  
  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;700&display=swap');
* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    overflow: hidden;
}
#body {
    width: 90%;
    margin: 0 auto;
    font-size: 80%;
}
body {
    width: 90%;
    margin: 0 auto;
    font-size: 80%;
}

#logo {
    margin: 1.8em 0;
}

main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.head-text {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin: .7em .5em 0 0;
    font-size: 2.5em;
}

.form-group {
    display: flex;
    margin: 1em 0 0 0;
    .input-container {
        max-width: 18em;
        margin: 0;
    }
    .input-container:last-of-type {
        margin: 0 0 0 .5em;
    }
}

.input-container {
    display: flex;
    flex-direction: column;
    margin: 1.5em 0;
    label {
        margin: .8em .5em;
        font-weight: 500;
    }
}

img {}

input {
    max-width: 28em;
    padding: .2em 1em;
    height: 3.5em;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.842);
    border-radius: 1em;
    font-size: 1.3em;
    box-sizing: border-box;
    background-color: #aeacac31;
}

input:active,
input:hover,
input:focus {
    color: green;
    outline: none;
}

button {
    border-radius: 8px;
    max-width: 35em;
    color: white;
    border: none;
    height: 3.5em;
    padding: 1em .5em;
    width: 100%;
    margin: 1em 0;
    background-color: #39B54A;
}

.text-green {
    color: green;
}

.terms {
    input {
        height: auto;
        width: auto;
    }
    label {
        display: inline-block;
        vertical-align: sub;
    }
}

.noAccount {
    text-align: center;
    margin: 1em 0.5em;
}

#form-container p {
    font-weight: 600;
}

#advert-container {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.advert-map-caption {
    font-size: 1.5em;
    font-weight: 600;
}

.advert-map,
.map-mockup {
    img {
        max-width: 400px;
        width: 100%;
        margin: .5em;
    }
}

@media only screen and (max-width: 768px) {
    main {
        display: block;
        justify-content: center;
        #advert-container {
            display: none;
        }
    }
    input {
        width: 100%;
    }
    button {
        width: 100%;
        padding: 5px 9px;
    }
}


</style>
