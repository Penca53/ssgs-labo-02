const {
  reverseString,
  isPalindrome,
  truncateString,
  countCharacters,
} = require("../src/stringUtils");

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

  describe("truncateString", () => {
    test("Tronca una stringa più lunga della lunghezza massima", () => {
      expect(truncateString("Hello world", 5)).toBe("Hello...");
    });

    test("Non tronca una stringa più corta o uguale alla lunghezza massima", () => {
      expect(truncateString("Hi", 5)).toBe("Hi");
      expect(truncateString("Hello", 5)).toBe("Hello");
    });

    test("Gestisce una lunghezza massima di 0", () => {
      expect(truncateString("Hello", 0)).toBe("...");
    });

    test("Restituisce una stringa vuota se l'input è una stringa vuota", () => {
      expect(truncateString("", 5)).toBe("");
    });

    test("Tronca correttamente quando maxLength è uguale alla lunghezza della stringa", () => {
      expect(truncateString("test", 4)).toBe("test");
    });

    test('Aggiunge "..." solo se la stringa è effettivamente troncata', () => {
      expect(truncateString("abcde", 3)).toBe("abc...");
      expect(truncateString("abc", 3)).toBe("abc");
    });
  });

  describe("countCharacters", () => {
    test("Conta correttamente i caratteri in una stringa semplice", () => {
      expect(countCharacters("banana")).toEqual({ b: 1, a: 3, n: 2 });
    });

    test("Restituisce un oggetto vuoto per una stringa vuota", () => {
      expect(countCharacters("")).toEqual({});
    });

    test("Conta correttamente i caratteri in una stringa con spazi", () => {
      expect(countCharacters("hello world")).toEqual({
        h: 1,
        e: 1,
        l: 3,
        o: 2,
        " ": 1,
        w: 1,
        r: 1,
        d: 1,
      });
    });

    test("Distingue tra maiuscole e minuscole", () => {
      expect(countCharacters("AaBbA")).toEqual({ A: 2, a: 1, B: 1, b: 1 });
    });

    test("Conta numeri e simboli", () => {
      expect(countCharacters("a1! a1!")).toEqual({
        a: 2,
        1: 2,
        "!": 2,
        " ": 1,
      });
    });
  });
});
