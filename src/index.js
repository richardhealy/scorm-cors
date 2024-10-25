require("dotenv").config();
const express = require("express");
const proxy = require("express-http-proxy");
const path = require("path");
const app = express();

app.use(express.static("build"));

// Proxy to upload requests
app.use("/uploads/*", proxy(process.env.SCORM_UPLOADS_URL, {
    proxyReqPathResolver: function (req) {
		return `${process.env.SCORM_UPLOADS_URL}${req.originalUrl.replace("/uploads", "")}`;
    }
  }));

app.get("*", (_req, res, _next) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// if not in production use the port 3000
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
console.log("server started on port:",PORT);

app.listen(PORT);