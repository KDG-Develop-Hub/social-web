<script setup lang="ts">
  import emojilib from 'emojilib'
  import emojiGroups from 'unicode-emoji-json/data-by-group.json'

  const emit = defineEmits<{
    (e: 'select', emoji: string): void
  }>()

  const search = ref('')
  const searchResults = computed(() => {
    return Object.keys(emojilib).filter(emoji =>
      emojilib[emoji].filter(i => i.startsWith(search.value)).length > 0
    )
  })
  const headerEl = templateRef('header')
  const scrollContainerEl = templateRef('scrollContainer')

  const history = useLocalStorage<string[]>('emoji-history', [])
  const headerSize = useElementSize(
    headerEl,
    { width: 0, height: 0 },
    {
      box: 'border-box'
    }
  )

  function pickEmoji(emoji: string) {
    emit('select', emoji)
    if (history.value.includes(emoji)) {
      history.value.splice(history.value.indexOf(emoji), 1)
    }
    if (history.value.length >= 36) {
      history.value.splice(36)
    }
    history.value.unshift(emoji)
  }

  async function scrollToSection(sectionId: string) {
    search.value = ''
    await nextTick()
    const element = document.getElementById(sectionId)
    if (element) {
      scrollContainerEl.value.scrollTo({
        top: element.offsetTop - headerSize.height.value,
        behavior: 'smooth'
      })
    }
  }
</script>

<template>
  <MaterialCard variant="elevated" class="emoji-picker">
    <div ref="header" class="emoji-picker__header">
      <div class="emoji-picker__categories">
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('history')">
          <Icon size="20" name="material-symbols:history-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('smileys_emotion')">
          <Icon size="20" name="material-symbols:mood-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('people_body')">
          <Icon size="20" name="material-symbols:emoji-people-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('animals_nature')">
          <Icon size="20" name="material-symbols:emoji-nature-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('food_drink')">
          <Icon size="20" name="material-symbols:emoji-food-beverage-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('travel_places')">
          <Icon
            size="20"
            name="material-symbols:emoji-transportation-rounded"
          />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('activities')">
          <Icon size="20" name="material-symbols:emoji-events" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('objects')">
          <Icon size="20" name="material-symbols:emoji-objects-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('symbols')">
          <Icon size="20" name="material-symbols:emoji-symbols-rounded" />
        </button>
        <button v-ripple class="emoji-picker__category_button" @click="scrollToSection('flags')">
          <Icon size="20" name="material-symbols:flag-rounded" />
        </button>
      </div>
      <div class="emoji-search">
        <Icon size="20" name="material-symbols:search-rounded" />
        <input
          v-model="search"
          placeholder="検索(英語)"
          class="emoji-search__input body-sm"
        />
      </div>
    </div>
    <div ref="scrollContainer" class="emoji-picker__scroll-container">
      <div v-if="search" class="emoji-picker__grid">
        <button
          v-for="emoji in searchResults"
          :key="emoji"
          class="emoji-picker__emoji headline-sm"
          @click="pickEmoji(emoji)"
        >
          {{ emoji }}
        </button>
      </div>
      <template v-else>
        <div id="history" class="emoji-picker__grid">
          <span class="body-sm emoji-picker__group-label">Recent</span>
          <button
            v-for="emoji in history"
            :key="emoji"
            class="emoji-picker__emoji headline-sm"
            @click="pickEmoji(emoji)"
          >
            {{ emoji }}
          </button>
        </div>
        <div v-for="group in emojiGroups" :id="group.slug" :key="group.slug">
          <div class="emoji-picker__grid">
            <span class="body-sm emoji-picker__group-label">
              {{ group.name }}
            </span>
            <button
              v-for="emoji in group.emojis.filter(
                emoji => Number(emoji.emoji_version) <= 15
              )"
              :key="emoji.slug"
              :title="emoji.name"
              class="emoji-picker__emoji headline-sm"
              @click="pickEmoji(emoji.emoji)"
            >
              {{ emoji.emoji }}
            </button>
          </div>
        </div>
      </template>
    </div>
  </MaterialCard>
</template>

<style scoped>
  .emoji-picker {
    overflow: hidden;
    border-radius: var(--md-sys-shape-corner-md);
  }
  .emoji-picker__scroll-container {
    height: 16rem;
    overflow-y: scroll;
  }
  .emoji-picker__group-label {
    background-color: var(--md-sys-color-surface-container-low);
    color: var(--md-sys-color-on-surface-variant);
    position: sticky;
    padding: 0.25rem;
    top: 0;
    grid-column: 1 / -1;
  }
  .emoji-picker__header {
    padding: 1rem;
    background-color: var(--md-sys-color-surface-container);
  }
  .emoji-picker__categories {
    display: flex;
    align-items: center;
  }
  .emoji-picker__category_button {
    height: 2rem;
    width: 2rem;
    border-radius: var(--md-sys-shape-corner-full);
    display: grid;
    place-items: center
  }
  .emoji-picker__grid {
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    &:first-child {
      margin-top: 0;
    }
  }
  .emoji-picker__emoji {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }
  .emoji-search {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: var(--md-sys-shape-corner-full);
    padding: 0 0.5rem;
    gap: 0.25rem;
    height: 2rem;
    background-color: var(--md-sys-color-surface-container-high);
  }
  .emoji-search__input {
    border: none;
    outline: none;
    background-color: transparent;
  }
</style>
