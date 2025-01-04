<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>Project {{ route.params?.id }}</div>
  <router-link to="/">go to home</router-link>
</template>
