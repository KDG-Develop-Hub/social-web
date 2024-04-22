import { DateTime } from "luxon"

export function initialName(name: string) {
    return name.substring(0,2)
}

export const dateTimeFormatter = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "long",
    timeStyle: "short"
})

export function formatDateTime(dateTime: Date): string {
    // dateTimeが現在から１分後までなら、"たった今"を返す
    if (dateTime.getMinutes() >= new Date().getMinutes()) {
        return "たった今"
    }
    if (dateTime.getMinutes() - new Date().getMinutes() < 60) {
        return `${dateTime.getMinutes() - new Date().getMinutes()}分前`
    }
    if (dateTime.getHours() - new Date().getHours() < 25) {
        return `${dateTime.getHours() - new Date().getHours()}時間前`
    }
    if (dateTime.getDay() - new Date().getDay() < 14) {
        return `${dateTime.getHours() - new Date().getHours()}日前`
    }
    return dateTime.toTimeString()
}