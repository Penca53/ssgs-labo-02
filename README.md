# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

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

    *(Attualmente, questo progetto non ha dipendenze esterne elencate in `package.json`, ma questo comando è una buona pratica per progetti Node.js.)*

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
