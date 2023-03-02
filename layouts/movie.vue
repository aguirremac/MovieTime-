<template>
    <div class="w-full text-#FFFFFF bg-gradient-to-br from-#000000 to-#575757 flex justify-center">

        <!-- nav bar -->
        <div class="w-1440px">
            <nav class="flex w-full justify-end pl-50.5px h-47px my-41px items-center">
                <div class="flex text-16px font-semibold gap-60px">
                <nuxt-link class="format tracking-widest cursor-pointer router-link-active" to="/">MOVIES</nuxt-link>
                <nuxt-link class="format tracking-widest cursor-pointer" to="/theaters">THEATERS</nuxt-link>
                </div>
      </nav>

      <!-- main content -->
      <div>
        <p></p>
        <slot />
      </div>


        </div>
    </div>
</template>


<script setup>


</script>

<style>
.format {
    text-decoration: none;
    color: white;
}

.router-link-active {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    
}
</style>