<template>
  <div class="layout">
    <OrgNavigationRail />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}
</style>
