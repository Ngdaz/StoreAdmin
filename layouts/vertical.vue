<template>
  <div
    class="fixed top-0 left-0"
    :class="{ 'w-[60px]': isCollapsed, 'w-[220px]': !isCollapsed }"
  >
    <SideBar />
  </div>
  <div
    class="relative h-screen transition ease-in-out delay-150"
    :class="{
      'ml-[65px] w-[calc(100%-65px)]': isCollapsed,
      'ml-[220px] w-[calc(100%-220px)]': !isCollapsed,
    }"
  >
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layouts/NavBar.vue';
import SideBar from '@/components/layouts/SideBar.vue';

const { isCollapsed } = useCollapsed();
</script>
