import { Hiker } from "../src/hiker";

describe("Hiker", () => {
    let hiker: Hiker;

    beforeEach(() => {
        hiker = new Hiker();
    });

    it('gives the answer to the ultimate question', () => {
        const answer = hiker.getAnswer();
        expect(answer).toEqual(42);
    });
});
