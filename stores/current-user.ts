import type { User } from '~/types/user'

export const useCurrentUserStore = defineStore('current-user', {
  state: () =>
    ({
      name: 'imeankenshin'
    }) as Pick<User, 'name'>
})
