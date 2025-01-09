<script setup lang="ts">
  definePageMeta({
    layout: false
  })
</script>

<template>
  <NuxtLayout name="auth">
    <template #title>後もう一歩です！</template>
    <template #description>
      あなたのメールアドレスにログイン用のマジックリンクを送信しました。マジックリンクをクリックして、ログインしてください。
    </template>
    <template #actions>
      <MaterialButton variant="outlined" to="/login">
        メールを再入力する
      </MaterialButton>
    </template>
  </NuxtLayout>
</template>
