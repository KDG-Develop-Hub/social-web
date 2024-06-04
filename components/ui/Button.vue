<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      variant: 'filled' | 'text' | 'outlined'
      color: 'primary' | 'secondary' | 'tertiary' | 'danger'
      as: string | object
      width: 'fit' | 'full'
    }>
  >(),
  {
    variant: 'filled',
    width: 'fit',
    color: 'primary',
    as: 'button'
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
  >
    <slot name="icon" />
    <span class="label-wrapper" :data-variant="variant" :data-color="color">
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
      --button-ctn-bgcolor-basic: var(--color-primary);
      --button-ctn-bgcolor-to-mix: var(--color-on-primary);
    }
    &[data-color='secondary'] {
      --button-ctn-bgcolor-basic: var(--color-secondary);
      --button-ctn-bgcolor-to-mix: var(--color-on-secondary);
    }
    &[data-color='danger'] {
      --button-ctn-bgcolor-basic: var(--color-error);
      --button-ctn-bgcolor-to-mix: var(--color-on-error);
    }
  }

  &[data-variant='text'] {
    --button-ctn-bgcolor-basic: transparent;
    &[data-color='primary'] {
      --button-ctn-bgcolor-to-mix: var(--color-primary);
    }
    &[data-color='secondary'] {
      --button-ctn-bgcolor-to-mix: var(--color-secondary);
    }
    &[data-color='danger'] {
      --button-ctn-bgcolor-to-mix: var(--color-error);
    }
  }

  &[data-variant='outlined'] {
    --button-ctn-bgcolor-to-mix: white;
    --button-ctn-bgcolor-basic: transparent;
    &[data-color='primary'] {
      border: 1px solid var(--color-outline);
    }
  }

  &[data-width='fit'] {
    width: fit-content;
  }

  &[data-width='full'] {
    width: 100%;
  }

  &[data-variant='filled']:disabled {
    background: color-mix(in srgb, var(--color-on-surface), transparent 88%);
  }

  &:is([data-variant='text'], [data-variant='outlined']):disabled {
    background: transparent;
  }

  &[data-variant='outlined']:disabled {
    border: 1px solid color-mix(in srgb, var(--color-outline), transparent 88%);
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

  &[data-variant='filled'] {
    &[data-color='primary'] {
      color: var(--color-on-primary);
    }
    &[data-color='secondary'] {
      color: var(--color-on-secondary);
    }
    &[data-color='danger'] {
      color: var(--color-on-error);
    }
  }

  &[data-variant='text'] {
    color: var(--color-on-surface);
  }

  &[data-variant='outlined'] {
    &[data-color='primary'] {
      color: var(--color-primary);
    }
    &[data-color='secondary'] {
      color: var(--color-secondary);
    }
    &[data-color='danger'] {
      color: var(--color-error);
    }
  }

  .container:disabled & {
    color: color-mix(in srgb, var(--color-on-surface), transparent 62%);
  }
}
</style>
