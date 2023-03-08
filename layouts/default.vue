<template>
  <div
    class=" min-h-screen flex justify-center mx-0 text-#FFFFFF bg-gradient-to-br from-#000000 via-#000000 via-opacity-70 to-#575757"
  >
    
    <div class="w-390px sm:w-600px md:w-670px lg:w-900px 2xl:w-1440px  ">
      <!-- nav bar -->
      <nav class="flex w-full justify-center h-47px my-21px md:my-41px items-center my-10.5px ">
        <div class="flex text-16px font-semibold gap-40px my-0">
          <nuxt-link
            class="format tracking-widest cursor-pointer"
            to="/"
            >MOVIES</nuxt-link
          >
          <nuxt-link
            class="format tracking-widest cursor-pointer"
            to="/theaters"
            >THEATERS</nuxt-link
          >
        </div>
      </nav>

      <!-- main content -->
      <div class="flex justify-center min-w-full mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

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
