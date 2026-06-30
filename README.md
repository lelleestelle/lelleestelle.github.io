# lelleestelle.github.io

Estelles personliga skrivsajt — prosa, poesi och artiklar.
Byggd med [Jekyll](https://jekyllrb.com) och publicerad via GitHub Pages på
**https://lelleestelle.github.io**.

## Lägga till en text
Skapa en Markdown-fil i `_skrivande/`, `_vandrande/` eller `_projekt/`
och pusha till `main` — sajten byggs om automatiskt.
Se [`CLAUDE.md`](CLAUDE.md) för mallar.
Enklast: be Claude *"lägg till den här dikten/artikeln/novellen"*.

## Förhandsvisa lokalt (valfritt)
```bash
bundle install
bundle exec jekyll serve
```
Öppna sedan http://localhost:4000.

## Struktur
```
_config.yml          inställningar och sektioner
_layouts/            default, list, piece
_skrivande/ _vandrande/ _projekt/   texterna (en .md-fil per text)
assets/css/style.css  utseendet (ljust beige papper + urklippsrubriker, Cinzel-brödtext)
assets/js/cutout.js   rubrikerna som magasinsurklipp
index.html           startsida
skrivande/pa-vandrande-fot/projekt.html   sektionssidor
om.md                om-sidan
```
