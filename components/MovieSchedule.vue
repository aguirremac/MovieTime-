<template>
    <div    v-for="(cinema, index) in sortedCinemaDetails" 
            :key="index"
            class="bg-#262626  rounded-xl drop-shadow-xl w-328px h-193px  2xl:w-472px 2xl:h-278px">
        <!-- cinema icon + name -->
        <div class="flex gap-14px w-full pt-16px 2xl:pt-23px pl-18px 2xl:pl-26px">
            <img :src="'/cinemas/' + cinema.cinemaPosterURL" 
                 :alt="cinema.location" 
                 class="rounded-full h-37px w-37px 2xl:h-53px 2xl:w-53px"
                    
                    >
            <div>
                <h2 class="font-normal text-16px 2xl:text-24px m-0">{{ cinema.location }}</h2>
                <h3 class="font-thin text-13px 2xl:text-20px m-0">Cinema {{ cinema.cinemaNum }}</h3>
            </div>
        </div>

    
        <!-- time slots -->
        <div class="pl-69px 2xl:pl-100px pr-25px 2xl:pr-37px flex flex-wrap gap-x-26px 2xl:gap-x-38px mt-10px xl:mt-15px" >
            <h2 v-for="(time, qIndex) in cinema.timeSlot"
                :key="qIndex"
                class="m-0 font-light text-21px 2xl:text-30px"
                :class="{'line-through text-#616161' : timeNow  >= time}"
                >{{ time }} </h2>
            
        </div>


        <button v-if="timeSlot[index].cdMinutes"  
                class="bg-#32A544  text-white text-14px 2xl:text-20px font-semibold w-308px h-35px 2xl:w-445px 2xl:h-51px rounded-xl border-none mx-14px mt-17px 2xl:mt-24px cursor-pointer active:scale-103 duration-200"
                >Buy Tickets</button>
       
        <p v-if="timeSlot[index].cdMinutes" class="text-9.7px 2xl:text-14px font-extralight text-center m-0 mt-6px">Next available schedule is in {{timeSlot[index].cdHours}}h {{ timeSlot[index].cdMinutes}}m.</p>
        
    </div>
</template>



<script setup>

const {cinemaDetails} = useSchedule();
// sort cinema location a-z
const sortedCinemaDetails = cinemaDetails.sort((a,b)=> a.location.localeCompare(b.location))

// const todayString = new Date().toLocaleDateString("en-US", {
//   year: "numeric",
//   month: "long",
//   day: "numeric"
// }); //March/6/2023

const now = new Date()
const timeNow = ("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2)

const timeSlot = cinemaDetails.map((cinema) => {
  let smallestDiff = Infinity;

  cinema.timeSlot.forEach(time => {
    const [hours, minutes] = time.split(":");
    const future = new Date();
    future.setHours(hours);
    future.setMinutes(minutes);
    const diff = future - now;

    if (diff > 0 && diff < smallestDiff) {
      smallestDiff = diff;
    }
  });

  const cdHours = Math.floor(smallestDiff / (1000 * 60 * 60));
  const cdMinutes = Math.floor((smallestDiff / (1000 * 60)) % 60);

  return {
    cdHours,
    cdMinutes
  };
});



</script>

<style lang="scss" scoped>

</style>