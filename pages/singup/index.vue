<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
  const route = useRoute()
  const token = computed(() => route.query.token as string)
  const tokenIsValid = computed(() => {
    if (token.value === null ? undefined : token.value === undefined)
      return null
    return token.value.length === 32
  })
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
  const reset = () => {
    mailIsSent.value = false
  }
</script>

<template>
  <div v-if="mailIsSent" class="signup-form">
    <AuthFormTitle>後もう一歩です！</AuthFormTitle>
    <AuthFormDescription>
      入力されたメールを認証するために、あなたのメールにマジックリンクを送信しました。マジックリンクをクリックして、新規登録を完了させましょう。
    </AuthFormDescription>
    <AuthFormActionButtonSet>
      <MaterialButton variant="outlined" :disabled="isLoading" @click="reset()">
        メールを再入力する
      </MaterialButton>
    </AuthFormActionButtonSet>
  </div>
  <form
    v-else-if="tokenIsValid"
    class="signup-form"
    @submit.prevent="execute()"
  >
    <AuthFormTitle>新規登録</AuthFormTitle>
    <AuthFormDescription
      >メールアドレスとユーザーIDを入力してください。</AuthFormDescription
    >
    <MaterialTextField v-focus label="メールアドレス" type="email" autocomplete="email" required />
    <MaterialTextField label="ユーザーID" required />
    <AuthFormActionButtonSet>
      <MaterialButton type="submit" :disabled="isLoading">
        新規登録
      </MaterialButton>
    </AuthFormActionButtonSet>
  </form>
  <div v-else-if="tokenIsValid === false" class="signup-form-content">
    <h2 class="headline-md">エラー</h2>
    <p class="body-md">トークンが無効です。</p>
  </div>
  <div v-else>
    <AuthFormTitle>新規登録するには...</AuthFormTitle>
    <AuthFormDescription>
      サービス管理者に直接お問い合わせてね。そうしたら、新規登録用のQRコードをお送ります。
    </AuthFormDescription>
  </div>
</template>

<style scoped>
  .signup-form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .signup-form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
  .button-set {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    align-items: flex-end;
    flex-grow: 1;
  }
</style>
