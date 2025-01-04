<template>
  <div>
    <h1>This is Project</h1>
    <router-link to="/">To go Home</router-link>
    <router-link :to="{ name: '/project/[id]', params: { id: 1 } }"
      >go to one</router-link
    >
  </div>
</template>
