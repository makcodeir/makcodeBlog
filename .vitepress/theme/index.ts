// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css' // Importing your custom styles

export default {
  extends: DefaultTheme,
  // Using the enhancement hook if needed later
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

