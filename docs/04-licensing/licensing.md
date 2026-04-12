---
sidebar_position: 1
title: Licensing
slug: /licensing
---

# Licensing

## Editions

SDM MetricTile is available in two editions:

### Free

- All shapes, gradients, effects and formatting cards
- Data-driven color and logo
- Drag positioning and rotation
- **"Powered by Socio DM" watermark** displayed on the visual
- Community support

### Pro

- Everything in Free
- **No watermark**
- Email support
- Licensed per organization

## Entering a License Key

1. Select the visual in your report
2. Open the **Format** pane
3. Expand the **License** card
4. Paste your license key into the **License Key** field

The license is validated automatically. The watermark disappears once a valid Pro license is detected.

## License Information

To view your current license status:

1. **Right-click** on the visual
2. Select **About** in the context menu
3. The About dialog shows:
   - **Name** — Socio-DM MetricTile
   - **Version** — current visual version
   - **Plan** — Free or Pro
   - **Licensed to** — organization name (Pro only)
   - **Expires** — license expiration date (Pro only)

## Microsoft Fabric Licensing

The MetricTile also supports licensing through **Microsoft Fabric** subscriptions. When the visual is deployed in a Fabric workspace with an active SDM subscription, the Pro plan is detected automatically **without requiring a manual license key**.

License resolution priority:

1. **Microsoft service plan** — Fabric subscription (auto-detected)
2. **License Key** — value typed in the License card
3. **Free** — fallback with watermark
