<script setup lang="ts">
const medias = Array.from({ length: 4 * 3 }, () => ({}));
</script>

<template>
  <div class="article-list">
    <article v-for="(media, i) in medias" :key="i" class="square">
      <h1>Home</h1>
      <p>Home page content</p>
    </article>
  </div>
</template>

<style scoped>
article {
  border-radius: 1.5rem;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}
.article-list {
  --square-size: 20rem;
  padding: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
