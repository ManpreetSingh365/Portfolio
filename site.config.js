const CONFIG = {
  // your domain link
  link: process.env.PUBLIC_URL || "https://portfolio-one-puce-23.vercel.app/",
  useFirebase: {
    enable: false, // If you want to use Firebase, set this to true. In the future, we might develop a backend file management system.
    config: {
      host: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
    },
  },
  head: {
    title: "Portfolio | Manpreet Singh - Software Engineer",
    description: "I'm Manpreet Singh, software engineer based in Amritsar, Punjab.",
    keywords:
      "Manpreet Singh, portfolio, Manpreet, software engineer, nextjs portfolio, portfolio design, portfolio website, personal portfolio",
    site_name: "Manpreet Singh Portfolio",
    url: process.env.PUBLIC_URL || "https://portfolio-one-puce-23.vercel.app/",
    author: "Manpreet Singh",
    lang: "en",
    image: "https://res.cloudinary.com/dnhvlqc1n/image/upload/v1727630612/azfdjulktx1o6thc84gy.png",
  },
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
};

module.exports = { CONFIG };
