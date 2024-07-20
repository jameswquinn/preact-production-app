# Improved Preact App

This project is a modern, optimized Preact application featuring lazy loading, SEO optimization, and improved error handling.

## Features

- Modular structure with separate components and pages
- Lazy loading for improved performance
- Routing with `preact-router`
- SEO optimization using custom `useMeta` hook
- Error boundary for graceful error handling
- Accessibility improvements
- 404 page for handling non-existent routes

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/improved-preact-app.git
   ```

2. Navigate to the project directory:
   ```
   cd improved-preact-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server:

```
npm run dev
```

The application will be available at `http://localhost:8080`.

### Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `build` directory.

## Project Structure

```
src/
|-- components/
|   |-- ErrorBoundary.js
|   |-- Header.js
|   |-- Footer.js
|-- hooks/
|   |-- useMeta.js
|-- pages/
|   |-- Home.js
|   |-- About.js
|   |-- Contact.js
|   |-- NotFound.js
|-- utils/
|   |-- metaUtils.js
|-- App.js
|-- index.js
|-- style.css
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

# CONTRIBUTING.md

## Contributing to Improved Preact App

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

### We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project.

### Report bugs using Github's [issues](https://github.com/yourusername/improved-preact-app/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/improved-preact-app/issues/new); it's that easy!

### Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Use a Consistent Coding Style

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

### License

By contributing, you agree that your contributions will be licensed under its MIT License.
