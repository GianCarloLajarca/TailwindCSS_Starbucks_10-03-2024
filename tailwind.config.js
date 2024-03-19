module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        starBanner: "url(../dist/img/rewards/xl-hero-desktop_2021.png)",
        bituinBanner: "url(../dist/img/rewards/hero-mobile_2021.webp)",
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        berde:"#006341",
        grayishblue:"#d5d0ea",
        cream:"#f2f0eb",
        lightberde: "#cee8c9",
        lightpink: "#F5CAC4",
        orangestarbs: "#e99264",
        accent: "#1e3932",
        lberde: "#d4e9e2",
      }
    },
  },
  plugins: [],
}