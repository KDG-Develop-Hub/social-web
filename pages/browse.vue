<script setup lang="ts">
  import {
    Bookmark,
    History,
    MessageCircle,
    Search,
    Smile
  } from 'lucide-vue-next'
  import * as LucideIcons from 'lucide-vue-next'
  import { onMounted, ref } from 'vue'

  type IconName = keyof typeof LucideIcons

  interface SearchCandidate {
    icon: IconName
    text: string
  }

  const searchHistories = ref<string[]>([])
  const searchCandidates = ref<SearchCandidate[]>([
    { icon: 'Search', text: 'Nextjs' },
    { icon: 'Search', text: 'Vue.js' },
    { icon: 'Search', text: 'React' },
    { icon: 'Search', text: 'Angular' },
    { icon: 'Search', text: 'Svelte' }
  ])
  // const searchResults = ref('リザルト');
  const searchInput = ref<HTMLInputElement | null>(null)
  const inputValue = ref('')
  const showResults = ref(false)

  onMounted(() => {
    searchInput.value?.focus()
    const storedHistory = localStorage.getItem('searchHistory')
    if (storedHistory) {
      searchHistories.value = JSON.parse(storedHistory)
    }
  })

  const getIconComponent = (
    iconName: IconName
  ): (typeof LucideIcons)[IconName] => {
    return LucideIcons[iconName] || Search
  }

  const handleEnter = () => {
    if (!inputValue.value) {
      return
    }
    showResults.value = true
    addToSearchHistory(inputValue.value)
  }

  const addToSearchHistory = (query: string) => {
    const index = searchHistories.value.indexOf(query)

    if (index > -1) {
      searchHistories.value.splice(index, 1)
    }

    searchHistories.value.unshift(query)
    if (searchHistories.value.length > 5) {
      searchHistories.value = searchHistories.value.slice(0, 5)
    }

    localStorage.setItem('searchHistory', JSON.stringify(searchHistories.value))
  }

  const useSearchHistory = (query: string) => {
    inputValue.value = query
    handleEnter()
  }

  const clearSearchHistory = () => {
    searchHistories.value = []
    localStorage.removeItem('searchHistory')
  }

  watch(inputValue, (newValue: string, oldValue: string) => {
    if (newValue !== oldValue) {
      showResults.value = false
    }
  })
</script>

<template>
  <div class="search-container">
    <Search class="search-icon" />
    <input
      ref="searchInput"
      v-model="inputValue"
      type="text"
      class="search-input"
      placeholder="Search settings"
      @keydown.enter="handleEnter"
    />
  </div>
  <div v-if="showResults">
    <div class="tweet-component">
      <MaterialAvatar name="kensinn" src="https://via.placeholder.com/32" />
      <div class="tweet-content">
        <div class="tweet-header">
          <p>imeankenshin</p>
          <p>今日の12時34分</p>
        </div>
        <p class="text">外は天気良さげ🌞散歩しようかな？</p>
        <ul class="tweet-actions">
          <li><MessageCircle /></li>
          <li><Smile /></li>
          <li><Bookmark /></li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else-if="inputValue.length">
    <ul class="search-candidate-unordered">
      <li
        v-for="searchCandidate in searchCandidates"
        :key="searchCandidate.text"
      >
        <component :is="getIconComponent(searchCandidate.icon)" />
        {{ searchCandidate.text }}
      </li>
    </ul>
  </div>
  <div v-else class="search-history-container">
    <ul class="search-history-unordered">
      <li v-for="searchHistory in searchHistories" :key="searchHistory">
        <span><History /></span>
        <span class="history-item" @click="useSearchHistory(searchHistory)">{{
          searchHistory
        }}</span>
      </li>
    </ul>
    <button
      v-if="searchHistories.length"
      class="clear-history-button"
      @click="clearSearchHistory"
    >
      履歴をクリア
    </button>
  </div>
</template>

<style scoped>
  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: var(--md-sys-color-scrim);
    margin-bottom: 1rem;
  }

  .search-icon {
    width: 24px;
    height: 24px;
    stroke: var(--md-sys-color-scrim);
    margin-right: 10px;
  }

  .search-input {
    border: none;
    outline: none;
    width: 100%;
    color: var(--md-sys-color-scrim);
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .search-container input[type='text']::placeholder {
    color: gray;
    font-size: 1rem;
    font-weight: 400;
  }
  .search-history-unordered {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .search-history-unordered li {
    display: flex;
    gap: 10px;
  }

  .history-item {
    cursor: pointer;
    color: var(--md-sys-color-scrim);
  }

  .history-item:hover {
    text-decoration: underline;
  }

  .tweet-component {
    display: flex;
    gap: 10px;
  }

  .tweet-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .tweet-header {
    display: flex;
    gap: 10px;
  }

  .tweet-actions {
    display: flex;
    gap: 10px;
  }

  .search-candidate-unordered {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .search-candidate-unordered li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .clear-history-button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .clear-history-button:hover {
    background-color: #e0e0e0;
  }
</style>
