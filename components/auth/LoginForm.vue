<script setup lang="ts">
  defineProps<{
    isLoading: boolean
  }>()

  const emit = defineEmits<{
    (e: 'submit', email: string): void
  }>()

  const email = ref('')

  const execute = () => {
    emit('submit', email.value)
  }
</script>

<template>
  <form @submit.prevent="execute()">
    <AuthFormTitle>ログイン</AuthFormTitle>
    <AuthFormDescription>
      入力されたメールアドレス宛に、ログインするためのリンクを送信します。
    </AuthFormDescription>
    <div class="login-form-content">
      <MaterialTextField
        v-model="email"
        v-focus
        required
        label="メールアドレス"
        type="email"
        autocomplete="email"
      />
    </div>
    <AuthFormActionButtonSet>
      <MaterialButton type="submit" :disabled="isLoading">
        ログインする
      </MaterialButton>
    </AuthFormActionButtonSet>
  </form>
</template>
