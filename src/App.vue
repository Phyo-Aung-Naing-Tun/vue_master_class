<script setup lang="ts">
import { supabase } from "@/lib/superBaseClient";

console.log(supabase);
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>
