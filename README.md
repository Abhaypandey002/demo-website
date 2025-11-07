# StreamBox – Netflix-inspired landing page

StreamBox is a lightweight Netflix-style landing page built with vanilla HTML, CSS and JavaScript. It showcases a hero call-to-action, content rows and a simple email capture interaction.

## Project structure

```
├── Dockerfile          # Container image definition using nginx
├── index.html          # Main application markup
├── nginx.conf          # nginx configuration for serving the static site
├── script.js           # Email capture interaction logic
├── styles.css          # Styling for the landing page
└── README.md           # Project documentation
```

## Running locally

You can preview the site locally without any additional dependencies beyond Python.

1. Clone the repository and move into the folder:
   ```bash
   git clone <repository-url>
   cd demo-website
   ```
2. Start a simple HTTP server (Python 3):
   ```bash
   python -m http.server 8080
   ```
3. Open your browser to <http://localhost:8080>.

> **Tip:** Any static file server will work (for example `npx serve`). Use whichever tool you prefer.

## Running with Docker

1. Build the container image:
   ```bash
   docker build -t streambox .
   ```
2. Run the container, binding port 8080 on your machine to port 80 in the container:
   ```bash
   docker run --rm -p 8080:80 streambox
   ```
3. Visit <http://localhost:8080> to see the site served by nginx.

Stop the container with `Ctrl+C` when you're finished.

## Customisation

- Update `index.html` to change the layout or content sections.
- Edit `styles.css` to tweak colours, fonts or responsive behaviour.
- Modify `script.js` to adjust the form logic or add new interactions.

## License

This project is released under the MIT License. Feel free to adapt it for your own demos and prototypes.
