const { reverseString, isPalindrome } = require("../src/stringUtils");

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

  describe("isPalindrome", () => {
    test("Restituisce true per un semplice palindromo minuscolo", () => {
      expect(isPalindrome("madam")).toBe(true);
    });

    test("Restituisce true per un palindromo con maiuscole/minuscole miste", () => {
      expect(isPalindrome("Madam")).toBe(true);
    });

    test("Restituisce true per un palindromo con spazi", () => {
      expect(isPalindrome("race car")).toBe(true);
    });

    test("Restituisce false per un palindromo complesso con punteggiatura", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(false);
    });

    test("Restituisce true per un palindromo complesso che considera solo spazi", () => {
      expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    });

    test("Restituisce false per una stringa non palindroma", () => {
      expect(isPalindrome("hello")).toBe(false);
    });

    test("Restituisce true per una stringa vuota", () => {
      expect(isPalindrome("")).toBe(true);
    });

    test("Restituisce true per una stringa di un singolo carattere", () => {
      expect(isPalindrome("a")).toBe(true);
    });
  });
});
