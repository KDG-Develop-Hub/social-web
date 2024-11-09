<!-- /admin/users -->
<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <h2 class="headline-md">ユーザー</h2>
    <div class="table">
      <table>
        <thead>
          <tr class="table-head">
            <th>名前</th>
            <th>メールアドレス</th>
            <th>役割</th>
            <th>編集</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in Array(30)" :key="i" class="table-row">
            <td>山田太郎</td>
            <td>hi@eee.com</td>
            <td>管理者</td>
            <td>
              <NuxtLink to="/admin/users/1">編集</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .table {
    border: 1px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-md);
    height: 100%;
    position: relative;
    overflow: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .table-row {
    height: 4rem;
    background-color: var(--md-sys-color-surface);
    &:nth-child(even) {
      background-color: var(--md-sys-color-surface-container-high);
    }
  }

  .table-head {
    height: 2.75rem;
    outline: 1px solid var(--md-sys-color-outline);
    background-color: var(--md-sys-color-secondary-container);
  }

  thead {
    position: sticky;
    top: 0;
    color: var(--md-sys-color-on-secondary-container);
  }

  th,
  td {
    padding: 0 1rem;
    text-align: left;
  }
</style>
