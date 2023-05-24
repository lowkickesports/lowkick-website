import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

<template>
  <div class="pt-12">
    <div class="flex justify-center align-middle m-auto">
      <img src="~/assets/logo-nogradient.png" alt="lowkickesports" class="w-32" />
    </div>
    <div
      class="flex flex-col w-full justify-start align-middle m-auto space-y-2 pt-5 pb-10"
    >
    <h1 class="text-white text-xl font-bold font-bebas italic uppercase  m-auto">@lowkickesports</h1>
      <h2 class="text-white text-xl font-bold font-bebas italic uppercase  m-auto">Low Kick Esports brings community-friendly events to the Chicagoland FGC</h2>
    </div>
    <div
      class="flex flex-col w-full justify-start align-middle m-auto space-y-11"
    >

      <NuxtLink to="#_" class="relative inline-flex items-center justify-center m-auto inline-block px-5 py-3 overflow-hidden font-bold rounded-md group w-[505px]">

    <span class="
      absolute top-0 left-0 w-[1000px] h-[600px] -mt-1 
      transition-all duration-700 ease-in-out rotate-45 -translate-x-[800px] -translate-y-28 
      bg-accent opacity-100 
      group-hover:-translate-x-8">
    </span>

    <span class="
    relative w-full flex
    text-left text-accent text-center justify-center
    transition-colors duration-200 ease-in-out 
    group-hover:text-white"
    
    >
    Whatever</span>

    <span class="
    absolute inset-0 
    border-2 border-accent rounded-md">
    </span>
    </NuxtLink>

    </div>
  </div>
</template>