const { reverseString } = require("../src/stringUtils");

describe("stringUtils", () => {
  describe("reverseString", () => {
    test("Inverte una stringa semplice", () => {
      expect(reverseString("hello")).toBe("olleh");
    });

    test("Inverte una stringa con spazi", () => {
      expect(reverseString("hello world")).toBe("dlrow olleh");
    });

    test("Restituisce una stringa vuota se l'input è una stringa vuota", () => {
      expect(reverseString("")).toBe("");
    });

    test("Inverte una stringa con numeri e simboli", () => {
      expect(reverseString("123!abc")).toBe("cba!321");
    });

    test("Inverte correttamente un palindromo", () => {
      expect(reverseString("madam")).toBe("madam");
    });
  });
});
