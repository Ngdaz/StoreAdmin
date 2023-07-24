<script setup>
definePageMeta({
  title: 'Custom page',
  layout: 'default',
});
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <div>custom</div>
  </div>
</template>
