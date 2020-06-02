const colorSchemeKey = 'color-scheme';

function setColorScheme(theme) {
  document.documentElement.setAttribute(colorSchemeKey, theme);
  const colorSchemeEvent = new CustomEvent(colorSchemeKey, {
    detail: { theme },
  });
  window.dispatchEvent(colorSchemeEvent);
  localStorage.setItem(colorSchemeKey, theme);
}

function getColorScheme() {
  return document.documentElement.getAttribute(colorSchemeKey);
}

function nextColorScheme() {
  const theme = getColorScheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  setColorScheme(nextTheme);
}

function main() {
  if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
    setColorScheme('light');
    return;
  }

  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

  let preferredTheme;

  try {
    preferredTheme = localStorage.getItem(colorSchemeKey);
  } catch (err) { }

  const theme = preferredTheme ? preferredTheme : (darkMode.matches ? 'dark' : 'light');
  setColorScheme(theme);

  darkMode.addListener((e) => {
    const isDark = e.matches;
    const theme = isDark ? 'dark' : 'light';
    setColorScheme(theme);
  })
}

main.get = getColorScheme;
main.next = nextColorScheme;

export default main;
