<script setup lang="ts">
  import { collection, limit, orderBy, query } from 'firebase/firestore'
  const { params } = useRoute()
  const db = useFirestore()
  const { data: posts, pending } = useCollection<Post>(
    //TODO: 対応するユーザーの投稿のみ表示させる。インデックスが設定されてないため現在はできない。
    query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(30)),
    {
      ssrKey: `posts-${params.name}`
    }
  )
</script>

<template>
  <Transition>
    <div v-if="pending" class="loading-screen v-stack">
      <MaterialCircularProgressIndicator indeterminate />
    </div>
    <div v-else class="articles v-stack">
      <OrgTweet v-for="post in posts" :key="post.id" :post />
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
  .articles {
    width: 100%;
    gap: 1rem;
    padding: 1.5rem 0;
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
