<template>
    
    <div class=" w-full text-#FFFFFF bg-gradient-to-br from-#000000 to-#575757 flex justify-center">
        
        <!-- blurred background poster -->
        <div  class="w-full h-full absolute top-0 left-0 z-10">
            <div :style="bgStyle" class=" bg-movie h-full w-full blur-150px"></div>
        </div>
       
        <!-- main container -->
        <div class="w-390px sm:w-600px md:w-670px lg:w-1200px xl:w-1440px h-full flex-col  lg:flex z-30 ">
             <!-- nav bar -->
            <nav class="flex  justify-between  h-47px my-25px md:my-41px items-center px-36px lg:px-30px xl:px-60px 2xl:px-82px">
                <nuxt-link to="/"><img src="/arrow-back-rounded.svg" class="text-white h-34px cursor-pointer"/></nuxt-link>
                <div class="hidden md:flex text-16px font-semibold gap-60px pl-50px">
                    <nuxt-link class="format tracking-widest cursor-pointer router-link-active" to="/">MOVIES</nuxt-link>
                    <nuxt-link class="format tracking-widest cursor-pointer" to="/theaters">THEATERS</nuxt-link>
                </div>
             </nav>

            <!-- center content -->
            <div  class=" md:flex justify-between  gap-x-20px xl:gap-x-47px mt-31px px-36px lg:px-30px xl:px-60px 2xl:px-82px">
                    <!-- left side  -->
                    <div class="flex-col lg:flex  lg:justify-start">
                        <div class="flex justify-center">
                            <img :src="'/images/' + selectedMovie.posterLink"  alt="poster" class="mb-18px w-156px h-232px md:h-320px md:w-230px   xl:h-398px xl:w-268px">
                         </div>
                        <div class="flex justify-center gap-x-13px md:flex-col">
                            <div class="flex justify-center items-center mb-11px w-123px h-41px md:w-230px md:h-50px xl:h-74px xl:w-268px bg-#030303 rounded-lg">
                            <img src="/imdb.png" alt="" class="h-19px md:h-25px xl:h-35px  pr-2 lg:pr-52px ">
                            <img src="/star.png" alt="" class="h-12px md:h-16px xl:h-22px pr-2 lg:pr-11px">
                            <h1 class="text-17px md:text-25px xl:text-31px font-semibold">{{ selectedMovie.imdbRating }}</h1>
                        </div>
                        <div class="flex justify-center items-center  w-123px h-41px md:w-230px md:h-50px xl:h-74px xl:w-268px bg-#030303 rounded-lg">
                            <img src="/rotten.png" alt="" class="h-20px md:h-30px xl:h-40px pr-8 lg:pr-64px">
                            <h1 class="text-17px md:text-25px xl:text-31px font-semibold">{{ selectedMovie.rTRating }}</h1>
                        </div>
                        </div>
                    </div>


                <!-- right side -->
                <div class=" h-full flex-col justify-start pt-8px">
                    <!-- title -->
                    <div >
                        <h1 class="text-24px xl:text-32px text-center md:text-start  font-medium leading-none my-0">{{selectedMovie.title}}</h1>
                        <h3 class="font-normal text-16px md:text-20px xl:text-24px text-center md:text-start leading-none mt-4px mb-0 ">
                            <span class="pr-17px">{{ selectedMovie.year }}</span>
                            <span class="pr-17px">{{ selectedMovie.rated }}</span>
                            <span class="pr-17px">{{ selectedMovie.runtime }}</span>
                        </h3>
                    </div>
                <!-- location -->
                <div class="hidden md:flex items-center h-46px lg:w-700px xl:w-850px 2xl:w-954px bg-#030303 rounded-lg  mt-18px mb-0">
                    <p class="text-start md:text-12px lg:text-16px font-normal px-24px py-14px ">Turn on <span class="font-bold">Location Services</span> to find cinema theaters nearest you!</p>
                </div>
                <!-- cards -->
                <div class="flex gap-x-10px gap-y-14px flex-wrap h-full mt-14px">
                    <MovieSchedule />
                </div>
            </div>
       
      </div>


        </div>
    </div>

</template>


<script setup>
const {movies} = useMovieData();
const { id }= useRoute().params

const selectedMovie = movies.find( movie => movie.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === id);

const bgStyle = {
  'background-image': `url('/images/${selectedMovie.posterLink}')`,
  'background-position': '50% 35%',
  'background-size': 'cover'
}

definePageMeta({
    layout: 'movie'
})

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




