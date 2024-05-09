import {describe, expect, test} from "vitest";
import {differenceInMinutes} from "date-fns";

describe("formatDistanceFromNow", async () => {
    test("exists", async () => {
        expect(() => formatDistanceFromNow).to.exist
    })
    test("returns formatted string", async () => {
        const dateTime = differenceInMinutes(new Date(), 1)
        const result = formatDistanceFromNow(dateTime)
        expect(result).to.match(/前$/)
    })
    test("exceptional case", async () => {
        const now = new Date()
        const result = formatDistanceFromNow(now)
        expect(result).to.equal("たった今")
    })
})