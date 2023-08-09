<script setup lang="ts">
definePageMeta({
  title: 'Home page',
  layout: 'vertical',
});
const enableHorizonralLayout = (layout: string) => {
  setPageLayout(layout);
};

</script>

<template>
  <div class="mt-[200px]">
    <button @click="enableHorizonralLayout('horizontal')">
      Change to horizontal layout
    </button>
  </div>
  <div>
    <button @click="enableHorizonralLayout('vertical')">
      Change to vertical layout
    </button>
  </div>
  <h1>duy anh</h1>
  <div>
     <NuxtLink to="/about">
    About page
  </NuxtLink>
  </div>
</template>
