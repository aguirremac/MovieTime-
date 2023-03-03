<template>
    
    <div class=" w-full text-#FFFFFF bg-gradient-to-br from-#000000 to-#575757 flex justify-center">
        
        <!-- blurred background poster -->
        <div  class="w-full h-full absolute top-0 left-0 z-10">
            <div :style="bgStyle" class=" bg-movie h-full w-full blur-150px"></div>
        </div>
       
        <div class="w-390px sm:w-600px md:w-670px lg:w-1200px xl:w-1440px h-screen z-30">
             <!-- nav bar -->
            <nav class="flex w-full justify-between  h-47px my-25px md:my-41px items-center">
                <nuxt-link to="/"><img src="/arrow-back-rounded.svg" class="text-white h-34px cursor-pointer"/></nuxt-link>
                <div class="hidden md:flex text-16px font-semibold gap-60px pl-50px">
                    <nuxt-link class="format tracking-widest cursor-pointer router-link-active" to="/">MOVIES</nuxt-link>
                    <nuxt-link class="format tracking-widest cursor-pointer" to="/theaters">THEATERS</nuxt-link>
                </div>
             </nav>

            <!-- main content -->
            <div  class="w-full flex-col items-center lg:flex gap-x-47px mt-31px">
                    <!-- left side  -->
                    <div class="flex flex-col justify-start">
                        <img :src="'/images/' + selectedMovie.posterLink"  alt="poster" class="mb-18px w-156px h-232px md:h-398px md:w-268px">
                        <div class="flex justify-center items-center mb-11px h-74px w-268px bg-#030303 rounded-lg">
                            <img src="/imdb.png" alt="" class="h-35px w-64px pr-52px ">
                            <img src="/star.png" alt="" class="h-22px pr-11px">
                            <h1 class="text-31px font-semibold">{{ selectedMovie.imdbRating }}</h1>
                        </div>
                        <div class="flex justify-center items-center h-74px w-268px bg-#030303 rounded-lg">
                            <img src="/rotten.png" alt="" class="h-40px pr-64px">
                            <h1 class="text-31px font-semibold">{{ selectedMovie.rTRating }}</h1>
                        </div>
                    </div>


                <!-- right side -->
                <div class="h-full flex flex-col justify-start pt-8px">
                    <!-- title -->
                    <div >
                        <h1 class="text-32px font-medium leading-none my-0">{{selectedMovie.title}}</h1>
                        <h3 class="font-normal text-24px leading-none mt-4px mb-0 ">
                            <span class="pr-17px">{{ selectedMovie.year }}</span>
                            <span class="pr-17px">{{ selectedMovie.rated }}</span>
                            <span class="pr-17px">{{ selectedMovie.runtime }}</span>
                        </h3>
                    </div>
                <!-- location -->
                <div class="h-46px w-954px bg-#030303 rounded-lg flex items-center mt-18px mb-0">
                    <p class="text-start text-16px font-normal px-24px py-14px ">Turn on Location Services to find cinema theaters nearest you!</p>
                </div>
                <!-- cards -->
                <div>
                    <p></p>
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




