<script setup lang="ts">
  defineEmits<{
    (e: 'reset'): void
  }>()
</script>

<template>
  <div>
    <AuthFormTitle>後もう一歩です！</AuthFormTitle>
    <AuthFormDescription>
      入力されたメールを認証するために、あなたのメールにマジックリンクを送信しました。マジックリンクをクリックして、新規登録を完了させましょう。
    </AuthFormDescription>
    <AuthFormActionButtonSet>
      <MaterialButton variant="outlined" @click="$emit('reset')">
        メールを再入力する
      </MaterialButton>
    </AuthFormActionButtonSet>
  </div>
</template>
