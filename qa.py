import os, re

path = "/Users/crn/Downloads/book_of_dreams_CLEAN/index.html"
folder = "/Users/crn/Downloads/book_of_dreams_CLEAN"

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
print(f"Pages: {len(page_ids)} | TOC: {len(toc_targets)} | Images: {len(img_srcs)} | Audio: {len(audio_srcs)}")
if errors:
    print("ERRORS - DO NOT PUSH:")
    for e in errors: print(f"  - {e}")
    exit(1)
else:
    print("ALL CHECKS PASSED - safe to push")
    exit(0)
