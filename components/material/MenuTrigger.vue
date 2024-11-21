<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'
  const id = useId()
</script>

<template>
  <Menu.Root :id>
    <Menu.Trigger>Options</Menu.Trigger>
    <MaterialMenuContainer>
      <MaterialMenuItem value="Edit">
        <template #leading-icon>
          <Icon name="material-symbols:edit-outline-rounded" size="24" />
        </template>
        Edit
      </MaterialMenuItem>
      <MaterialMenuItem value="Emoji">
        <template #leading-icon>
          <Icon
            name="material-symbols:add-reaction-outline-rounded"
            size="24"
          />
        </template>
        Emoji
      </MaterialMenuItem>
    </MaterialMenuContainer>
  </Menu.Root>
</template>
