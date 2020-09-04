module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    zIndex: {
      "2": 2,
      "3": 3,
    },
    inset: {
      "-225-px": "-225px",
      "-160-px": "-160px",
      "-94-px": "-94px",
      "-50-px": "-50px",
      "-29-px": "-29px",
      "-20-px": "-20px",
      "25-px": "25px",
      "40-px": "40px",
      "95-px": "95px",
      "145-px": "145px",
      "195-px": "195px",
      "210-px": "210px",
      "260-px": "260px",
    },
    height: {
      "350-px": "350px",
      "600-px": "600px",
      "95-px": "95px"
    },
    maxHeight: {
      "860-px": "860px"
    },
    maxWidth: {
      "100-px": "100px",
      "120-px": "120px",
      "150-px": "150px",
      "180-px": "180px",
      "200-px": "200px",
      "210-px": "210px",
      "580-px": "580px",
    },
    minWidth: {
      "140-px": "140px",
      "48": "12rem"
    },
    backgroundSize: {
      "full": "100$"
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("@tailwindcss/custom-forms")],
};
