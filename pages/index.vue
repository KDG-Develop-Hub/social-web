<script setup lang="ts">
  import { collection, limit, orderBy, query } from 'firebase/firestore'

  const db = useFirestore()
  const { data, pending } = useCollection<Post>(
    query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(30)),
    {
      ssrKey: `latest-posts`
    }
  )
</script>

<template>
  <Transition>
    <div v-if="pending" class="loading-screen v-stack">
      <MaterialCircularProgressIndicator indeterminate />
    </div>
    <div v-else class="home">
      <MaterialTopAppBar> ホーム </MaterialTopAppBar>
      <div class="post-list">
        <OrgTweet v-for="post in data" :key="post.id" :post />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  .loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .home {
    width: 100%;
    gap: 1rem;
    &.v-enter-active,
    &.v-leave-active {
      transition:
        opacity var(--md-sys-motion-duration-long4)
          var(--md-sys-motion-easing-decelerated),
        translate var(--md-sys-motion-duration-long4)
          var(--md-sys-motion-easing-decelerated);
    }
    &.v-enter-from,
    &.v-leave-to {
      opacity: 0;
      translate: 0 1rem;
    }
  }
</style>
