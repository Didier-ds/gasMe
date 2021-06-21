<template>
  <main>
        <div id="form-container">
            <div id="logo">
                <img src="/img/logo.svg" alt="logo" />
            </div>
            <h2 class="head-text">Create an account.</h2>
            <div class="form-content">
                <form action="/action_page.php">
                    <div class="form-group">
                        <div class="input-container">
                            <label for="firstname">firstName</label>
                            <input type="text" id="firstname" name="firstnsme" placeholder="john" />
                        </div>
                        <div class="input-container">
                            <label for="firstname">LastName</label>
                            <input type="text" id="firstname" name="firstname" placeholder="doe" />
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="email">Email Address</label>
                        <input type="text" id="email" name="email" placeholder="hello@gmail.com" />
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="12345678*&_$" />
                    </div>


                    <button>Sign Up</button>
                </form>
                <p class="text-green terms"><input type="checkbox" name="terms" id="terms" /> <label for="terms">I accept the <span class="text-green">Terms & Conditions</span></label></p>
                <p class="noAccount">Have an account? <a href="signin.html" class="text-green">Sign in</a></p>
            </div>
        </div>
        <div id="advert-container">

            <div class="map-mockup">
                <img src="/img/map-phone.png " alt="location " />
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: "Signup"
}
</script>