# SCORM CORS - How to host SCORM files and display x-domain

Displaying a SCORM lesson from a different domain can be tricky due to CORS if the files are not hosted on the same domain. This is a simple express server that will proxy the SCORM assets; the request is from the original domain, but the assets are served from the S3 bucket via the proxy server so they appear to be served from the original domain thus bypassing CORS.


## Features

- Proxies requests to a SCORM uploads server
- Handles all other routes by serving the main `index.html` file (for SPA support)

## Prerequisites

- Node.js (v12 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/richardhealy/scorm-cors.git
   cd scorm-cors
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   SCORM_UPLOADS_URL=https://your-scorm-uploads-url.com
   ```
   Replace `https://your-scorm-uploads-url.com` with your actual SCORM uploads server URL.

## Usage

1. Build your frontend application and place the built files in the `build` directory.

2. Start the server:
   ```
   npm start
   ```

   For development with auto-restart on file changes:
   ```
   npm run dev
   ```

3. The server will start on the port specified in your `.env` file (default is 3000).

## How it works

- Static files are served from the `build` directory.
- Requests to `/uploads/*` are proxied to the SCORM uploads server specified in the `SCORM_UPLOADS_URL` environment variable.
- All other routes serve the `index.html` file from the `build` directory, allowing for client-side routing in Single Page Applications.

## Environment Variables

- `PORT`: The port on which the server will run (default: 3000)
- `SCORM_UPLOADS_URL`: The URL of the SCORM uploads server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).