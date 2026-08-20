# IP Address Tracker

## Project Overview

The IP Address Tracker is a responsive web application that allows users to search for an IP address or domain and view information about its location.

The application uses the IP Geolocation API by IPify to retrieve IP address information and LeafletJS to display the returned location on an interactive map.

This project was created as part of the Per Scholas Software Engineering program and is based on the Frontend Mentor IP Address Tracker challenge.

## Features

- Displays IP information when the application first loads
- Search for an IP address
- Search for a domain
- Displays the IP address
- Displays the city and region
- Displays the timezone
- Displays the Internet Service Provider (ISP)
- Interactive Leaflet map
- Map automatically moves to the searched location
- Custom Frontend Mentor location marker
- Error handling for empty and invalid searches
- Responsive desktop, tablet, and mobile layouts
- Keyboard-accessible search form
- Hover and focus states for interactive elements

## Technologies Used

- HTML
- CSS
- TypeScript
- Vite
- IP Geolocation API by IPify
- LeafletJS
- CARTO / OpenStreetMap map tiles
- ReqBin
- Git
- GitHub
- GitHub Pages
- GitHub Actions

## Project Setup

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Install the project dependencies:

```bash
npm install
```

4. Start the Vite development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in the browser.

## How to Use

When the application first loads, it retrieves IP information and displays the location on the map.

To perform a search:

1. Enter an IP address, such as `8.8.8.8`, or a domain, such as `google.com`.
2. Click the search button or press Enter.
3. The IP address, location, timezone, and ISP information will update.
4. The Leaflet map and custom location marker will move to the coordinates returned by the API.

## API Testing

Before integrating IPify into the application, I tested the API using ReqBin. This allowed me to view the JSON response and identify the values needed by the application, including the IP address, city, region, timezone, ISP, latitude, and longitude.

After testing the API, I connected it to TypeScript using the Fetch API. The latitude and longitude returned by IPify are passed to LeafletJS to update the map and marker.

The application was tested with multiple IP addresses and domains, including `8.8.8.8`, `1.1.1.1`, and `google.com`.

## Map Integration

LeafletJS is used to create the interactive map. CARTO/OpenStreetMap tiles are used for the map display.

The application uses the latitude and longitude returned by IPify to reposition the map and marker after each successful search. The custom location marker provided with the Frontend Mentor project is used instead of Leaflet's default marker.

## Responsive Design and Accessibility

The application includes responsive CSS for desktop, tablet, and mobile screen sizes. On smaller screens, the information card changes from a four-column layout to a stacked layout.

Accessibility features include a search input label for screen readers, an ARIA label for the search button, keyboard navigation, and visible focus states.

## Troubleshooting

Several issues were resolved during development:

- Tested the IPify API with ReqBin before connecting it to the application.
- Resolved a `403 Access Restricted` API error caused by an API key placeholder.
- Changed the Leaflet map tile provider after map labels appeared in another language.
- Connected the IPify latitude and longitude values to Leaflet so the map and marker move dynamically.
- Added support for both IP address and domain searches.
- Replaced the default Leaflet marker with the custom Frontend Mentor location marker.
- Configured Vite for GitHub Pages deployment.
- Created a GitHub Actions workflow to build and deploy the TypeScript/Vite project.
- Resolved a broken marker image after deployment by moving static images into Vite's `public` folder and using the Vite base URL for asset paths.
- Successfully tested the application after deployment to confirm the API, search functionality, map, images, and custom marker work correctly.

## Production Build

The production version of the application can be created with:

```bash
npm run build
```

Vite creates the browser-ready files inside the `dist` directory.

## Deployment

The application is deployed using GitHub Pages and GitHub Actions. The GitHub Actions workflow automatically installs the dependencies, builds the Vite project, and deploys the production files to GitHub Pages.

## Live Demo

[View the IP Address Tracker](https://fiyahblaze.github.io/Project-HTML-CSS-and-JavaScript-IP-Address-Tracker-/)

## Repository

[View the GitHub Repository](https://github.com/Fiyahblaze/Project-HTML-CSS-and-JavaScript-IP-Address-Tracker-)

## Author

Created as part of the Per Scholas Software Engineering program.
# Project Reflection

For this project, I built an IP Address Tracker using TypeScript, Vite, the IP Geolocation API by IPify, and LeafletJS. My goal was to create a responsive application that allows users to search for an IP address or domain and view the IP address, location, timezone, ISP, and location on an interactive map.

I started by setting up my project with Vite and TypeScript and organizing the assets provided by Frontend Mentor. Before connecting the API to my application, I tested IPify using ReqBin. This helped me understand the JSON response and how to use the latitude and longitude values with Leaflet.

I experienced several challenges during development. I received a 403 API error and used the browser console to discover that my code was still using the API key placeholder. I also had map labels appearing in another language, which I corrected by changing the map tile provider. I tested Leaflet separately before connecting the API coordinates and added the custom location marker.

Another challenge occurred when I deployed the project to GitHub Pages. The application launched successfully, but my custom marker image was broken. I learned that the image path worked locally but needed to account for the GitHub Pages repository path. I moved my static images into Vite's public folder and updated the asset paths. After rebuilding and redeploying through GitHub Actions, the marker and application worked correctly.

This project improved my understanding of APIs, TypeScript, LeafletJS, debugging, responsive design, Vite builds, GitHub Actions, and deployment. It also showed me how important testing and troubleshooting are when moving an application from local development to production.