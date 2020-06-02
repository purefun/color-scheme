# purefun-color-scheme

`purefun-color-scheme` includes minimal necessary API for the dark mode.

## API

### Initialization

`window.colorScheme()`

### Getter and Setter

```js
window.colorScheme.get() // 'light' | 'dark'
window.colorScheme.next() // toggle color themes
```

### Listener (CustomEvent)

```js
window.addEventListener('color-scheme', (event) => {
  const { theme } = event.detail;
  // them: 'light' | 'dark'
})
```

## Installation

### Browser

```html
<script src="https://unpkg.com/purefun-color-scheme@0.1.3/color-scheme.min.js"><script>
<!-- initialize -->
<script>colorScheme()</script>
```

