# Book of Dreams — Claude Code Context

## Project
- Live site: https://roninashmusic-ai.github.io/book-of-dreams/
- Repo: roninashmusic-ai/book-of-dreams (branch: main)
- Local: ~/Documents/book_of_dreams_CLEAN/
- Single file: index.html — entire site is one HTML file
- GitHub token: YOUR_GITHUB_TOKEN_HERE (expires Jul 19 2026)

## Session Start Protocol
1. Pull live file: curl -s https://raw.githubusercontent.com/roninashmusic-ai/book-of-dreams/main/index.html > /tmp/live.html
2. Note current commit: git log --oneline | head -5
3. Ask for screenshot before any visual patch
4. Grep exact string before writing any patch

## Deploy Command
python3 ~/Documents/book_of_dreams_CLEAN/qa.py && cd ~/Documents/book_of_dreams_CLEAN && git add index.html && git commit -m 'message' && git push https://YOUR_GITHUB_TOKEN_HERE@github.com/roninashmusic-ai/book-of-dreams.git main

## User Flow
Signup Gate > Nebula Hero > Black Hole > Dreams Menu > Ecliptia TOC > Book

## Screen 3: Dreams Menu
- ID: dreams-overlay, z-index 99
- Portrait: welcome_2_dreams.jpg circular with aurora halos
- Title: Welcome to My Dreams / A Transmedia RoniVerse
- Quote: These pages hold the fragments, the visions, the music, the worlds I have built in the ether.
- Cards: Ecliptia Dawn LIVE, Dream Journal BUILDING, Dream Three SOON
- Functions: openDreams() closeDreams()

## Screen 4: Ecliptia TOC
- ID: toc-overlay
- Breadcrumb: Book of Dreams - Dream One
- Back arrow: closeTOCBackToDreams()
- Begin: tocJump pg5
- 14 TOC entries

## Screen 5: Book
- 45 pages in allPages array
- pg1 and pg3 excluded from navigation
- Arrow navigation, per-page audio, page counter

## Creative Identity
- Roni Nash he/him — artist author musician
- Book of Dreams = the RoniVerse
- Ecliptia Dawn = Dream One inside the RoniVerse
- RoniVerse replaces all Universe references
- Future artifacts live alongside Ecliptia not inside it

## Page Map
- pg5 — welcome_2_dreams.jpg portrait star field — first book page
- pg6 — page_6.png
- pg7 — page_7.gif
- pg8 — page_8.png — CH 1 Pg 4.mp3
- pg9 — page_9.png — CH 1 Pg 5.mp3
- pg10 — page_10.png
- pg11 — page_11.png — CH 1 Pg 7.mp3
- pg12 — page_12.png — CH 1 Pg 8.mp3
- pg13 — page_13.png — CH 1 Pg 9.mp3
- pg14 — page_14.gif — Chapter 1 TOC entry
- pg15 — page_15.png — CH 2 pg 11.mp3
- pg16 — page_16.png — CH 2 pg 12.mp3
- pg17 — page_17.png — CH 2 pg 13.mp3
- pg18 — page_18.gif — Chapter 2 TOC entry
- pg19 to pg24 — CH 3 audio
- pg25 — page_25.gif — Chapter 3 TOC entry
- pg26 to pg29 — CH 4 audio
- pg30 — page_30.gif — Chapter 4 TOC entry
- pg31 to pg37 — CH 5 audio
- pg36 — page_36.gif prem rath
- pg38 — page_38.png
- pg39 — YouTube embed — Ready 2 Love TOC entry
- pg40 — Lyrics TOC entry
- pg41 — page_41.png
- pg42 — Coming Soon Book 2 — Pg 38.mp3 — TOC entry
- pg43 — page_43.gif Book 2 animated
- pg44 — page_44.png plus page_44.gif overlay — Food for Thought TOC entry
- pg45 to pg46 — page_45 46.png
- pg47 — Final Note from Roni — real photo eyes open — TOC entry
- pg48 — Ronnash_logo1.mp4 video plus signup overlay — Stay Connected TOC entry
- pg49 — placeholder — From the Dream Journal — TO BE BUILT

## Audio Files Confirmed
CH 1 Pg 4.mp3, CH 1 Pg 5.mp3, CH 1 Pg 7.mp3, CH 1 Pg 8.mp3, CH 1 Pg 9.mp3
CH 2 pg 11.mp3, CH 2 pg 12.mp3, CH 2 pg 13.mp3
CH 3 pg 15.mp3, CH 3 pg 16.mp3, Ch 3 Pg 17.mp3, CH 3 pg 18.mp3, CH 3 pg 19.mp3, CH 3 pg 20.mp3
CH 4 pg 22.mp3, CH 4 pg 23.mp3, CH 4 pg 24.mp3, CH 4 pg 25.mp3
CH 5 pg 27.mp3, CH 5 pg 28.mp3, CH 5 pg 29.mp3, CH 5 pg 30.mp3, Ch 5 pg 31.mp3, CH 5 pg 33.mp3
Pg 38.mp3, hero.mp3, welcome.mp3
NOT IN REPO: Ecliptia Book 1 Overview.mp3, Enter_Sound.mp3 removed

## Technical Rules
- Always pull live file before patching
- Always grep exact string before writing patch
- Use cat > /tmp/script.py then python3 /tmp/script.py — never inline heredocs
- Patch failures: use line-based readlines() replacement
- Confirm PATCHED printed before deploying
- Single quotes in commit messages only
- File names case-sensitive on GitHub Pages Linux server
- Claude /tmp files do not exist on Mac
- If patch fails twice — restore from last good commit do not layer patches

## Restore Command
git checkout HASH -- index.html && git add index.html && git commit -m 'restore' && git push URL main

## Pending
- pg49 Dream Journal content build
- TOC eyebrow: Book of Dreams Dream One
- welcome.mp3 wired to pg5
- YouTube autoplay on pg39
- Mobile optimization
- Custom domain
- Streaming links

## Known Issues
- Hero audio hero.mp3 and entrance swoosh reliability unresolved
- Chrome autoplay gesture chain QA wrapper interception

## Assets
- Source files at assets/ folder — local only not deployed
- All deployed assets committed directly to repo
- No CDN — GitHub Pages serves everything
