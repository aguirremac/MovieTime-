<template>
    
    <div class=" w-full text-#FFFFFF bg-gradient-to-br from-#000000 to-#575757 flex justify-center">
        
        <!-- blurred background poster -->
        <div class="w-full h-full absolute top-0 left-0 z-10">
            <div class="h-full bg-movie blur-150px"></div>
        </div>
        <!-- nav bar -->
        <div class="w-1440px h-screen z-30">
            <nav class="flex w-full justify-between  h-47px my-41px items-center">
                <nuxt-link to="/"><img src="@/public/arrow-back-rounded.svg" class="text-white h-34px cursor-pointer"/></nuxt-link>
                <div class="flex text-16px font-semibold gap-60px pl-50px">
                    <nuxt-link class="format tracking-widest cursor-pointer router-link-active" to="/">MOVIES</nuxt-link>
                    <nuxt-link class="format tracking-widest cursor-pointer" to="/theaters">THEATERS</nuxt-link>
                </div>
             </nav>

      <!-- main content -->
      <div class="flex gap-x-47px mt-31px">
            <!-- left side  -->
            <div class="flex flex-col justify-start">
                <img src="@/images/doctor.png" alt="poster" class="mb-18px h-398px w-268px">
                <div class="flex justify-center items-center mb-11px h-74px w-268px bg-#030303 rounded-lg">
                    <img src="@/public/imdb.png" alt="" class="h-35px w-64px pr-52px ">
                    <img src="@/public/star.png" alt="" class="h-22px pr-11px">
                    <h1 class="text-31px font-semibold">7.4</h1>
                </div>
                <div class="flex justify-center items-center h-74px w-268px bg-#030303 rounded-lg">
                    <img src="@/public/rotten.png" alt="" class="h-40px pr-64px">
                    <h1 class="text-31px font-semibold">83%</h1>
                </div>
            </div>


            <!-- right side -->
            <div class="h-full flex flex-col justify-start pt-8px">
                <!-- title -->
                <div class="">
                    <h1 class="text-32px font-medium leading-none my-0">Doctor Strange in the Multiverse of Madness</h1>
                    <h3 class="font-normal text-24px leading-none mt-4px mb-0 ">
                        <span class="pr-17px">2022</span>
                        <span class="pr-17px">PG-13</span>
                        <span class="pr-17px">2h 6m</span>
                    </h3>
                </div>
                <!-- location -->
                <div class="h-46px w-954px bg-#030303 rounded-lg flex items-center mt-18px mb-0">
                    <p class="text-start text-16px font-normal px-24px py-14px ">Turn on Location Services to find cinema theaters nearest you!</p>
                </div>
                <!-- cards -->
                <div>
                    
                </div>
            </div>
       
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

.bg-movie {
  background-image: url('./public/images/doctor.png');
  background-position: 50% 35%;
  background-size: cover;
}

</style>