---
sidebar_position: 1
title: Licensing
slug: /funnel/licensing
---

# Licensing

## Editions

SDM Funnel is available in two editions:

### Free

- Any number of steps and groups
- Leakage tracking and significance testing
- Competitor comparison (Second/Third Partition)
- Up to 8 extra columns
- **"Powered by Socio DM" watermark** displayed on the visual
- Community support

### Pro

- Everything in Free
- **No watermark**
- Email support
- Licensed per organization

## Purchasing from Microsoft AppSource
To purchase a Pro license, search for **"SDM Funnel"** on the [Microsoft AppSource](https://appsource.microsoft.com) marketplace and click **Get it now**. Follow the prompts to complete the purchase process. Once you have a valid license, Power BI will automatically detect it and unlock the Pro features.

## Entering a License Key
Another mean to get a Pro license is by purchasing directly from Socio-DM, especially for volume licensing or if you want to purchase multiple visuals or receiving a key from your organization. To activate the Pro features with a license key:
### Directly for one visual
1. Select the visual in your report
2. Open the **Format** pane
3. Expand the **License** card
4. Paste your license key into the **License Key** field

### For bulk activation across multiple visuals in your report
If you have a volume license covering multiple visuals, you will receive a Theme (.json) file to easily apply the license across all your Socio-DM purchased instances.

### For bulk activation across an entire organization
If your organization has purchased a site license, you can distribute the Theme file containing the license to all report writers in your organization. Applying this Theme to any report will automatically unlock the Pro features on
all purchased visuals without the need to enter individual license keys.

The license is validated automatically. The watermark disappears once a valid Pro license is detected.

## License Information

To view your current license status:

1. **Click on the small (i) icon at the top right corner** in the visual
2. The About dialog shows:
   - **Name** — Socio-DM Funnel
   - **Version** — current visual version
   - **Plan** — Free or Pro
   - **Licensed to** — organization name (Pro only)
   - **Expires** — license expiration date (Pro only)

## Microsoft Fabric Licensing

The Funnel visual also supports licensing through **Microsoft Fabric** subscriptions. When the visual is deployed in a Fabric workspace with an active SDM subscription, the Pro plan is detected automatically **without requiring a manual license key**.

License resolution priority:

1. **Microsoft service plan** — Fabric subscription (auto-detected)
2. **License Key** — value typed in the License card
3. **Free** — fallback with watermark
