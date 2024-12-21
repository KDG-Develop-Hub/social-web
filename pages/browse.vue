<script lang="ts" setup>
  const searchHistories = useCookie<string[]>('searchHistory', {
    default: () => []
  })
  const route = useRoute()
  const q = computed(() => route.query.q as string)
  const searchKeyword = ref<string>(q.value ?? '')

  function saveSearchHistory(keyword: string) {
    searchHistories.value = searchHistories.value
      .filter(i => i !== keyword)
      .slice(0, 8)
    searchHistories.value.unshift(keyword)
  }
  async function browse(keyword: string) {
    await navigateTo({ name: 'browse', query: { q: keyword } })
    if (!keyword) return
    nextTick()
    saveSearchHistory(keyword)
  }
</script>

<template>
  <div class="browse-container">
    <form class="search-bar" @submit.prevent="browse(searchKeyword)">
      <Icon name="material-symbols:search-rounded" />
      <input
        v-model="searchKeyword"
        class="body-lg search-bar-input"
        type="search"
        placeholder="キーワードを入力"
      />
    </form>
    <Transition name="page">
      <div v-if="q" :key="q">
        <h2 class="display-sm">TODO: ブラウズリスト</h2>
      </div>
      <div v-else>
        <NuxtLink
          v-for="keyword in searchHistories"
          :key="keyword"
          v-ripple
          :to="{ name: 'browse', query: { q: keyword } }"
          class="search-result-item"
          @click="saveSearchHistory(keyword)"
        >
          <Icon name="material-symbols:history-rounded" />
          <span class="body-lg">{{ keyword }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
  .browse-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .search-bar {
    background: var(--md-sys-color-surface-container-high);
    padding: 1rem;
    border-radius: var(--md-sys-shape-corner-full);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &:has(.search-bar-input:focus-within) {
      outline: 3px solid var(--md-sys-color-on-surface);
      outline-offset: 4px;
    }
  }
  .search-bar-input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    color: var(--md-sys-color-on-surface);
    &&::placeholder {
      color: var(--md-sys-color-on-surface-variant);
    }
  }
  .search-result-item {
    width: fit-content;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 3rem;
    border-radius: var(--md-sys-shape-corner-full);
    &:hover {
      background: var(--md-sys-color-surface-container-high);
    }
  }
</style>
