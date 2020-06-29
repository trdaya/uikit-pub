const themes = {
  colors: {
    black: "#000000",
    black2: "rgba(0, 0, 0, 0.02)",
    black5: "rgba(0, 0, 0, 0.05)",
    black7: "rgba(0, 0, 0, 0.07)",
    black10: "rgba(0, 0, 0, 0.1)",
    black20: "rgba(0, 0, 0, 0.2)",
    black35: "rgba(0, 0, 0, 0.35)",
    black45: "rgba(0, 0, 0, 0.45)",
    black60: "rgba(0, 0, 0, 0.6)",
    black90: "rgba(0, 0, 0, 0.9)",
    postYellow95: "rgba(255, 204, 0, 0.95)",
    dhlRed: "#d40511",
    postYellow: "#ffcc00",
    white: "#ffffff",
    whiteSmoke: "#f6f6f6",
    white90: "rgba(255, 255, 255, 0.9)",
    white95: "rgba(255, 255, 255, 0.95)",
    gray80: "#333333",
    gray60: "#666666",
    gray60_90: "rgba(102,102,102,0.9)",
    gray45: "#8c8c8c",
    gray30: "#b2b2b2",
    gray20: "#cccccc",
    gray10: "#e5e5e5",
    gray08: "#ebebeb",
    gray05: "#f2f2f2",
    darkGreen: "#007c39",
    brightGreen: "#76bd22",
    hoverRed: "#eb131e",
    visitedRed: "#9a0000",
    yellowShadowDark: "#722900",
    yellowShadowMedium: "#b74300",
    yellowShadowLight: "#f29005",
  },
  fonts: {
    // @todo: we may not need these with the new version, if we do, we need to change them to rem
    desktop: {
      h1: {
        size: "39px",
        lineHeight: "43px",
      },
      h2: {
        size: "31px",
        lineHeight: "35px",
      },
      h3: {
        size: "27px",
        lineHeight: "31px",
      },
      h4: {
        size: "20px",
        lineHeight: "24px",
      },
      h5: {
        size: "16px",
        lineHeight: "22px",
      },
      h6: {
        size: "14px",
        lineHeight: "18px",
      },
      button: {
        size: "14px",
        lineHeight: "25px",
      },
      regular: {
        size: "14px",
        lineHeight: "18px",
      },
      copy: {
        size: "14px",
        lineHeight: "18px",
      },
      label: {
        size: "12px",
        lineHeight: "16px",
      },
      caption: {
        size: "12px",
        lineHeight: "16px",
      },
      tabs: {
        size: "16px",
        lineHeight: "26px",
      },
    },
    tablet: {
      h1: {
        size: "36px",
        lineHeight: "40px",
      },
      h2: {
        size: "28px",
        lineHeight: "33px",
      },
      h3: {
        size: "24px",
        lineHeight: "29px",
      },
      h4: {
        size: "18px",
        lineHeight: "24px",
      },
      h5: {
        size: "16px",
        lineHeight: "20px",
      },
      h6: {
        size: "14px",
        lineHeight: "18px",
      },
      button: {
        size: "14px",
        lineHeight: "25px",
      },
      regular: {
        size: "14px",
        lineHeight: "18px",
      },
      copy: {
        size: "14px",
        lineHeight: "18px",
      },
      label: {
        size: "12px",
        lineHeight: "16px",
      },
      caption: {
        size: "12px",
        lineHeight: "16px",
      },
      tabs: {
        size: "16px",
        lineHeight: "26px",
      },
    },
    mobile: {
      h1: {
        size: "33px",
        lineHeight: "36px",
      },
      h2: {
        size: "25px",
        lineHeight: "29px",
      },
      h3: {
        size: "21px",
        lineHeight: "25px",
      },
      h4: {
        size: "20px",
        lineHeight: "24px",
      },
      h5: {
        size: "16px",
        lineHeight: "20px",
      },
      h6: {
        size: "14px",
        lineHeight: "18px",
      },
      button: {
        size: "14px",
        lineHeight: "18px",
      },
      regular: {
        size: "14px",
        lineHeight: "18px",
      },
      noZoomCopy: {
        size: "16px",
      },
      copy: {
        size: "12px",
        lineHeight: "16px",
      },
      label: {
        size: "12px",
        lineHeight: "16px",
      },
      caption: {
        size: "12px",
        lineHeight: "16px",
      },
      tabs: {
        size: "14px",
        lineHeight: "18px",
      },
    },
  },
};

export default {
  colors: themes.colors || {},
  fonts: themes.fonts || {},
  animation: themes.animation || {},
  spacing: themes.spacing || {},
};
