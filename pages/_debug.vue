<script setup>
  function emits505() {
    throw createError({
      statusCode: 505,
      message: 'このエラーはデバッグ用です。'
    })
  }
</script>

<template>
  <div>
    <h1>Debug Page</h1>
    <p>This is a debug page.</p>
    <MaterialButton @click="emits505">エラーを起こす</MaterialButton>
  </div>
</template>
