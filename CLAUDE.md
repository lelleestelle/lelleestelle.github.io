# Estelle — personlig skrivsajt

Jekyll-sajt på GitHub Pages. Publiceras på **https://lelleestelle.github.io**.
Författarnamn som visas: **Estelle**. Gränssnittet är på svenska. Känslan är **varm & litterär**.

## Så här lägger Claude till en ny text

Varje text är **en Markdown-fil** i rätt mapp. När filen pushas till `main`
bygger GitHub Pages om sajten automatiskt (tar ~1 min). Inga byggsteg behövs lokalt.

| Typ | Mapp | Visas under |
|-----|------|-------------|
| Texter, tankar, dikter | `_skrivande/` | Skrivande (`/skrivande/`) |
| Noveller / berättelser | `_berattelser/` | Berättelser (`/berattelser/`) |
| Resor / vandringar (text + foto) | `_vandrande/` | På vandrande fot (`/pa-vandrande-fot/`) |
| Projekt | `_projekt/` | Projekt (`/projekt/`) |

Filnamn: gemener, bindestreck, utan å/ä/ö i själva filnamnet
(t.ex. `_skrivande/host-i-staden.md`). Texten i filen behåller förstås å/ä/ö.

Den stora rubriken på sidan ("Berättelser av en kid") och författarnamnet
("Estelle") sätts i `_config.yml` (`title`, `author`, `tagline`).

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

## Foton och film

Bilder läggs i `assets/img/` (gärna en undermapp per inlägg, t.ex.
`assets/img/host-2026/`). JPEG/PNG, helst under ~1–2 MB per bild.

**Bild i en text** (prosa/artikel) — vanlig Markdown, eller `<figure>` med bildtext:

```markdown
![Beskrivande alt-text](/assets/img/host-2026/eken.jpg)

<figure>
  <img src="/assets/img/host-2026/eken.jpg" alt="Eken i trädgården">
  <figcaption>Eken en tidig höstmorgon.</figcaption>
</figure>
```

**YouTube-film** (var som helst i en text) — använd include:

```liquid
{% include youtube.html id="dQw4w9WgXcQ" caption="Valfri bildtext" %}
```

`id` är delen efter `watch?v=` i YouTube-länken.

**Ett foto-galleri-inlägg** (t.ex. under "På vandrande fot") — sätt
`layout: gallery` och lista bilder/film i front matter:

```markdown
---
layout: gallery
title: "Vandring i fjällen"
date: 2026-06-30
summary: "Några bilder och en film."
cover: /assets/img/fjall-2026/topp.jpg   # miniatyr i listan
videos:
  - id: dQw4w9WgXcQ
    caption: "Utsikt från toppen"
images:
  - src: /assets/img/fjall-2026/topp.jpg
    caption: "På toppen"
  - src: /assets/img/fjall-2026/dalen.jpg
---

Valfri inledande text här.
```

Film hostas alltid på YouTube (vi laddar inte upp videofiler till repot).
Layouten `gallery` finns kvar och kan användas i vilken sektion som helst.

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
