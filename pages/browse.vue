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

  const searchHistories = ref([
    'Javascript',
    'Javascript',
    'Javascript',
    'Javascript',
    'Javascript'
  ])
  const searchCandidates = ref<SearchCandidate[]>([
    { icon: 'Search', text: 'Nextjs' },
    { icon: 'History', text: 'Nextjs パラレル' }
  ])
  // const searchResults = ref('リザルト');
  const searchInput = ref<HTMLInputElement | null>(null)
  const inputValue = ref('')
  const showResults = ref(false)

  onMounted(() => {
    searchInput.value?.focus()
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
        {{ searchHistory }}
      </li>
    </ul>
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
</style>
