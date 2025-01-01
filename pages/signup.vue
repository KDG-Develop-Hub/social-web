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
</script>

<template>
  <form v-if="tokenIsValid" @submit.prevent>
    <div class="signup-form-content">
      <h2 class="headline-md">新規登録</h2>
      <p class="body-md">メールアドレスとユーザーIDを入力してください。</p>
      <MaterialTextField v-focus label="メールアドレス" type="email" required />
      <MaterialTextField label="ユーザーID" required />
    </div>
    <div class="button-set">
      <MaterialButton type="submit">新規登録</MaterialButton>
    </div>
  </form>
  <div v-else-if="tokenIsValid === false" class="signup-form-content">
    <h2 class="headline-md">エラー</h2>
    <p class="body-md">トークンが無効です。</p>
  </div>
  <div v-else class="signup-form-content">
    <h2 class="headline-md">新規登録するには...</h2>
    <p class="body-md">
      サービス管理者に直接お問い合わせてね。<br />
      そうしたら、新規登録用のQRコードをお送ります。
    </p>
  </div>
</template>

<style scoped>
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
    flex-grow: 1;
  }
</style>
