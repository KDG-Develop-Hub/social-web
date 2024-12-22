<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
</script>

<template>
  <div class="signup">
    <h2 class="headline-md">新規登録するには...</h2>
    <p class="body-md">
      サービス管理者に直接お問い合わせてね。
      そうしたら、新規登録用のQRコードをお送ります。
    </p>
  </div>
</template>

<style scoped>
  .signup {
    width: 100%;
    gap: 1rem;
    &.v-enter-active,
    &.v-leave-active {
      transition:
        opacity var(--md-sys-motion-duration-long4)
          var(--md-sys-motion-easing-decelerated),
        translate var(--md-sys-motion-duration-long4)
          var(--md-sys-motion-easing-decelerated);
    }
    &.v-enter-from,
    &.v-leave-to {
      opacity: 0;
      translate: 0 1rem;
    }
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
