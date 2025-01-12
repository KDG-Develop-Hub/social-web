<script setup lang="ts">
  defineProps<{
    isLoading: boolean
  }>()
  defineEmits<{
    (e: 'submit', data: { email: string; userId: string }): void
  }>()
  const email = ref('')
  const userId = ref('')
</script>

<template>
  <form
    @submit.prevent="$emit('submit', { email, userId })"
  >
    <AuthFormTitle>新規登録</AuthFormTitle>
    <AuthFormDescription
      >メールアドレスとユーザーIDを入力してください。</AuthFormDescription
    >
    <MaterialTextField v-model="email" v-focus label="メールアドレス" type="email" required />
    <MaterialTextField v-model="userId" label="ユーザーID" required />
    <AuthFormActionButtonSet>
      <MaterialButton type="submit" :disabled="isLoading">
        新規登録
      </MaterialButton>
    </AuthFormActionButtonSet>
  </form>
</template>
