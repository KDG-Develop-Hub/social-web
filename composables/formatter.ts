import { formatDistanceToNow } from "date-fns"
import { ja } from "date-fns/locale"

export function initialName(name: string) {
    return name.substring(0, 2)
}

export const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeStyle: "short"
})

export function formatDistanceFromNow(dateTime: Date): string {
    const distance = formatDistanceToNow(dateTime, {
        locale: ja
    })
    return `${distance}前`
}