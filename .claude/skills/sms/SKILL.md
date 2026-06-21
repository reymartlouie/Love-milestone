---
name: sms
description: Use when planning SMS or MMS marketing campaigns — sequences, compliance setup, copy templates, and platform guidance for DTC e-commerce, SaaS, or mobile apps.
---

# SMS Marketing

High-ROI channel when done compliantly. Average open rate: 98%. Average response rate: 45%.

## Before Anything: Compliance First

**US (A2P 10DLC):**
- Register your brand and campaigns with carriers via your platform
- Required for any business SMS — not optional
- Without registration: messages get filtered, numbers get blocked
- Platforms: Postscript, Attentive, Klaviyo (e-commerce), Twilio (developer)

**EU (GDPR):**
- Explicit opt-in required (pre-checked boxes illegal)
- Right to opt-out must be simple
- Data residency rules apply

**CAN-SPAM / TCPA (US):**
- Clear opt-in before sending
- Must honor opt-outs within 10 business days
- Include business name in every message

## Opt-In Methods

- Keyword (text START to 55555)
- Checkout checkbox (e-commerce)
- Pop-up or form on website
- Post-purchase follow-up

Never send to purchased lists. Never text people who haven't explicitly opted in to SMS.

## High-ROI Sequences

**E-commerce:**
| Sequence | Timing | Revenue Impact |
|----------|--------|---------------|
| Abandoned cart | 1 hour after abandonment | High |
| Post-purchase | 2 days after delivery | Medium |
| Win-back | 60 days inactive | Medium |
| Flash sale | Day-of announcement | High |

**SaaS:**
| Sequence | Timing | Goal |
|----------|--------|------|
| Trial activation | Day 1 + Day 3 if no action | Activation |
| Feature announcement | Product update | Engagement |
| Renewal reminder | 7 days before | Retention |

## Copy Templates

**Character limits:**
- SMS: 160 characters (goes to MMS at 161+)
- MMS: 1,600 characters + image

**Structure:** Brand name + value + CTA + opt-out

```
[Brand]: [Value/offer]. [CTA]: [link]. Reply STOP to opt out.
```

Example (abandoned cart):
```
Acme: You left something behind. Your cart expires in 24 hrs. 
Grab it: acme.co/cart Reply STOP to unsubscribe.
```

## Best Practices

- Send during business hours (10am–8pm recipient timezone)
- Max 2–4 texts per month (more = high opt-out)
- Personalize with first name when possible
- Short URLs (use link shortener with tracking)
- Test MMS (image) vs SMS for engagement
- Always include opt-out instructions

## Measurement

| Metric | Benchmark |
|--------|---------|
| Opt-in rate | 5–15% of email list |
| Opt-out rate | <3% per campaign (if higher, reduce frequency) |
| Click-through rate | 15–30% |
| Revenue per message | Varies — track against email as benchmark |
