/*
 * MasterCraft site config — the ONE file to edit for day-to-day changes.
 * Edit a value below, save, commit, push to GitHub Pages. That's it.
 * Every place this data appears on the site (header, hero, footer, reviews, schema) updates automatically.
 */
window.SITE_CONFIG = {
  business: {
    name: "MasterCraft Auto Repair & Collision",
    shortName: "MasterCraft",
    tagline: "Auto Repair & Collision",
    phoneDisplay: "(718) 578-4563",
    phoneHref: "tel:+17185784563",
    phoneE164: "+1-718-578-4563",   // used only in the SEO schema
    email: "shop@mastercraftautony.com",
    mailtoHref: "mailto:shop@mastercraftautony.com",
    website: "https://www.mastercraftautony.com",
    websiteDisplay: "www.mastercraftautony.com"
  },

  address: {
    street: "38-21 23rd Street",
    cityStateZip: "Long Island City, NY 11101",
    full: "38-21 23rd Street, Long Island City, NY 11101",
    city: "Long Island City",   // used only in the SEO schema
    region: "NY",               // used only in the SEO schema
    zip: "11101",               // used only in the SEO schema
    country: "US"               // used only in the SEO schema
  },

  hours: {
    badge: "Open Daily 6AM–Midnight",
    days: "Monday–Sunday",
    range: "6AM – 12AM (Midnight)",
    // used only in the SEO schema — keep in sync with the lines above
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    schemaOpens: "06:00",
    schemaCloses: "24:00"
  },

  images: {
    logo: "images/logo-badge.webp",
    hero: "images/hero-storefront.webp",
    aboutShop: "images/shop-sign.webp",
    mapBackground: "images/image-1783132135535.webp"
  },

  social: {
    facebook: "https://www.facebook.com/mastercraftautony",
    youtube: "https://www.youtube.com/@mastercraftautony",
    tiktok: "https://www.tiktok.com/@mastercraftautony"
  },

  map: {
    // Google Maps "get directions" deep link — opens the native app on mobile
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=38-21+23rd+Street%2C+Long+Island+City%2C+NY+11101"
  },

  // Link to your Google Business Profile review page ("Leave a review" button).
  googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=MasterCraft+Auto+Repair+%26+Collision+Long+Island+City",

  // Shown in the reviews carousel. Text is copied as posted; paste full text when you have it.
  reviews: [
    { name: "Syed Asghar", rating: 5, dateText: "2 months ago", text: "Excellent experience, Bukhari is a professional and definitely knows what he is doing. He handled all the back/forth with my insurance company and got them to approve the claim properly. Once he began work, he kept me updated on a daily ..." },
    { name: "Terrell Brathwaite", rating: 5, dateText: "a month ago", text: "They are very elite. They made my damaged car look absolutely brand new. Would recommend to anyone in NYC who drives" },
    { name: "mian azhar", rating: 5, dateText: "a month ago", text: "I had an amazing experience with Mastercraft! Mr Syed is very experienced and have a lot of knowledge about fixing my car from auto body to mechanical repairs.My car suffered significant front-end damage,back fender,side door , but their ..." },
    { name: "Sam Real estate", rating: 5, dateText: "2 months ago", text: "Best Auto collision shop in the Long Island City, Syed Help Me insurance claim and repaired my vehicle like it's never accident . Very happy with work and staff are very helpful. I recommend this shop bring your vehicle here and get a quality work with affordable price." },
    { name: "Touchstone Services", rating: 5, dateText: "2 months ago", text: "Syed did best quality body work on my car .I received best service from this shop shop owner is very generous and helpful person. I recommend this auto repair & best collision repair shop to get quality ..." },
    { name: "Shahid Ali", rating: 5, dateText: "2 months ago", text: "Best shop in Long Island city . Please visit for quality and affordable work" }
  ],

  // Before/after pairs for the slider. Add: { before: "images/x-before.webp", after: "images/x-after.webp", caption: "2019 Honda Accord, front-end repair" }
  beforeAfter: []
};
