PROJECT: Book of Dreams — Roni Nash
Live site: https://roninashmusic-ai.github.io/book-of-dreams/
Repo: roninashmusic-ai/book-of-dreams
Local repo: ~/Documents/book_of_dreams_CLEAN
GitHub token: TOKEN_IN_KEYCHAIN (expires Jul 19 2026 -- renew before expiry)
LAST SESSION: Jul 5 2026

Built pg49 From the Dream Journal -- grid/detail UI live
journal-entries.js created -- single source of truth for all Dream Journal entries
Coordinate-based #viewport click handler pattern established for 3D hit-testing workaround
YT overlay fixed -- querySelectorAll + coord loop pattern established
middot fix deployed
Live Dream Journal entries: Thread Without a Center (Essay 73-412), Fire I Cannot Remember (Essay 28-967), Logos Part 1 The Dream Begins (Art 54-821), History (Art 11-703)
Next priorities: YouTube autoplay pg39, welcome.mp3 pg5, token renewal before Jul 19


SESSION PROTOCOL -- run at the start of every session

Pull live file first -- always (direct to local repo, NEVER /tmp):

curl -s https://raw.githubusercontent.com/roninashmusic-ai/book-of-dreams/main/index.html > ~/Documents/book_of_dreams_CLEAN/index.html

Then cat CLAUDE.md to load session context.

Verify Pillow if any image/GIF work is planned:

python3 -c "from PIL import Image; print('ok')"

Before any visual/positioning patch -- Claude asks:
- What exactly should this element cover or replace?
- Send a screenshot of the current state first
- No code written until visual intent is fully understood

For CSS/positioning work -- build and preview locally before deploying. One deploy, not six.
Housekeeping (file moves, path changes, cleanup) happens at START or END of session only -- never mid-build.
Repo path is ~/Documents/book_of_dreams_CLEAN -- if any command uses a different path, stop and correct before running.


DEPLOY WORKFLOW -- always follow this exactly
Never use /tmp as intermediary for index.html -- stale /tmp files corrupt the local repo silently on cp. Always patch the local repo file directly.
Run all terminal commands one line at a time. No heredocs -- they hang. Use python3 << 'PYEOF' inline for patches with unicode or special characters. Single quotes in commit messages only. No special characters in commit messages.
Deploy command:
python3 ~/Documents/book_of_dreams_CLEAN/qa.py && cd ~/Documents/book_of_dreams_CLEAN && git add index.html && git commit -m 'message' && git push https://TOKEN_IN_KEYCHAIN@github.com/roninashmusic-ai/book-of-dreams.git main
When deploying journal-entries.js changes add it to git add: git add index.html journal-entries.js


TECHNICAL RULES

Always pull live file before patching, direct to local repo -- never /tmp.
Always grep exact string before writing patch.
Always run qa.py before every push.
Commit messages: single quotes, plain text, no special characters.
File names case-sensitive on GitHub Pages (Linux).
No heredocs -- use python3 << 'PYEOF' inline instead.
Patch failures usually mean local file already has the change -- grep first.
When string matching fails, use line-based replacement via readlines().
Multi-step patches: confirm each step printed PATCHED before deploying.
YT OVERLAY RULE: always use querySelectorAll('a.yt-poster') + coord loop -- never querySelector (grabs first in DOM, wrong entry fires). Diagnosis: check querySelectorAll('a.yt-poster').length in browser console -- if >1, querySelector is broken by design.
INTERACTIVE PAGES: 3D perspective context breaks all normal hit-testing. Use coordinate-based getBoundingClientRect() click handler on #viewport. See pg49 as reference. Every future interactive page must use this pattern.
Pillow must be installed for image/GIF work: pip3 install Pillow.
Sandbox vs Mac: files Claude creates in sandbox /tmp do not exist on your Mac.


SITE ARCHITECTURE
Full user flow: Signup Gate > Nebula > Black Hole > Cinematic TOC > Book
pg1/pg3 excluded from allPages nav. pg5 = first book page.
49 pages, arrow navigation, audio narration buttons per page, YouTube on pg39.
#dreams-overlay z-index 99 display:block by default -- dismissed via flow, never shows on fresh localhost load.


pg49 -- From the Dream Journal -- LIVE
Grid/detail UI driven by journal-entries.js. No index.html changes needed to add entries.
displayLabel uses STARDATE format (xx-xxx) -- random, non-sequential, cosmic. Human-set always.
Live entries: Thread Without a Center (Essay 73-412), Fire I Cannot Remember (Essay 28-967), Logos Part 1 The Dream Begins (Art 54-821), History (Art 11-703).
YT overlay: fixed-position div id=yt-overlay outside #viewport, z-index:9999. Video ID stored as data-ytid on a.yt-poster elements.


JOURNAL-ENTRIES.JS
Entry fields: id, type (Essay|Short story|Art|Fragment), title, subtitle, source, date (YYYY-MM), displayLabel (STARDATE xx-xxx), excerpt (plain text), body (HTML).
To add entry: append object to journalEntries array, save, qa.py, push. No other files change.


PENDING BUILD ITEMS
YouTube autoplay pg39, welcome.mp3 pg5, TOC eyebrow update, mobile optimization, custom domain, streaming links, token renewal Jul 19 2026.


ECLIPTIA'S DAWN UNIVERSE
11-book transmedia saga by Roni Nash. Book 1: Book of Dreams. Book 2: Wrath of Shadows. Living book -- new stories added ongoing under From the Dream Journal.