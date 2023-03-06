<template>
    <div    v-for="(cinema, index) in cinemaDetails" 
            :key="index"
            class="bg-#262626 rounded-xl drop-shadow-xl w-472px h-278px">
        <!-- cinema icon + name -->
        <div class="flex gap-14px w-full pt-23px pl-26px">
            <img :src="'/cinemas/' + cinema.cinemaPosterURL" 
                 :alt="cinema.location" 
                 class="rounded-full h-53px"
                    
                    >
            <div>
                <h2 class="font-normal text-24px m-0">{{ cinema.location }}</h2>
                <h3 class="font-thin text-20px m-0">Cinema {{ cinema.cinemaNum }}</h3>
            </div>
        </div>

        <!-- title: "Doctor Strange in the Multiverse of Madness",
        movieId : "movie1",
        location: "SM North Edsa",
        cinemaPosterURL: 'smcinema.png',
        cinemaNum: [1, 2, 3, 4],
        timeSlot: ["09:00", "11:00", "13:00", "15:00"], -->

        <!-- time slots -->
        <div class="pl-100px pr-37px flex flex-wrap gap-x-38px mt-15px" >
            <h2 v-for="(time , timeIndex) in cinema.timeSlot"
                :key="timeIndex"
                class="m-0 font-light text-30px"
                >{{ time }}</h2>
            
        </div>

        <button class="bg-#32A544 text-white text-20px font-semibold w-445px h-51px rounded-xl border-none mx-14px mt-24px">Buy Tickets</button>
        <p class="text-14px font-light text-center m-0 mt-6px">Next available schedule is in 2hr 30m.</p>

    </div>
</template>

<script setup>

const {cinemaDetails} = useSchedule();
console.log(cinemaDetails);

</script>

<style lang="scss" scoped>

</style>