<script setup lang="ts">
import {
  RadioGroupItemText,
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput, RadioGroupContext
} from "@ark-ui/vue";

const themes = [
  {id: "system", name: "システム"},
  {id: "light", name: "ライト"},
  {id: "dark", name: "ダーク"},
]
</script>

<template>
  <h2>見た目</h2>
  <div>
    <h3 id="theme">
      テーマ
    </h3>
    <p id="theme-describe">
      テーマを選択すると、アプリケーションの見た目が変わります。
    </p>
    <RadioGroupRoot aria-labelledby="theme" aria-describedby="theme-describe" class="h-stack">
      <RadioGroupItem v-for="theme in themes" :key="theme.id" class="item v-stack" :value="theme.id">
        <RadioGroupItemControl class="indicator square" :data-color="theme.id"/>
        <RadioGroupItemText>{{ theme.name }}</RadioGroupItemText>
        <RadioGroupItemHiddenInput/>
      </RadioGroupItem>
    </RadioGroupRoot>
  </div>
</template>

<style scoped>
.item {
  border: none;
  background: transparent;
}

.indicator {
  --square-size: 6rem;
  display: inline-flex;
  border-radius: 99rem;
  overflow: hidden;
  border: 3px solid var(--color-outline-variant);

  &[data-state="checked"] {
    border-color: var(--color-primary);
    &:after {
      scale: 0.75;
    }
  }

  &:after {
    display: block;
    border-radius: 99rem;
    content: ' ';
    scale: 0.5;
    width: 100%;
    height: 100%;
    transition: scale 200ms cubic-bezier(0.14, 0.92, 0.34, 1);
  }

  &[data-color="system"]:after {
    background: linear-gradient(
        to right,
        var(--palette-neutral10),
        var(--palette-neutral10) 50%,
        var(--palette-neutral90) 50%,
        var(--palette-neutral90)
    );
  }

  &[data-color="light"]:after {
    background: var(--palette-neutral90)
  }

  &[data-color="dark"]:after {
    background: var(--palette-neutral10)
  }
}

</style>