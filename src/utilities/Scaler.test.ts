import { Scaler } from "./Scaler";

test("Scale to the current size", () => {
    const scaler = new Scaler(30, 40, 100, 300);
    const result = scaler.scale({ width: 100, height: 300 });
    expect(result.mainScale).toBe(1);
    expect(result.xValue).toBe(30);
    expect(result.yValue).toBe(40);
});

test("Double the scaling", () => {
    const scaler = new Scaler(10, 20, 100, 300);
    const result = scaler.scale({ width: 200, height: 600 });
    expect(result.mainScale).toBe(2);
    expect(result.xValue).toBe(20);
    expect(result.yValue).toBe(40);
});

test("Half the scaling", () => {
    const scaler = new Scaler(5, 10, 200, 400);
    const result = scaler.scale({ width: 100, height: 200 });
    expect(result.mainScale).toBe(0.5);
    expect(result.xValue).toBe(2.5);
    expect(result.yValue).toBe(5);
});

test("Double the X", () => {
    const scaler = new Scaler(10, 20, 100, 300);
    const result = scaler.scale({ width: 200, height: 300 });
    expect(result.mainScale).toBe(1);
    expect(result.xValue).toBe(10);
    expect(result.yValue).toBe(20);
});

test("Double the Y", () => {
    const scaler = new Scaler(10, 20, 100, 300);
    const result = scaler.scale({ width: 100, height: 600 });
    expect(result.mainScale).toBe(1);
    expect(result.xValue).toBe(10);
    expect(result.yValue).toBe(20);
});
