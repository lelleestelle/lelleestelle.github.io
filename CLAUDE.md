# Estelle — personlig skrivsajt

Jekyll-sajt på GitHub Pages. Publiceras på **https://lelleestelle.github.io**.
Författarnamn som visas: **Estelle**. Gränssnittet är på svenska. Känslan är **varm & litterär**.

## Så här lägger Claude till en ny text

Varje text är **en Markdown-fil** i rätt mapp. När filen pushas till `main`
bygger GitHub Pages om sajten automatiskt (tar ~1 min). Inga byggsteg behövs lokalt.

| Typ | Mapp | Visas under |
|-----|------|-------------|
| Prosa / noveller | `_prose/` | Prosa (`/prosa/`) |
| Dikter | `_poetry/` | Poesi (`/poesi/`) |
| Artiklar / essäer | `_articles/` | Artiklar (`/artiklar/`) |

Filnamn: gemener, bindestreck, utan å/ä/ö i själva filnamnet
(t.ex. `_poetry/host-i-staden.md`). Texten i filen behåller förstås å/ä/ö.

### Mall — prosa eller artikel

```markdown
---
title: "Textens titel"
date: 2026-06-30          # valfritt; styr ordning (nyast överst)
summary: "En rad som lockar till läsning, syns i listan."
signature: "Pseudonym: …" # valfritt; visas i kursiv längst ner
---

Första stycket. Första bokstaven blir automatiskt en anfang (drop cap).

Nästa stycke. Lämna en tom rad mellan stycken.
```

`layout` och `genre` sätts automatiskt per mapp — behöver inte anges.

### Mall — dikt (radbrytningar bevaras)

Dikter behöver bevarade radbrytningar. Lägg verserna i ett `poem`-block:

```markdown
---
title: "Diktens titel"
date: 2026-06-30
summary: "Valfri rad till listan."
---

<div class="poem" markdown="0">
Första raden
andra raden

ny strof efter tom rad
sista raden
</div>
```

## Viktigt om författarens text

- **Ändra aldrig brödtexten** i en inskickad text utan att fråga. Bevara ordval,
  stavning och interpunktion exakt. Justera bara layout/metadata.

## Publicera ändringar

```bash
git add -A
git commit -m "Lägg till …"
git push          # origin = git@github.com-lelleestelle:lelleestelle/lelleestelle.github.io.git
```

> Git pushar via SSH-aliaset `github.com-lelleestelle` (lelleestelle-kontot,
> nyckel `~/.ssh/id_ed25519_lelleestelle`). Använd inte `git@github.com:` direkt —
> det går mot fel konto (KalindiFonda).
