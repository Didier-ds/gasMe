<template>
<div>
  <div id="form-container">
            <div id="logo">
                <img src="assets/images/logo.svg" alt="logo" />
            </div>
            <h2 class="head-text">Welcome back.</h2>
            <div class="form-content">
                <form action="/action_page.php">
                    <div class="input-container">
                        <label for="email">Email Address</label>
                        <input type="text" id="email" name="email" placeholder="hello@gmail.com" />
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="12345678*&_$" />
                    </div>


                    <button>Sign in</button>
                </form>
                <p class="text-green">forgot password?</p>
                <p class="noAccount">Don't have an account? <a href="signup.html" class="text-green">Sign up</a></p>
            </div>
        </div>
        <div id="advert-container">

            <div class="advert-map">
                <img src="assets/images/map.svg " alt="location " />
            </div>

            <p class="advert-map-caption">Get connected to the <span class="text-green">best</span> and<br> closest <span class="text-green">Gas</span> stations</p>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  
};
</script>
<style lang="scss">
    
</style>