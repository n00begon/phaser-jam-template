import { Wrap } from "./Wrap";

test("currentPosition", () => {
    expect(Wrap.screenWrap(10, 100)).toBe(10);
});

test("offLeft", () => {
    expect(Wrap.screenWrap(-22, 100)).toBe(78);
});

test("offRight", () => {
    expect(Wrap.screenWrap(108, 100)).toBe(8);
});
