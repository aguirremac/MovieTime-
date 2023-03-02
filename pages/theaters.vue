<template>
 <div class="w-full text-#FFFFFF bg-gradient-to-br from-#000000 to-#575757 flex justify-center">
    
    <div class="w-1440px">
      <nav class="flex w-full justify-center h-110px items-center my-10.5px">
        <div class="flex text-16px gap-60px">
          <a><nuxt-link class="tracking-widest cursor-pointer" to="/">MOVIES</nuxt-link></a>
          <a><nuxt-link class="tracking-widest cursor-pointer" to="/theaters">THEATERS</nuxt-link></a>
        </div>
      </nav>

      <!-- main content -->
      <div class="w-full text-start text-20px font-400 px-80px mb-55">

        <p>NOW SHOWING</p>


        </div>


    </div>
  </div>




</template>


<style scoped>

a {
    text-decoration: none;
    color: white;
}

.router-link-active {
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    
}

</style>
