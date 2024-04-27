<script setup lang="ts">
import type { Tweet } from "~/types/tweet";
import {
  dateTimeFormatter,
  formatDistanceFromNow,
} from "~/composables/formatter";
import { add } from "date-fns";

const tweets: Tweet[] = Array.from({ length: 6 }, () => ({
  user: "imeankenshin",
  content: "Hello world! This is my tweet you know?",
  createdAt: add(new Date(), { minutes: -20 }),
}));
</script>

<template>
  <div class="articles v-stack">
    <article v-for="tweet in tweets" class="tweet">
      <Avatar :name="tweet.user" src="/img/aa.jpg" />
      <div class="body">
        <header class="h-stack">
          <strong>{{ tweet.user }}</strong>
          <time :datetime="dateTimeFormatter.format(tweet.createdAt)">{{
            formatDistanceFromNow(tweet.createdAt)
          }}</time>
        </header>
        <p>{{ tweet.content }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
.articles {
  width: 100%;
  gap: 1rem;
  padding: 1.5rem 0;
}
.tweet {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-outline-variant);
  border-radius: 0.75rem;
  display: flex;
  gap: 0.75rem;
}
.body {
  width: 100%;

  header {
    height: 1.5rem;

    time {
      font-size: 0.875rem;
    }
  }
}
</style>
