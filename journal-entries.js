// From the Dream Journal — entry data
// To add a new entry: copy an object below, give it a unique id, fill in the fields, add to the array.
// No other file needs to change. Run qa.py before deploying.
//
// Fields:
//   id          unique slug, lowercase, hyphens only, no spaces
//   type        one of: "Essay", "Short story", "Art", "Fragment"  (extend FILTER_TYPES below if you add a new type)
//   title       entry title
//   subtitle    italic byline line under the title (can be empty string "")
//   source      short tag shown on the card, e.g. "Substack", "Unpublished", "Sketchbook"
//   date        "YYYY-MM" for sorting/display, does not have to be exact
//   displayLabel  optional human-set label like "Entry 02" — set once, never auto-generated, leave "" if unused
//   excerpt     1-2 sentence plain-text teaser shown on the card (no HTML)
//   body        full HTML string for the detail/reading view (Georgia serif styling applied automatically)

const FILTER_TYPES = ["Essay", "Short story", "Art", "Fragment",
  {
    id: "history",
    type: "Art",
    title: "History",
    subtitle: "The story of destruction and the rise of nature \u2014 told again.",
    source: "YouTube",
    date: "2026-07",
    displayLabel: "11-703",
    excerpt: "Similar stories for a thousand years have been told. At the end of the story, there\u2019s always a brand new day. Nash distills the oldest human loop to three minutes of music.",
    body: "<p style=\"margin:0 0 1.05em;font-style:italic;font-size:1.1em;color:rgba(245,168,0,0.85);\">The end is coming. It has always been coming. That is the oldest story humanity tells itself \u2014 and Roni Nash has distilled it to its purest form: a prayer, a warning, and a revelation compressed into three minutes of music.</p><p style=\"margin:0 0 1.05em;\"><em>History</em> opens in the register of dread. <em style=\"color:rgba(245,168,0,0.78);\">How long, how long will it last.</em> The question is ancient \u2014 every generation has asked it, every prophet has answered it, every era has believed it was the last. Nash doesn\u2019t argue with the prophecy. He lets it stand. Lord have mercy. Too late. The world\u2019s gonna end. The full weight of a thousand years of apocalyptic testimony lands without irony.</p><a class=\"yt-poster\" data-ytid=\"NtYy8V78CZU\" href=\"https://www.youtube.com/watch?v=NtYy8V78CZU\" target=\"_blank\" style=\"display:block;position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:4px;margin:1.8em 0;background:#000;cursor:pointer;text-decoration:none;\"><img src=\"https://img.youtube.com/vi/NtYy8V78CZU/hqdefault.jpg\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;border:0;\" alt=\"History music video\"/><div style=\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;background:rgba(255,0,0,0.85);border-radius:50%;display:flex;align-items:center;justify-content:center;\"><div style=\"width:0;height:0;border-top:18px solid transparent;border-bottom:18px solid transparent;border-left:28px solid #fff;margin-left:6px;\"></div></div></a><div style=\"margin:1.5em 0;padding:0.9em 1.1em;border-left:2px solid rgba(245,168,0,0.6);background:rgba(245,168,0,0.05);font-style:italic;font-size:1.15em;line-height:1.4;color:#f3ead2;\">\u201cFact of the matter, history will always unfold.\u201d</div><p style=\"margin:0 0 1.05em;\">Then the pivot \u2014 and it is everything. <em style=\"color:rgba(245,168,0,0.78);\">Similar stories for a thousand years have been told.</em> That line does not comfort. It <em>reframes</em>. The apocalypse is not an exception. It is the recurring structure. Every civilization that believed it was the last one was wrong \u2014 not because the end didn\u2019t come for them, but because something always rose from the ash. The piper has to be paid. That is not a punishment. That is the accounting that makes the next chapter possible.</p><p style=\"margin:0 0 1.05em;font-size:1.15em;color:rgba(245,168,0,0.92);letter-spacing:0.02em;\"><em>At the end of the story, there\u2019s always a brand new day.</em></p><p style=\"margin:0 0 1.4em;\">This is not optimism. It is the record. Nash isn\u2019t promising anything \u2014 he is observing something. The same way a geologist reads strata, he reads time: layer after layer of collapse and continuation. Destruction is not the end of the pattern. It is part of the pattern. Nature does not mourn the old world. It begins the new one. <em>History</em> is that truth set to music \u2014 the most repetitive, the most certain, the most quietly radical thing you can say to a civilization convinced it is the last.</p><div style=\"margin-top:1.6em;text-align:right;font-style:italic;font-size:0.92em;color:rgba(245,168,0,0.72);\">\u2014 from the Ecliptia\u2019s Dawn Universe</div>"
  }

];
