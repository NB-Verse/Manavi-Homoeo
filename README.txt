Manasvi Homoeo & Wellness Studio website (aalok.co.in)
======================================================

WHAT IS IN THIS FOLDER
- index.html      The whole website in one file (design and features are inside it)
- privacy.html    Privacy policy
- 404.html        "Page not found" page (.htaccess tells GoDaddy hosting to use it)
- blog/           Six health notes as separate pages, so Google can find them
- images/         Share image used when the link is posted on WhatsApp or Facebook
- sitemap.xml, robots.txt   Help Google index the site

PHOTOS AND VIDEOS: all go in the "media" folder
- Read media/HOW-TO-ADD-MEDIA.txt. In short:
  doctor.jpg                       doctor's photo
  feedback1.mp4, feedback2.mp4...  patient video feedback      image1.jpg, image2.png... patient feedback photos
  clinic1.jpg...  achievement1.jpg...  packing1.jpg...  followup1.jpg...   gallery tabs (photos or .mp4)
  captions.txt                     captions                    youtube.txt   YouTube links for long videos
- The website builds the "Patient stories" row and the gallery from whatever is in the folder.
  Add or delete files, upload again, and the site updates. Empty sections stay hidden.
- Photos and videos show once the site is online (or when the whole folder is opened on a computer).

DIET AND LIFESTYLE GUIDE (section "Diet guide")
- 81 common conditions and deficiencies (PCOS, thyroid, diabetes, acidity, B12, D3, iron and more),
  each with: Eat more / Limit or avoid / Yoga and breathing / Naturopathy and daily habits, plus safety notes.
- Patients can search by condition or by food (for example "coffee" with "Foods to avoid"), filter by
  category, book about a condition, or share it on WhatsApp. Shared links open that entry directly.
- The text is inside index.html (search for "var GUIDE ="). Ask your web person to edit it, or send
  the changes and the site can be rebuilt.
- The note on taking homoeopathic medicine (15 minutes before and after, raw onion, raw garlic, coffee)
  appears in the guide, the Homoeopathy card and the FAQ.

LANGUAGES
- English, Marathi and Hindi. The selector is at the top right; the choice is remembered on the phone.
- Messages sent to the clinic (WhatsApp, email, Google Form) are always in English, so they are easy to read.

HOW APPOINTMENT REQUESTS ARRIVE
- Patients choose a day and time, enter their name and mobile number, tap "Review my request",
  then "Send on WhatsApp". WhatsApp opens with the full request addressed to +91 90671 97969.
  They can also send it by email or copy it.
- Optional Google Form (requests collected in a Google Sheet):
  1. In Google Forms, create a form with short-answer questions: Name, Mobile, Day, Time, Visit type, Reason, Email.
  2. Menu (three dots) -> "Get pre-filled link". Type exactly these words in the answers:
     NAME, PHONE, DAY, TIME, VISIT, REASON, EMAIL. Click "Get link" and copy it.
  3. Open index.html in a text editor, search for GOOGLE_FORM_PREFILL_URL, paste the link between the quotes, save.
  4. A "Submit through Google Form" button then appears after the review step, with all details filled in.
     The patient presses Submit on the Google page, and the answer lands in your form's responses.

SETTINGS (open index.html in a text editor and search for "EDIT THESE")
- OPEN_DAYS: clinic days (Monday to Saturday; Sunday closed). SESSIONS: 11 AM to 1 PM and 3 PM to 8 PM.
- OFFERS_ONLINE: true (online consultation shown).
- PHARMACY_HOURS: Monday to Saturday, 10 AM to 9:30 PM.
- REG_NO: add the council registration number when available.
- REVIEWS_URL: the clinic's listing link (Justdial now; switch to the Google review link later).
- TESTIMONIALS: real patient feedback, only with permission.
- CALENDAR_BOOKING_URL: optional Google Calendar appointment-schedule link.

PUBLISH (any ordinary web hosting works; nothing special is needed)
- GoDaddy web hosting: cPanel -> File Manager -> public_html -> upload everything in this folder
  (including the hidden .htaccess file and the blog and images folders). The domain aalok.co.in then shows the site.
- Free alternatives: Cloudflare Pages or GitHub Pages (upload the folder, then connect aalok.co.in in GoDaddy DNS).

AFTER PUBLISHING
- Open aalok.co.in on a phone and send one test request on WhatsApp.
- Google Search Console: add aalok.co.in and submit https://aalok.co.in/sitemap.xml
- Google Business Profile: claim the clinic with exactly the same name, address, phone and hours.

STILL TO REVIEW
- The six health notes are general drafts. The doctor must review them before publishing.
- Have a Marathi speaker and a Hindi speaker read the text once.
- The doctor should read the diet guide once and adjust anything she advises differently.
- Read privacy.html and confirm it matches how the clinic handles messages.

CONTENT RULES THE SITE FOLLOWS
- No invented history, experience, awards, ratings, testimonials or success rates.
- No cure guarantees or "no side effects" claims. Keep it that way when editing.
