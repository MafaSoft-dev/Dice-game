import { describe, test } from "@jest/globals";
import { Dice } from "./domain/Dice";
describe("DiceRoller class test", () => {
  test("DiceRoller should return values between 1 and 6", () => {
    const diceRoller = new Dice();
    const rollSpy = jest.spyOn(diceRoller, "roll");
    for (let i = 0; i < 100; i++) {
      const result = diceRoller.roll();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
    }
    expect(rollSpy).toHaveBeenCalledTimes(100);
  });
});
