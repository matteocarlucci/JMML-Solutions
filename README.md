# JMML Website

A simple, modern website for JMML — Digital Professional Services.
Built with plain HTML, CSS, and JavaScript, so there is **nothing to install**.

## Files

| File         | What it is                                                        |
|--------------|-------------------------------------------------------------------|
| `index.html` | All the page content (Home, About, Contact). Edit text here.      |
| `styles.css` | All the styling — colors, fonts, spacing, layout.                 |
| `script.js`  | Small interactive bits (mobile menu, auto-updating year).         |

## How to view the site

Double-click `index.html` and it opens in your web browser. That's it.

## Where to add your content

Open `index.html` in any text editor and look for the text in square
brackets, e.g. `[Your main headline here]`. Each one marks a spot for your
real content. Replace the bracketed text (and remove the brackets).

Key spots:
- **Hero / Home** — your headline and one-line description.
- **What we do** — three service cards (rename and describe your services).
- **About** — your story and the stat numbers.
- **Contact** — your email, phone, location.

## Changing the colors

Open `styles.css` and edit the values near the top under `:root`
(for example `--color-accent: #2f6df6;`). Changing those few lines
re-themes the whole site.

## Making the contact form send emails (Already done, just keeping for evidence) 

The contact form submits to [Formspree](https://formspree.io), a free
service that emails you whenever someone submits the form — no backend
required. To activate it:

1. Sign up at [formspree.io](https://formspree.io) (free plan is fine).
2. Create a new form and set the recipient to the address you want
   submissions sent to (e.g. `info@jmml.ca`).
3. Formspree gives you an endpoint like
   `https://formspree.io/f/abcdwxyz`.
4. Open `index.html`, find the `<form id="contactForm" ...>` tag near
   "Get in touch", and replace `YOUR_FORM_ID` in the `action` attribute
   with your real form ID.
5. Reload the page and submit a test message — it should show
   "Thanks! Your message has been sent." and arrive in your inbox
   (check spam the first time).

## Tracking visits with Google Analytics

The site includes the standard Google Analytics (GA4) tracking snippet so
you can see how many people visit and where they come from. To activate it:

1. Sign up at [analytics.google.com](https://analytics.google.com) (free)
   and create a property for `jmml.ca`.
2. Under Admin → Data Streams, add a Web stream for your site. Google
   gives you a Measurement ID that looks like `G-ABC123XYZ`.
3. Open `index.html` and replace both occurrences of `G-XXXXXXXXXX`
   (in the two `<script>` tags near the top of `<head>`) with your real
   Measurement ID.
4. Reload the site, then check the "Realtime" report in Google Analytics
   — your visit should show up within a minute or two.

## Still to do later (when you're ready)

- Set your real Formspree form ID (see above) so the contact form works.
- Set your real Google Analytics Measurement ID (see above) so visits are tracked.
- Add more photos as you get them (the logo and two project images are already in place).
- Publish it online (hosting).
- Change Colour Scheme to Give Brighter Vibes- Maybe Alernate Between 2 Brighter Colours Instead of Current Dark Shades of Blue
- Make Overall Theme More Professional
- Add Different Dircectories as Opposed to Single Page
