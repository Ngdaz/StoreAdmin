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
  <div>
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
</template>
