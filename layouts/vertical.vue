<template>
  <div class="fixed top-0 left-0 w-[220px]">
    <SideBar />
  </div>
  <div
    class="relative w-[calc(100%-220px)] h-screen transition ease-in-out delay-150"
    :class="{ 'ml-0': !isCollapsed, 'ml-[220px]': isCollapsed }"
  >
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Navbar from '@/components/layouts/NavBar.vue';
import SideBar from '@/components/layouts/SideBar.vue';

const isCollapsed = ref(true);
</script>
