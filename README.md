# Glotekensol Digital — React website

A premium, responsive React + Vite marketing website for Glotekensol Digital.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Before publishing

1. Open `src/config.js`.
2. Replace `CONTACT_EMAIL` with the verified enquiry email address.
3. Replace `WHATSAPP_NUMBER` with the WhatsApp number in international format (country code + number, digits only; no `+`).
4. Review the contact form's email workflow. It validates the form and opens the visitor's email application with a prefilled enquiry. For server-side submission, connect a backend or a trusted form service and add spam protection.
5. Replace the three clearly labelled concept portfolio previews with real project screenshots, descriptions and permission-cleared client work.
6. Confirm the business contact details, social profile URLs and any legal/privacy wording before launch.
7. Deploy the contents of `dist/` to your preferred static hosting provider.

## Notes

- The WhatsApp floating action points to the contact section until a real number is configured.
- The contact form uses a `mailto:` handoff; it does not silently store or transmit visitor data.
- No unverified phone number, email address, client testimonial or client project has been invented.
- The visual portfolio cards are illustrative placeholders.
- The parent-company link points to https://glotekensol.com.


## Requested website hostname

Target hostname: `webworks.glotekensol.com`

The project files are named for this hostname, but the domain is not automatically registered or connected by changing source code. To publish at this address, deploy the production `dist/` output to your hosting provider, add `webworks.glotekensol.com` as a custom domain there, and create the DNS record(s) required by that provider. Enable HTTPS after DNS verification.
