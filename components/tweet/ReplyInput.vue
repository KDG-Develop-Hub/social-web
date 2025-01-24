<script setup lang="ts">
  const inputIsFull = ref(false)
  const form = templateRef<HTMLFormElement>('form')
  const contentEl = templateRef<HTMLDivElement>('content')
  const contentSize = useElementSize(
    contentEl,
    { width: 0, height: 64 },
    {
      box: 'border-box'
    }
  )
  const height = computed(() => `${contentSize.height.value}px`)
</script>

<template>
  <form ref="form" class="reply-input-root" @submit.prevent>
    <div ref="content" class="reply-input-root-wrapped">
      <div class="reply-input-container">
        <div class="avatar-wrapper">
          <MaterialAvatar
            size="sm"
            name="userName"
            src="https://via.placeholder.com/256"
          />
        </div>
        <CoreAutoResizingTextField
          name="content"
          placeholder="返信する"
          class="reply-input body-lg"
          @input="inputIsFull = Boolean($event.target.value)"
          @keydown.enter.meta="form.requestSubmit()"
        />
        <MaterialIconButton
          v-if="inputIsFull"
          type="submit"
          title="送信(⌘+Enter)"
          :disabled="!inputIsFull"
        >
          <Icon name="material-symbols:send-outline-rounded" size="24" />
        </MaterialIconButton>
      </div>
    </div>
  </form>
</template>

<style scoped>
  .avatar-wrapper {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
  }
  .reply-input-root {
    height: v-bind(height);
    border-radius: 2rem;
    background-color: var(--md-sys-color-surface-container);
    transition: height var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);
    &:focus-within {
      outline: var(--md-sys-color-on-surface) solid 2px;
      outline-offset: 2px;
    }
  }
  .reply-input-root-wrapped {
    padding: 0.5rem;
  }
  .reply-input-container {
    display: flex;
    min-height: 3rem;
    align-items: flex-end;
    gap: 0.75rem;
  }
  .reply-input {
    flex-grow: 1;
    border: none;
    background: transparent;
    padding: 0.75rem 0;
    outline: none;
    color: var(--md-sys-color-on-surface);
  }
</style>
