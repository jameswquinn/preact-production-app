# Preact Production-Ready Application

This project is a production-ready Preact application template with an optimized Webpack configuration. It provides a solid foundation for building modern, performant web applications using Preact.

## Features

- [Preact](https://preactjs.com/) for efficient DOM updates and small bundle size
- [Webpack 5](https://webpack.js.org/) for module bundling and optimization
- TypeScript support
- SASS processing with PostCSS
- CSS extraction and minification for production
- JavaScript minification and tree shaking
- Code splitting and lazy loading
- PWA support with Workbox
- Bundle analysis
- Development server with hot reloading

## Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/preact-production-app.git
   cd preact-production-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:9001` to see the application running.

## Scripts

- `npm start`: Starts the development server
- `npm run build`: Creates a production build
- `npm run analyze`: Generates a bundle analysis report
- `npm run serve`: Serves the production build locally

## Project Structure

```
.
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── styles/
│   │   └── main.scss
│   ├── App.jsx
│   ├── index.html
│   └── index.js
├── webpack.config.js
├── package.json
└── README.md
```

## Webpack Configuration

The Webpack configuration (`webpack.config.js`) is set up to handle both development and production builds. It includes:

- Babel for transpiling JavaScript and JSX
- CSS and SASS processing with PostCSS
- Asset management for images and fonts
- Code splitting and lazy loading
- PWA manifest generation
- Service worker generation with Workbox
- Bundle analysis

## Customization

1. Modify `src/App.jsx` to change the main application structure and routing.
2. Add new components in the `src/components/` directory.
3. Add new pages in the `src/pages/` directory and update the router in `App.jsx`.
4. Update global styles in `src/styles/main.scss`.
5. Adjust the Webpack configuration in `webpack.config.js` for advanced customization of the build process.

## Progressive Web App (PWA)

This template includes PWA support. To customize the PWA settings:

1. Update the PWA manifest options in `webpack.config.js` under the `WebpackPwaManifest` plugin.
2. Replace `src/assets/icon.png` with your own app icon.
3. Modify the service worker settings in the `GenerateSW` plugin if needed.

## Performance Optimization

The production build includes several optimizations:

- Code splitting for efficient loading
- Tree shaking to eliminate dead code
- Minification of JavaScript and CSS
- Lazy loading of route components
- Caching through service worker

To analyze your bundle size, run `npm run analyze` and open the generated report in your browser.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
