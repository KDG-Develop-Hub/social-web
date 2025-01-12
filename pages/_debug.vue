<script setup>
  function emits505() {
    throw Error('This error occured by purpose.')
  }
</script>

<template>
  <div>
    <h1>Debug Page</h1>
    <p>This is a debug page.</p>
    <MaterialButton @click="emits505">エラーを起こす</MaterialButton>
  </div>
</template>
