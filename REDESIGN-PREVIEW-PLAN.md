# Elly Pro Solutions Website Redesign Preview

Status: proposal branch only. Production files and deployment are unchanged.

## Audit findings
- The website is a static HTML/CSS site with Home, Features, Pricing, About and Contact pages.
- The home page currently uses a custom bank-reconciliation ledger illustration as its main visual.
- Service tiles use emoji, which is functional but visually less consistent than real service photography.
- Existing navigation, pricing, contact form, WhatsApp links and sign-in entry point should be preserved.

## Proposed image mapping
1. Laptop sales, repair and maintenance: realistic technician repairing a laptop at a clean workbench.
2. Networking and CCTV: technician installing a CCTV camera beside network equipment.
3. Accounting and tax consultancy: accountant reviewing statements, calculations and a laptop.
4. Elly Pro CRMS: shop operator using a laptop-based inventory/POS workflow.

## Visual direction
- Preserve the existing green brand palette and typography.
- Introduce a clear service overview with consistent image ratios, restrained rounded corners and short descriptive captions.
- Keep the ledger illustration as a product-specific visual for CRMS/accounting rather than using it as the sole visual for the whole business.
- Ensure meaningful alt text, responsive image sizing, lazy-loading for below-the-fold images, and mobile-friendly crops.
- Avoid stock-style claims, fabricated client logos, and unsupported testimonials.

## Implementation safeguards
- This branch is isolated from main.
- No production deployment has been triggered.
- Before merging, verify all page navigation, WhatsApp links, sign-in links, pricing links, contact form behavior, mobile menu, image loading, keyboard focus and responsive layout.
- Generated image assets need to be added to the repository under `images/services/` before page markup references them. They are currently prepared locally, not committed to this repository.
