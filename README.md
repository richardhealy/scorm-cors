# SCORM CORS - How to host SCORM files and display x-domain

Displaying a SCORM lesson from a different domain can be tricky due to CORS if the files are not hosted on the same domain. This is a simple express server that will proxy the SCORM assets; the request is from the original domain, but the assets are served from the S3 bucket via the proxy server so they appear to be served from the original domain thus bypassing CORS.


## How to use

1. Clone the repository
2. Create a `.env` file and add the following:
    ```
    SCORM_UPLOADS_URL=https://scorm-uploads.s3.example.com
    ```
