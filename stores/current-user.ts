import type {User} from "~/types/user";

export const useCurrentUserStore = defineStore('current-user', {
    state: () => ({
        userName: "imeankenshin",
    } as Pick<User,"userName">),
})