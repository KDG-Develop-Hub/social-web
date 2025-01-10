<script lang="ts" setup>
  const cardContentRef = templateRef('card-content')
  const { height } = useElementSize(
    cardContentRef,
    { width: 640, height: 384 },
    {
      box: 'border-box'
    }
  )
  const contentHeight = computed(() => `${height.value}px`)
</script>

<template>
  <div class="card-positioner">
    <MaterialCard variant="elevated" class="card">
      <div ref="card-content" class="card-content">
        <div>
          <img class="logo" src="/logo.svg" alt="logo" />
          <div class="card-headline-group">
            <h2 class="headline-md">
              <slot name="title">タイトル</slot>
            </h2>
            <p class="body-md">
              <slot name="description">こちらに説明文が入ります。</slot>
            </p>
          </div>
        </div>
        <form class="card-form-group" >
          <div class="card-form-fields">
            <slot />
          </div>
          <div class="card-form-actions">
            <slot name="actions" />
          </div>
        </form>
      </div>
    </MaterialCard>
  </div>
</template>

<style scoped>
  .logo {
    height: 48px;
    width: fit-content;
  }
  .card-positioner {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .card {
    width: 100%;
    max-width: 896px;
    min-height: 384px;
    height: v-bind(contentHeight);
    transition: height var(--md-sys-motion-duration-xlong1)
      var(--md-sys-motion-easing-emphasized);
  }
  .card-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    gap: 1rem;
    padding: 2rem;
  }
  .card-headline-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .card-form-group {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
  }
  .card-form-actions {
    display: flex;
    justify-content: flex-end;
  }
  .card-form-fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    gap: 1rem;
  }
</style>
