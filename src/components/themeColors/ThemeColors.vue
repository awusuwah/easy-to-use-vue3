<template></template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useStateStore } from "../../store/state.store";

// The colors for the dark theme
const darkTheme = {
  cta: "#0096db",
  ctaActive: "#006594",
  ctaContrast: "#ffffff",
  ctaHover: "#007db7",
  ctaLight: "#ebf9ff",
  ctaLightActive: "#b8e8ff",
  ctaLightContrast: "#0096db", // same as cta
  ctaLightHover: "#d7f2ff",

  highlight: "#f1083b",
  highlightActive: "#a30528",
  highlightContrast: "#ffffff",
  highlightHover: "#c50730",
  highlightLight: "#fff0f3",
  highlightLightActive: "#fdc9d4",
  highlightLightContrast: "#f1083b", // same as highlight
  highlightLightHover: "#fedce4",

  theme: "#0096db",
  themeActive: "#006594",
  themeContrast: "#ffffff",
  themeHover: "#007db7",
  themeLight: "#ebf9ff",
  themeLightActive: "#b8e8ff",
  themeLightContrast: "#0096db", // same as theme
  themeLightHover: "#d7f2ff",

  background: "#0f172a",
  background100: "#1e293b",
  background200: "#334155",
  background300: "#475569",
  background400: "#64748b",
  background500: "#94a3b8",
  background600: "#cbd5e1",
  background700: "#e2e8f0",
  background800: "#f1f5f9",
  background900: "#f8fafc",

  text: "#ffffff",
  textDim: "#c9cccf",
  textStress: "#575c60",
  text100: "#f5f5f5",
  text200: "#eaebec",
  text300: "#c9cccf",
  text400: "#b7bbbe",
  text500: "#999fa3",
  text600: "#757c81",
  text700: "#575c60",
  text800: "#383b3e",
  text900: "#131516",
  textLink: "#0096db",
  textLinkActive: "#006594",
  textLinkContrast: "#ffffff",
  textLinkHover: "#007db7",

  info: "#306ec5",
  infoActive: "#204983",
  infoContrast: "#ffffff",
  infoHover: "#285ca4",
  infoLight: "#c4edff",
  infoText: "#306ec5",

  success: "#36bf78",
  successActive: "#247f50",
  successContrast: "#ffffff",
  successHover: "#2d9f64",
  successLight: "#c8fae3",
  successText: "#36bf78",

  warning: "#ffa600",
  warningActive: "#a36a00",
  warningContrast: "#131516",
  warningHover: "#d18800",
  warningLight: "#ffeac4",
  warningText: "#ffa600",

  error: "#b83d4e",
  errorActive: "#7a2934",
  errorContrast: "#ffffff",
  errorHover: "#993341",
  errorLight: "#facacf",
  errorText: "#b83d4e",

  offer: "#16b7c5",
  supplier: "#57caff",
  accommodation: "#006594",
};

// The colors for the light theme
const lightTheme = {
  cta: "#0096db",
  ctaActive: "#006594",
  ctaContrast: "#ffffff",
  ctaHover: "#007db7",
  ctaLight: "#ebf9ff",
  ctaLightActive: "#b8e8ff",
  ctaLightContrast: "#0096db",
  ctaLightHover: "#d7f2ff",

  highlight: "#f1083b",
  highlightActive: "#a30528",
  highlightContrast: "#ffffff",
  highlightHover: "#c50730",
  highlightLight: "#fff0f3",
  highlightLightActive: "#fdc9d4",
  highlightLightContrast: "#f1083b",
  highlightLightHover: "#fedce4",

  theme: "#0096db",
  themeActive: "#006594",
  themeContrast: "#ffffff",
  themeHover: "#007db7",
  themeLight: "#ebf9ff",
  themeLightActive: "#b8e8ff",
  themeLightContrast: "#0096db",
  themeLightHover: "#d7f2ff",

  background: "#ffffff",
  background100: "#f5f5f5",
  background200: "#eaebec",
  background300: "#c9cccf",
  background400: "#b7bbbe",
  background500: "#999fa3",
  background600: "#757c81",
  background700: "#575c60",
  background800: "#383b3e",
  background900: "#131516",

  text: "#000000",
  textDim: "#575c60",
  textStress: "#c9cccf",
  text100: "#131516",
  text200: "#383b3e",
  text300: "#575c60",
  text400: "#757c81",
  text500: "#999fa3",
  text600: "#b7bbbe",
  text700: "#c9cccf",
  text800: "#eaebec",
  text900: "#f5f5f5",
  textLink: "#0096db",
  textLinkActive: "#006594",
  textLinkContrast: "#ffffff",
  textLinkHover: "#007db7",

  info: "#306ec5",
  infoActive: "#204983",
  infoContrast: "#ffffff",
  infoHover: "#285ca4",
  infoLight: "#ebf9ff",
  infoText: "#306ec5",

  success: "#36bf78",
  successActive: "#247f50",
  successContrast: "#ffffff",
  successHover: "#2d9f64",
  successLight: "#effbf5",
  successText: "#36bf78",

  warning: "#ffa600",
  warningActive: "#a36a00",
  warningContrast: "#131516",
  warningHover: "#d18800",
  warningLight: "#fff8eb",
  warningText: "#ffa600",

  error: "#b83d4e",
  errorActive: "#7a2934",
  errorContrast: "#ffffff",
  errorHover: "#993341",
  errorLight: "#faf0f1",
  errorText: "#b83d4e",

  offer: "#16b7c5",
  supplier: "#57caff",
  accommodation: "#006594",
};

// Get if the current theme is dark or not
const darkMode = computed(() => {
  return useStateStore().getDarkMode;
});

/**
 * Updates the theme variables. Which theme is loaded depends on the current `darkMode` value.
 */
function updateThemeVariables() {
  document.documentElement.style.setProperty("--color-cta", darkMode.value ? darkTheme.cta : lightTheme.cta);
  document.documentElement.style.setProperty("--color-cta-hover", darkMode.value ? darkTheme.ctaHover : lightTheme.ctaHover);
  document.documentElement.style.setProperty("--color-cta-active", darkMode.value ? darkTheme.ctaActive : lightTheme.ctaActive);
  document.documentElement.style.setProperty("--color-cta-contrast", darkMode.value ? darkTheme.ctaContrast : lightTheme.ctaContrast);
  document.documentElement.style.setProperty("--color-cta-light", darkMode.value ? darkTheme.ctaLight : lightTheme.ctaLight);
  document.documentElement.style.setProperty("--color-cta-light-hover", darkMode.value ? darkTheme.ctaLightHover : lightTheme.ctaLightHover);
  document.documentElement.style.setProperty("--color-cta-light-active", darkMode.value ? darkTheme.ctaLightActive : lightTheme.ctaLightActive);
  document.documentElement.style.setProperty("--color-cta-light-contrast", darkMode.value ? darkTheme.ctaLightContrast : lightTheme.ctaLightContrast);

  document.documentElement.style.setProperty("--color-highlight", darkMode.value ? darkTheme.highlight : lightTheme.highlight);
  document.documentElement.style.setProperty("--color-highlight-hover", darkMode.value ? darkTheme.highlightHover : lightTheme.highlightHover);
  document.documentElement.style.setProperty("--color-highlight-active", darkMode.value ? darkTheme.highlightActive : lightTheme.highlightActive);
  document.documentElement.style.setProperty("--color-highlight-contrast", darkMode.value ? darkTheme.highlightContrast : lightTheme.highlightContrast);
  document.documentElement.style.setProperty("--color-highlight-light", darkMode.value ? darkTheme.highlightLight : lightTheme.highlightLight);
  document.documentElement.style.setProperty("--color-highlight-light-hover", darkMode.value ? darkTheme.highlightLightHover : lightTheme.highlightLightHover);
  document.documentElement.style.setProperty(
    "--color-highlight-light-active",
    darkMode.value ? darkTheme.highlightLightActive : lightTheme.highlightLightActive
  );
  document.documentElement.style.setProperty(
    "--color-highlight-light-contrast",
    darkMode ? darkTheme.highlightLightContrast : lightTheme.highlightLightContrast
  );

  document.documentElement.style.setProperty("--color-theme", darkMode.value ? darkTheme.theme : lightTheme.theme);
  document.documentElement.style.setProperty("--color-theme-hover", darkMode.value ? darkTheme.themeHover : lightTheme.themeHover);
  document.documentElement.style.setProperty("--color-theme-active", darkMode.value ? darkTheme.themeActive : lightTheme.themeActive);
  document.documentElement.style.setProperty("--color-theme-contrast", darkMode.value ? darkTheme.themeContrast : lightTheme.themeContrast);
  document.documentElement.style.setProperty("--color-theme-light", darkMode.value ? darkTheme.themeLight : lightTheme.themeLight);
  document.documentElement.style.setProperty("--color-theme-light-hover", darkMode.value ? darkTheme.themeLightHover : lightTheme.themeLightHover);
  document.documentElement.style.setProperty("--color-theme-light-active", darkMode.value ? darkTheme.themeLightActive : lightTheme.themeLightActive);
  document.documentElement.style.setProperty("--color-theme-light-contrast", darkMode.value ? darkTheme.themeLightContrast : lightTheme.themeLightContrast);

  document.documentElement.style.setProperty("--color-success", darkMode.value ? darkTheme.success : lightTheme.success);
  document.documentElement.style.setProperty("--color-success-hover", darkMode.value ? darkTheme.successHover : lightTheme.successHover);
  document.documentElement.style.setProperty("--color-success-active", darkMode.value ? darkTheme.successActive : lightTheme.successActive);
  document.documentElement.style.setProperty("--color-success-contrast", darkMode.value ? darkTheme.successContrast : lightTheme.successContrast);
  document.documentElement.style.setProperty("--color-success-light", darkMode.value ? darkTheme.successLight : lightTheme.successLight);
  document.documentElement.style.setProperty("--color-success-text", darkMode.value ? darkTheme.successText : lightTheme.successText);

  document.documentElement.style.setProperty("--color-info", darkMode.value ? darkTheme.info : lightTheme.info);
  document.documentElement.style.setProperty("--color-info-hover", darkMode.value ? darkTheme.infoHover : lightTheme.infoHover);
  document.documentElement.style.setProperty("--color-info-active", darkMode.value ? darkTheme.infoActive : lightTheme.infoActive);
  document.documentElement.style.setProperty("--color-info-contrast", darkMode.value ? darkTheme.infoContrast : lightTheme.infoContrast);
  document.documentElement.style.setProperty("--color-info-light", darkMode.value ? darkTheme.infoLight : lightTheme.infoLight);
  document.documentElement.style.setProperty("--color-info-text", darkMode.value ? darkTheme.infoText : lightTheme.infoText);

  document.documentElement.style.setProperty("--color-warning", darkMode.value ? darkTheme.warning : lightTheme.warning);
  document.documentElement.style.setProperty("--color-warning-hover", darkMode.value ? darkTheme.warningHover : lightTheme.warningHover);
  document.documentElement.style.setProperty("--color-warning-active", darkMode.value ? darkTheme.warningActive : lightTheme.warningActive);
  document.documentElement.style.setProperty("--color-warning-contrast", darkMode.value ? darkTheme.warningContrast : lightTheme.warningContrast);
  document.documentElement.style.setProperty("--color-warning-light", darkMode.value ? darkTheme.warningLight : lightTheme.warningLight);
  document.documentElement.style.setProperty("--color-warning-text", darkMode.value ? darkTheme.warningText : lightTheme.warningText);

  document.documentElement.style.setProperty("--color-error", darkMode.value ? darkTheme.error : lightTheme.error);
  document.documentElement.style.setProperty("--color-error-hover", darkMode.value ? darkTheme.errorHover : lightTheme.errorHover);
  document.documentElement.style.setProperty("--color-error-active", darkMode.value ? darkTheme.errorActive : lightTheme.errorActive);
  document.documentElement.style.setProperty("--color-error-contrast", darkMode.value ? darkTheme.errorContrast : lightTheme.errorContrast);
  document.documentElement.style.setProperty("--color-error-light", darkMode.value ? darkTheme.errorLight : lightTheme.errorLight);
  document.documentElement.style.setProperty("--color-error-text", darkMode.value ? darkTheme.errorText : lightTheme.errorText);

  document.documentElement.style.setProperty("--color-bgr", darkMode.value ? darkTheme.background : lightTheme.background);
  document.documentElement.style.setProperty("--color-bgr100", darkMode.value ? darkTheme.background100 : lightTheme.background100);
  document.documentElement.style.setProperty("--color-bgr200", darkMode.value ? darkTheme.background200 : lightTheme.background200);
  document.documentElement.style.setProperty("--color-bgr300", darkMode.value ? darkTheme.background300 : lightTheme.background300);
  document.documentElement.style.setProperty("--color-bgr400", darkMode.value ? darkTheme.background400 : lightTheme.background400);
  document.documentElement.style.setProperty("--color-bgr500", darkMode.value ? darkTheme.background500 : lightTheme.background500);
  document.documentElement.style.setProperty("--color-bgr600", darkMode.value ? darkTheme.background600 : lightTheme.background600);
  document.documentElement.style.setProperty("--color-bgr700", darkMode.value ? darkTheme.background700 : lightTheme.background700);
  document.documentElement.style.setProperty("--color-bgr800", darkMode.value ? darkTheme.background800 : lightTheme.background800);
  document.documentElement.style.setProperty("--color-bgr900", darkMode.value ? darkTheme.background900 : lightTheme.background900);

  document.documentElement.style.setProperty("--color-txt", darkMode.value ? darkTheme.text : lightTheme.text);
  document.documentElement.style.setProperty("--color-txt100", darkMode.value ? darkTheme.text100 : lightTheme.text100);
  document.documentElement.style.setProperty("--color-txt200", darkMode.value ? darkTheme.text200 : lightTheme.text200);
  document.documentElement.style.setProperty("--color-txt300", darkMode.value ? darkTheme.text300 : lightTheme.text300);
  document.documentElement.style.setProperty("--color-txt400", darkMode.value ? darkTheme.text400 : lightTheme.text400);
  document.documentElement.style.setProperty("--color-txt500", darkMode.value ? darkTheme.text500 : lightTheme.text500);
  document.documentElement.style.setProperty("--color-txt600", darkMode.value ? darkTheme.text600 : lightTheme.text600);
  document.documentElement.style.setProperty("--color-txt700", darkMode.value ? darkTheme.text700 : lightTheme.text700);
  document.documentElement.style.setProperty("--color-txt800", darkMode.value ? darkTheme.text800 : lightTheme.text800);
  document.documentElement.style.setProperty("--color-txt900", darkMode.value ? darkTheme.text900 : lightTheme.text900);
  document.documentElement.style.setProperty("--color-txt-dim", darkMode.value ? darkTheme.textDim : lightTheme.textDim);
  document.documentElement.style.setProperty("--color-txt-stress", darkMode.value ? darkTheme.textStress : lightTheme.textStress);
  document.documentElement.style.setProperty("--color-txt-link", darkMode.value ? darkTheme.textLink : lightTheme.textLink);
  document.documentElement.style.setProperty("--color-txt-link-hover", darkMode.value ? darkTheme.textLinkHover : lightTheme.textLinkHover);
  document.documentElement.style.setProperty("--color-txt-link-active", darkMode.value ? darkTheme.textLinkActive : lightTheme.textLinkActive);
  document.documentElement.style.setProperty("--color-txt-link-contrast", darkMode.value ? darkTheme.textLinkContrast : lightTheme.textLinkContrast);

  document.documentElement.style.setProperty("--color-offer", darkMode.value ? darkTheme.offer : lightTheme.offer);
  document.documentElement.style.setProperty("--color-supplier", darkMode.value ? darkTheme.supplier : lightTheme.supplier);
  document.documentElement.style.setProperty("--color-accommodation", darkMode.value ? darkTheme.accommodation : lightTheme.accommodation);
}

// Whenever the current theme changes, update the theme variables
watch(darkMode, (newValue, oldValue) => {
  if (newValue === oldValue) return;
  updateThemeVariables();
});

onMounted(() => updateThemeVariables());
</script>
