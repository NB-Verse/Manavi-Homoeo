Manasvi Homoeo & Wellness Studio website (aalok.co.in)
======================================================

WHAT IS IN THIS FOLDER
- index.html      The whole website in one file (design and features are inside it)
- privacy.html    Privacy policy
- 404.html        "Page not found" page (Netlify uses it automatically)
- blog/           Six health notes as separate pages, so Google can find them
- images/         Share image for WhatsApp/Facebook previews. Add the doctor's photo here.
- sitemap.xml, robots.txt   Help Google index the site

BEFORE PUBLISHING: PLEASE CONFIRM OR SUPPLY (nothing below has been invented on the site)
1. Opening days. The site shows Monday to Saturday, Sunday closed. Confirm, or change OPEN_DAYS in index.html
   (search "EDIT THESE") and the dayOfWeek lists in the structured data at the top of index.html.
2. WhatsApp. Confirm +91 90671 97969 is on WhatsApp. If not, change CLINIC_WHATSAPP.
3. Online consultations. Hidden for now. If the clinic offers them, set OFFERS_ONLINE = true.
4. Registration number. Add it as REG_NO; it appears on the doctor section automatically.
5. Doctor's photo. Save as images/dr-vrushali-bafna-homoeopath-ahilyanagar.jpg (portrait, about 680 x 850).
6. Clinic photos (entrance/signboard, consultation room, yoga space) for a future gallery.
7. Clinic history (year started) and the doctor's years of experience, if you want them shown.
8. Pharmacy details (timings, phone, product range) for the pharmacy section.
9. The six health notes are general drafts. The doctor must review them before publishing.
10. Have a Marathi speaker read the Marathi text once.
11. Read privacy.html and confirm it matches how the clinic handles messages.

PUBLISH ON NETLIFY
1. Go to app.netlify.com, sign in, and drag this whole folder onto "Deploy manually".
2. Site configuration -> Forms -> Enable form detection, then deploy again (drag the folder again).
   Forms -> Form notifications -> add an email notification to manasvihomeo25@gmail.com.
   After this, the "Send to the clinic" button on aalok.co.in sends appointment requests and feedback
   straight to that email. Until it is set up, patients can still use WhatsApp or email.
3. Domain management -> Add a domain -> aalok.co.in. In GoDaddy -> My Products -> aalok.co.in -> DNS,
   set the records Netlify shows. HTTPS turns on automatically.
4. Test: open aalok.co.in on your phone, send one test request with "Send to the clinic", and check the email arrives.

AFTER PUBLISHING
- Google Search Console: add aalok.co.in and submit https://aalok.co.in/sitemap.xml
- Google Business Profile: claim the clinic with exactly the same name, address, phone and hours.
  Then you can replace the map on the site with the profile's own map embed, and set REVIEWS_URL
  to the Google review link (it currently points to the clinic's Justdial listing).
- Google Calendar booking (optional): Calendar -> Create -> Appointment schedule, then paste the
  booking page link into CALENDAR_BOOKING_URL. A "booking calendar" button then appears.

CONTENT RULES THE SITE FOLLOWS
- No invented history, experience, awards, ratings, testimonials or success rates.
- No cure guarantees or "no side effects" claims. Keep it that way when editing.
- Testimonials appear only if added to TESTIMONIALS, with the patient's permission.
