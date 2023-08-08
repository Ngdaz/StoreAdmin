<script setup lang="ts">
definePageMeta({
  title: 'Custom page',
  layout: false,
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
  <h1>custome page</h1>
</template>
