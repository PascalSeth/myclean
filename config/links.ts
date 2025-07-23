export const APP_LINKS = {
  // App Store Links
  googlePlay: {
    user: "https://play.google.com/store/apps/details?id=com.myclean.myclean_app",
    driver: "https://play.google.com/store/apps/details?id=com.myclean.myclean_driver&pli=1",
  },
  appStore: {
    user: "https://apps.apple.com/gh/app/myclean-app/id6553992726",
    driver: "https://apps.apple.com/gh/app/myclean-app-driver/id6557081824",
  },

  // Social Media Links
  social: {
    twitter: "https://x.com/MycleanApp",
    instagram: "https://www.instagram.com/myclean.app/",
    facebook: "https://facebook.com/mycleanapp",
  },

  // Contact Links
  contact: {
    email: "contact@mycleanapp.org",
    phone: "+233542573141",
    support: "support@mycleanapp.org",
    createAccount: "createaccount@mycleanapp.org",
    deleteAccount: "deleteaccount@mycleanapp.org",
    general: "myclean.app@gmail.com",
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Services", href: "#waste-solutions" },
    { name: "Features", href: "#app-features" },
    { name: "Apps", href: "#our-apps" },
    { name: "Contact", href: "#ContactUs" },
  ],

  // Footer Links
  footer: {
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Delete Account", href: "/delete-account" },
    ],
    company: [
      { name: "About Us", href: "/aboutUs" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "#ContactUs" },
      { name: "Status", href: "/status" },
      { name: "API", href: "/api" },
    ],
  },

  // External Links
  external: {
    website: "https://mycleanapp.org",
    documentation: "https://docs.mycleanapp.org",
    github: "https://github.com/mycleanapp",
  },
} as const

// Helper function to get app store links
export const getAppStoreLinks = () => ({
  googlePlay: APP_LINKS.googlePlay,
  appStore: APP_LINKS.appStore,
})

// Helper function to get social links
export const getSocialLinks = () => APP_LINKS.social

// Helper function to get contact info
export const getContactInfo = () => APP_LINKS.contact

// Helper function to get navigation links
export const getNavigationLinks = () => APP_LINKS.navigation
