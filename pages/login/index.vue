<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
  const router = useRouter()
  const email = ref('')
  const {
    execute,
    isLoading,
    state: mailIsSent
  } = useAsyncState(
    async () => {
      await sleep(1000)

      // TODO: ログイン用のメールを送信する。成功する場合はtrue, 失敗する場合はfalseを返す。
      return true
    },
    undefined,
    { immediate: false }
  )
  watch(mailIsSent, () => {
    if (mailIsSent.value) {
      router.push('/login/sent')
    }
  })
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

<style lang="css" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .login-form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
</style>
