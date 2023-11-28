import { THEME_TYPES } from "../constants";

// for tailwind css, need the change the root class
export const applyThemePreference = (theme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};
