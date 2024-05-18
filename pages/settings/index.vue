<script setup lang="ts">
</script>

<template>
  <h2>アカウント情報</h2>
  <TextField type="text" autocomplete="name" width="512" :min-length="1" :max-length="2**5" label="名前"/>
  <TextField width="512" :min-length="1" :maxLength="2**5" label="表示名" hint="半角英数"/>
  <h2>アカウントの無効</h2>
  <Button color="danger">アカウントを無効化</Button>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>