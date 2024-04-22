<script setup lang="ts">
import type {Tweet} from "~/types/tweet";

const tweets: Tweet[] = [
  {user: "imeankenshin", content: "Hello world! This is my tweet you know?", createdAt: new Date()}
]
import {dateTimeFormatter, formatDateTime} from "~/composables/formatter";
</script>

<template>
  <div>
    <div v-for="tweet in tweets" class="tweet">
      <Avatar name="hi" src="/img/aa.jpg" />
      <div class="body">
        <header class="v-stack">
          <strong>{{ tweet.user }}</strong>
          <time :datetime="dateTimeFormatter.format(tweet.createdAt)">{{ formatDateTime(tweet.createdAt) }}</time>
        </header>
        <p>{{tweet.content}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet {
  padding: 1rem;
  border: 1px solid var(--pallete-color-neutral70);
  border-radius: 1rem;
  display: flex;
  gap: 0.75rem;
}
.body {
  width: 100%;
}
header {
  gap: 0.5rem
}
</style>