<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      variant: 'filled' | 'text' | 'outlined'
      color: 'primary' | 'secondary' | 'tertiary' | 'danger' | ''
      as: string | object
      width: 'fit' | 'full'
      disabled: boolean
    }>
  >(),
  {
    variant: 'filled',
    width: 'fit',
    color: 'primary',
    as: 'button',
    disabled: false
  }
)
</script>

<template>
  <component
    :is="as"
    :data-width="width"
    :data-variant="variant"
    :data-color="color"
    class="container"
    :disabled="disabled"
  >
    <slot name="icon" />
    <span
      class="label-wrapper"
      :aria-disabled="disabled"
      :data-variant="variant"
      :data-color="color"
    >
      <slot>ここを押してね</slot>
    </span>
  </component>
</template>

<style scoped>
.container {
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: 99rem;
  height: 2.5rem;
  background: var(--button-ctn-bgcolor-basic);

  &:hover {
    background: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 10%
    );
  }

  &:active {
    background: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 18%
    );
  }

  &:disabled {
    cursor: not-allowed;
  }

  &[data-variant='filled'] {
    &[data-color='primary'] {
      --button-ctn-bgcolor-basic: var(--md-sys-color-primary);
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-on-primary);
    }
    &[data-color='secondary'] {
      --button-ctn-bgcolor-basic: var(--md-sys-color-secondary);
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-on-secondary);
    }
    &[data-color='danger'] {
      --button-ctn-bgcolor-basic: var(--md-sys-color-error);
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-on-error);
    }
  }

  &[data-variant='text'] {
    --button-ctn-bgcolor-basic: transparent;
    &[data-color='primary'] {
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-primary);
    }
    &[data-color='secondary'] {
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-secondary);
    }
    &[data-color='danger'] {
      --button-ctn-bgcolor-to-mix: var(--md-sys-color-error);
    }
  }

  &[data-variant='outlined'] {
    --button-ctn-bgcolor-to-mix: white;
    --button-ctn-bgcolor-basic: transparent;
    &[data-color='primary'] {
      border: 1px solid var(--md-sys-color-outline);
    }
  }

  &[data-width='fit'] {
    width: fit-content;
  }

  &[data-width='full'] {
    width: 100%;
  }

  &[data-variant='filled']:disabled {
    background: color-mix(
      in srgb,
      var(--md-sys-color-on-surface) 12%,
      transparent
    );
  }

  &:is([data-variant='text'], [data-variant='outlined']):disabled {
    background: transparent;
  }

  &[data-variant='outlined']:disabled {
    border: 1px solid
      color-mix(in srgb, var(--md-sys-color-outline) 12%, transparent);
  }
}

.label-wrapper {
  padding: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  pointer-events: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--label-color);

  &[data-variant='filled'] {
    &[data-color='primary'] {
      --label-color: var(--md-sys-color-on-primary);
    }
    &[data-color='secondary'] {
      --label-color: var(--md-sys-color-on-secondary);
    }
    &[data-color='danger'] {
      --label-color: var(--md-sys-color-on-error);
    }
  }

  &[data-variant='text'] {
    --label-color: var(--md-sys-color-on-surface);
  }

  &[data-variant='outlined'] {
    &[data-color='primary'] {
      --label-color: var(--md-sys-color-primary);
    }
    &[data-color='secondary'] {
      --label-color: var(--md-sys-color-secondary);
    }
    &[data-color='danger'] {
      --label-color: var(--md-sys-color-error);
    }
  }

  &[aria-disabled='true'] {
    color: color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent);
  }
}
</style>
