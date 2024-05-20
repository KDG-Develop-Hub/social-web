<script setup lang="ts">
</script>

<template>
  <h2>アカウント情報</h2>
  <div class="text-fields v-stack">
    <TextField min-length="1" type="text" autocomplete="name" full-width max-length="32" label="名前"/>
    <TextField min-length="1" full-width max-length="32" label="表示名" hint="半角英数"/>
  </div>
  <h2>アカウントの無効</h2>
  <Button color="danger">アカウントを無効化</Button>
</template>

<style scoped>
.text-fields {
  width: 100%;
  max-width: 32rem;
}
h2 {
  margin-bottom: 1rem;
}
</style>