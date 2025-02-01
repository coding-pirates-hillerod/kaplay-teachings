# kaplay-teachings

Dette repo forsøger at forklare, hvordan man kommer i gang med at bygge spil med KAPLAY.

## Hvad er 'KAPLAY'?

KAPLAY er et JavaScript og TypeScript bibliotek, som gør det nemt at lave spil i browseren.

Læs om KAPLAY her: https://kaplayjs.com/

## Hvordan kommer man i gang med 'KAPLAY'?
Den nemmeste måde man kan komme i gang med at lave spil i KAPLAY er at have Node.js installeret, og derigennem gøre brug af et CLI (dvs. et 'command line interface'), som automatisk sætter et KAPLAY projekt op for en.

Download derfor først Node.js via:
- [Node.js](https://nodejs.org/en)

### Skab et KAPLAY projekt
Når man har fået Node.js installeret, så kan man blot fra kommandolinjen/terminalen kører følgende kommand, hvilket vil skabe et nyt KAPLAY projekt i en ny folder med det navn man angiver (her er navnet 'mygame' valgt):

```bash
npx create-kaplay mygame
```

### Kør KAPLAY projektet
Efter at ens projekt er skabt, så kan man blot bruge følgende kommandoer til at starte og se ens spil i browseren, da sidste kommando vil give link, hvorfra man kan se ens spil:

```bash
cd mygame
npm run dev
```

