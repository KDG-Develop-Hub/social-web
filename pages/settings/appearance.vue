<script setup lang="ts">
  import {
    RadioGroupItem,
    RadioGroupItemControl,
    RadioGroupItemHiddenInput,
    RadioGroupItemText,
    RadioGroupRoot
  } from '@ark-ui/vue'

  const themes = [
    { id: 'system', name: 'システム' },
    { id: 'light', name: 'ライト' },
    { id: 'dark', name: 'ダーク' }
  ]
</script>

<template>
  <h2>見た目</h2>
  <div>
    <h3 id="theme">テーマ</h3>
    <p id="theme-describe">
      テーマを選択すると、アプリケーションの見た目が変わります。
    </p>
    <RadioGroupRoot
      aria-labelledby="theme"
      aria-describedby="theme-describe"
      class="h-stack"
    >
      <RadioGroupItem
        v-for="theme in themes"
        :key="theme.id"
        class="item v-stack"
        :value="theme.id"
      >
        <RadioGroupItemControl
          class="indicator square"
          :data-color="theme.id"
        />
        <RadioGroupItemText>{{ theme.name }}</RadioGroupItemText>
        <RadioGroupItemHiddenInput />
      </RadioGroupItem>
    </RadioGroupRoot>
  </div>
</template>

<style scoped>
  h2 {
    margin: 1rem 0;
  }
  h3,
  p {
    margin: 0.5rem 0;
  }
  .item {
    border: none;
    background: transparent;
  }

  .indicator {
    --square-size: 6rem;
    display: inline-flex;
    border-radius: var(--md-sys-shape-corner-full);
    overflow: hidden;
    border: 3px solid var(--md-sys-color-outline-variant);

    &[data-state='checked'] {
      border-color: var(--md-sys-color-primary);
      &:after {
        scale: 0.75;
      }
    }

    &:after {
      display: block;
      border-radius: var(--md-sys-shape-corner-full);
      content: ' ';
      scale: 0.5;
      width: 100%;
      height: 100%;
      transition: scale var(--md-sys-motion-duration-short4)
        var(--md-sys-motion-easing-emphasized);
    }

    &[data-color='system']:after {
      background: linear-gradient(
        to right,
        rgb(217 219 209),
        rgb(217 219 209) 50%,
        rgb(17 20 14) 50%,
        rgb(17 20 14)
      );
    }

    &[data-color='light']:after {
      background: rgb(217 219 209);
    }

    &[data-color='dark']:after {
      background: rgb(17 20 14);
    }
  }
</style>
