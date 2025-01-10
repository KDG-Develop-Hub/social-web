<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
</script>

<template>
  <div>
    <AuthFormTitle>後もう一歩です！</AuthFormTitle>
    <AuthFormDescription>
      あなたのメールアドレスにログイン用のマジックリンクを送信しました。マジックリンクをクリックして、ログインしてください。
    </AuthFormDescription>
    <AuthFormActionButtonSet>
      <MaterialButton variant="outlined" to="/login">
        メールを再入力する
      </MaterialButton>
    </AuthFormActionButtonSet>
  </div>
</template>
