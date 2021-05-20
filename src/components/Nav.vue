<template>
  <div class="nav h-screen w-1/4 bg-darker inline-flex flex-col">
    <div class="inline-flex flex-col items-center">
      <img class="mt-4 h-auto" style="width: 10rem" src="https://i.imgur.com/Q5nwHLu.png">
    </div>

    <div class="mt-16">

      <div class="border-blue-400 border-l-2 mt-4 cursor-pointer">
        <h1 class="text-blue-400 tracking-wide pl-16 uppercase font-thin text-xl">Discover</h1>
      </div>


      <div class="mt-4 cursor-pointer empty-border">
        <h1 class="text-white tracking-wide pl-16 uppercase font-thin text-xl">Movies</h1>
      </div>
      <div class="mt-4 cursor-pointer empty-border">
        <h1 class="text-white tracking-wide pl-16 uppercase font-thin text-xl">Tv Show</h1>
      </div>
    </div>

  </div>
</template>

<style type="text/css">
  .empty-border {
    border-color: #131c25;
    border-left-width: 2px;
  }
</style>

<script>
export default {
  name: 'Nav',
  props: {
    selected: String
  }
};
</script>