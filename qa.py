import os, re, sys

# Works locally and on GitHub Actions
folder = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(folder, 'index.html')

with open(path) as f:
    html = f.read()

errors = []
page_ids = re.findall(r'<div[^>]+id="(pg\d+)"', html)
toc_targets = re.findall(r"tocJump\('(pg\d+)'\)", html)
for t in toc_targets:
    if t not in page_ids:
        errors.append(f"TOC target {t} has no matching page ID")
img_srcs = re.findall(r'src="(page_[^"]+)"', html)
for src in img_srcs:
    if not os.path.exists(os.path.join(folder, src)):
        errors.append(f"Missing image: {src}")
audio_srcs = list(set(re.findall(r'Audio\("([^"]+\.mp3)"\)', html) + re.findall(r"Audio\('([^']+\.mp3)'\)", html)))
for src in audio_srcs:
    if not os.path.exists(os.path.join(folder, src)):
        errors.append(f"Missing audio: {src}")
if html.count('class="void-prompt"') > 1:
    errors.append("Duplicate void-prompt")
if 'enterBook' not in html:
    errors.append("Enter button missing")
if 'id="toc-overlay"' not in html:
    errors.append("TOC overlay missing")
if 'id="book"' not in html:
    errors.append("Book element missing")
if 'hero.mp3' not in html:
    errors.append("Hero audio missing")
print(f"Pages: {len(page_ids)} | TOC: {len(toc_targets)} | Images: {len(img_srcs)} | Audio: {len(audio_srcs)}")
if errors:
    print("ERRORS - DO NOT PUSH:")
    for e in errors: print(f"  - {e}")
    sys.exit(1)
else:
    print("ALL CHECKS PASSED - safe to push")
    sys.exit(0)
