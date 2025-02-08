<script setup lang="ts">
  import emojilib from 'emojilib'
  import emojiGroups from 'unicode-emoji-json/data-by-group.json'

  const emit = defineEmits<{
    (e: 'select', emoji: string): void
  }>()

  const search = ref('')
  const historyGroupEl = templateRef<HTMLElement>('historyGroup')
  const emojiGroupEls = templateRef<HTMLElement[]>('groups', [])
  const groupEls = computed(() =>
    historyGroupEl.value
      ? [historyGroupEl.value, ...emojiGroupEls.value]
      : emojiGroupEls.value
  )
  const headerEl = templateRef<HTMLElement>('header')
  const scrollContainerEl = templateRef('scrollContainer')
  const searchResults = computed(() =>
    Object.entries(emojilib)
      .filter(([, keywords]) =>
        keywords.some(keyword =>
          keyword.replaceAll('_', ' ').startsWith(search.value)
        )
      )
      .map(
        ([emoji, keywords]) =>
          [emoji, keywords[0].replaceAll('_', ' ')] as const
      )
  )
  const { y: scrollY } = useScroll(scrollContainerEl)

  const history = useLocalStorage<[string, string][]>('emoji-history', [])
  const { height: headerSize } = useElementSize(
    headerEl,
    { width: 0, height: 0 },
    {
      box: 'border-box'
    }
  )
  const currentGroup = computed(() => {
    const group = groupEls.value.find(group => {
      return (
        scrollY.value + headerEl.value.offsetHeight >= group.offsetTop &&
        scrollY.value + headerEl.value.offsetHeight < group.offsetTop + group.offsetHeight
      )
    })?.id
    return group
  })

  function pickEmoji(emoji: string, name: string) {
    emit('select', emoji)
    const index = history.value.findIndex(([h]) => h === emoji)
    if (index !== -1) {
      history.value.splice(index, 1)
    }
    if (history.value.length >= 36) {
      history.value.splice(36)
    }
    history.value.unshift([emoji, name])
  }

  async function scrollToSection(sectionId: string) {
    search.value = ''
    await nextTick()
    const element = document.getElementById(sectionId)
    if (element) {
      scrollContainerEl.value.scrollTo({
        top: element.offsetTop - headerSize.value
      })
    }
  }
</script>

<template>
  <MaterialCard variant="elevated" class="emoji-picker">
    <div ref="header" class="emoji-picker__header">
      <div class="emoji-picker__categories">
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'history'"
          class="emoji-picker__category_button"
          @click="scrollToSection('history')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:history-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'smileys_emotion'"
          class="emoji-picker__category_button"
          @click="scrollToSection('smileys_emotion')"
        >
          <Icon scroll-y-valuez-e="20" name="material-symbols:mood-rounded" />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'people_body'"
          class="emoji-picker__category_button"
          @click="scrollToSection('people_body')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-people-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'animals_nature'"
          class="emoji-picker__category_button"
          @click="scrollToSection('animals_nature')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-nature-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'food_drink'"
          class="emoji-picker__category_button"
          @click="scrollToSection('food_drink')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-food-beverage-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'travel_places'"
          class="emoji-picker__category_button"
          @click="scrollToSection('travel_places')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-transportation-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'activities'"
          class="emoji-picker__category_button"
          @click="scrollToSection('activities')"
        >
          <Icon scroll-y-valuez-e="20" name="material-symbols:emoji-events" />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'objects'"
          class="emoji-picker__category_button"
          @click="scrollToSection('objects')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-objects-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'symbols'"
          class="emoji-picker__category_button"
          @click="scrollToSection('symbols')"
        >
          <Icon
            scroll-y-valuez-e="20"
            name="material-symbols:emoji-symbols-rounded"
          />
        </button>
        <button
          v-ripple="{ color: 'var(--color)' }"
          :data-active="currentGroup === 'flags'"
          class="emoji-picker__category_button"
          @click="scrollToSection('flags')"
        >
          <Icon scroll-y-valuez-e="20" name="material-symbols:flag-rounded" />
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
          v-for="[emoji, name] in searchResults"
          :key="emoji"
          :title="name"
          class="emoji-picker__emoji headline-sm"
          @click="pickEmoji(emoji, name)"
        >
          {{ emoji }}
        </button>
      </div>
      <div v-show="!search">
        <div id="history" ref="historyGroup" class="emoji-picker__grid">
          <span class="body-sm emoji-picker__group-label">Recent</span>
          <button
            v-for="[emoji, name] in history"
            :key="emoji"
            :title="name"
            class="emoji-picker__emoji headline-sm"
            @click="pickEmoji(emoji, name)"
          >
            {{ emoji }}
          </button>
        </div>
        <div
          v-for="group in emojiGroups"
          :id="group.slug"
          ref="groups"
          :key="group.slug"
        >
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
              @click="pickEmoji(emoji.emoji, emoji.name)"
            >
              {{ emoji.emoji }}
            </button>
          </div>
        </div>
      </div>
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
    padding-bottom: 0.75rem;
    display: flex;
    align-items: center;
  }
  .emoji-picker__category_button {
    height: 2rem;
    width: 2rem;
    border-radius: var(--md-sys-shape-corner-full);
    display: grid;
    place-items: center;
    color: var(--color);
    --color: var(--md-sys-color-on-surface-variant);
    &[data-active='true'] {
      background-color: var(--md-sys-color-primary-container);
      --color: var(--md-sys-color-on-primary-container);
    }
  }
  .emoji-picker__grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    &:first-child {
      padding-top: 0;
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
