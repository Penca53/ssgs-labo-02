# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Prerequisiti

Prima di iniziare, assicurati di avere installato sul tuo sistema:

* **Node.js**: versione `>=18.0.0`
* **npm**: versione `>=9.0.0` (solitamente fornito con Node.js)

Puoi verificare le versioni installate con i seguenti comandi:
```bash
node -v
npm -v
````

-----

## Installazione

1.  **Clona il repository:**

    ```bash
    git clone [https://github.com/Penca53/ssgs-labo-02.git](https://github.com/Penca53/ssgs-labo-02.git)
    cd ssgs-labo-02
    ```

2.  **Installa le dipendenze del progetto:**

    ```bash
    npm install
    ```

-----

## Avvio dell'Applicazione

Per eseguire l'applicazione, utilizza il seguente comando dalla directory principale del progetto:

```bash
npm run dev -- <numero_funzione> "<stringa_input>" [parametro_aggiuntivo]
```

Oppure, puoi eseguirla direttamente con Node.js:

```bash
node index.js <numero_funzione> "<stringa_input>" [parametro_aggiuntivo]
```

### Argomenti da Riga di Comando

  * `<numero_funzione>`: Un numero intero che specifica l'operazione da eseguire:
      * `1`: Inverti Stringa (es. `reverseString`)
      * `2`: Controlla Palindromo (es. `isPalindrome`)
      * `3`: Tronca Stringa (es. `truncateString`) - richiede `[lunghezza_massima]`
      * `4`: Conta Caratteri (es. `countCharacters`)
  * `"<stringa_input>"`: La stringa su cui eseguire l'operazione. **Ricorda di racchiuderla tra virgolette se contiene spazi.**
  * `[parametro_aggiuntivo]`: Un parametro aggiuntivo richiesto da alcune funzioni.
      * Per la funzione `Tronca Stringa (3)`, questo è `lunghezza_massima` (un numero intero che indica la lunghezza massima desiderata per la stringa).

### Esempi di Utilizzo

1.  **Invertire una stringa:**

    ```bash
    npm run dev -- 1 "hello world"
    ```

    Output atteso:

    ```
    Stringa invertita: "dlrow olleh"
    ```

2.  **Controllare se una stringa è palindroma:**

    ```bash
    npm run dev -- 2 "i topi non avevano nipoti"
    ```

    Output atteso:

    ```
    La stringa "i topi non avevano nipoti" è palindroma? true
    ```

3.  **Troncare una stringa (massimo 5 caratteri):**

    ```bash
    npm run dev -- 3 "Questa è una stringa lunga" 5
    ```

    Output atteso:

    ```
    Stringa troncata (max 5): "Quest..."
    ```

4.  **Contare i caratteri di una stringa:**

    ```bash
    npm run dev -- 4 "banana"
    ```

    Output atteso:

    ```
    Conteggio caratteri per "banana": { b: 1, a: 3, n: 2 }
    ```

Se gli argomenti non sono forniti correttamente, l'applicazione mostrerà un messaggio di aiuto.

-----

## Esecuzione dei Test

Questo progetto utilizza [Jest](https://jestjs.io/) come framework di testing per verificare la correttezza delle funzioni di utilità per le stringhe. 
Il progetto mira al **100%** di test code-coverage.

### Eseguire i Test

Per eseguire tutti i test, eseguire il seguente comando dalla directory principale del progetto:

```bash
npm test
```

Jest cercherà automaticamente i file di test e li eseguirà. L'output mostrerà quali test sono passati e quali sono falliti, insieme a eventuali dettagli sugli errori e statistiche sulla code-coverage.

### Struttura dei Test

I file di test per questo progetto (ad esempio, `stringUtils.test.js`) si trovano in una cartella denominata `test` nella directory principale del progetto. Ogni file di test contiene una serie di `describe` e `test` (o `it`) blocchi che definiscono suite di test e casi di test individuali per ciascuna funzione.

Ad esempio, i test per `src/stringUtils.js` si trovano in `test/stringUtils.test.js`.

-----