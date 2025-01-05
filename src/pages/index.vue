<template>
  <div>
    <h1>Home</h1>
    <router-link to="/project">Go To Project</router-link>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/superBaseClient";

const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("projects").select();
  console.log(data);

  countries.value = data;
}

onMounted(() => {
  getCountries();
});
</script>
