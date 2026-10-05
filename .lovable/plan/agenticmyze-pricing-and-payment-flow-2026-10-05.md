# AgenticMyze pricing and payment flow

## Goal
Rebrand the website to AgenticMyze, update the three course packages, and turn Pricing into the entry point for a simple bank-transfer enrollment flow. The existing detailed Student Enrollment form stays available separately.

## Pricing updates
- Keep Starter at PKR 10,000 and add:
  - 20 recorded lectures
  - No done-for-you system delivery
  - No client guarantee
  - No live classes
- Keep Professional at PKR 30,000 and replace its offer with:
  - Full Done For You Program
  - Refund guarantee if results do not come
  - 1 client guaranteed in 45 days
  - Free n8n yearly account
  - Access to 20+ real AppointFunnels results to help win clients faster
  - 5+ tool stack: Apollo, Claude Code, n8n, Instantly, GoHighLevel, and Retell AI for cold SMS, positioned as $400+ value
  - 20% revenue share per converted client
- Change Elite to PKR 60,000 and make the offer:
  - 2 clients guaranteed in 45 days
  - Include the applicable Professional benefits
  - 20% revenue share per converted client
- Remove conflicting 60-day guarantee language from pricing, homepage promises, FAQs, SEO, and policy copy so the site does not contradict the new package terms.

## Brand update
- Replace all visible Appointrium/Appointruim Academy naming with AgenticMyze across navigation, footer, pages, chatbot, metadata, structured data, and AI-readable site copy.
- Keep the existing icon mark and update its accessible label and adjacent brand wordmark.
- Keep existing public URLs unchanged unless a new custom domain is provided later.

## Pricing-to-payment journey
1. Every general “Apply Now” action opens the Pricing page.
2. Each pricing card has its own package-selection button.
3. Selecting a package opens a new payment page with that plan already selected.
4. The buyer enters only:
   - Full Name
   - Mobile Number with WhatsApp
5. After validation, show the selected package and payment methods with compact copy buttons:
   - UBL — Zia UD Din Shah Gilani — Account 1373369728458
   - NayaPay — Zia UD Din Shah Gilani — 03303120032
   - JazzCash — Zia UD Din Shah Gilani — 03303120032
6. Show the payment instructions and “our team will contact you within the next hour; please attend the call.”
7. Provide a WhatsApp button that opens a prepared message containing the buyer name, WhatsApp number, selected plan, amount, and a reminder to attach the payment screenshot.

## Receipt handling
- Do not pretend an uploaded screenshot reaches the team: WhatsApp cannot automatically receive a file selected on the website.
- Leave receipt upload/storage out of this first implementation, as requested while the database workflow is still being decided.
- The payment page will clearly ask the buyer to attach the receipt inside WhatsApp. Receipt upload can be added once its storage and review destination are confirmed.

## Technical details
- Add a dedicated payment route and reuse the existing validated Button/Input components.
- Pass the selected package through navigation state or a validated URL value, rejecting unknown package values.
- Encode the WhatsApp message safely before opening it.
- Keep the detailed `/student-form` route and its existing webhook behavior unchanged.
- Update route metadata and sitemap entries for the payment page.
- Verify Starter, Professional, and Elite paths on desktop and mobile, including copy buttons and WhatsApp message contents.
