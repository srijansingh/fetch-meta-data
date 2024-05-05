const request = require("request-promise");
const cheerio = require("cheerio");
const http = require("http");
const https = require("https");

// Set the maximum number of sockets for HTTP and HTTPS requests
const globalAgent = {
  http: new http.Agent({ maxSockets: 1 }),
  https: new https.Agent({ maxSockets: 1 }),
};
// Set the global agent for request-promise to limit the number of sockets
request.defaults({ agent: globalAgent });

// Load an empty HTML document with Cheerio for reuse
const metaDataFetcher = async (url) => {
  try {
    // Check if the URL is valid
    if (!isValidUrl(url)) {
      throw new Error("Invalid URL. Please provide a valid URL.");
    }

    // Make an HTTP GET request to the specified URL
    const result = await request.get(url);
    const $ = cheerio.load(result);

    // Function to extract meta tag content based on property
    const extractMetaTag = (tag) =>
      $("head").find(`meta[property="${tag}"]`).attr("content");

    // Extract title and meta tag content using the extractMetaTag function
    const title = $("head").find("title").text().trim();
    const description = extractMetaTag("description");
    const ogtitle = extractMetaTag("og:title");
    const ogimage = extractMetaTag("og:image");
    const ogdescription = extractMetaTag("og:description");
    const twitter_title = extractMetaTag("twitter:title");
    const twitter_image = extractMetaTag("twitter:image");
    const twitter_description = extractMetaTag("twitter:description");

    // Construct the metadata object with extracted data
    return {
      url,
      title: title || ogtitle || twitter_title,
      description: description || ogdescription || twitter_description,
      image: ogimage || twitter_image
    };
  } catch (err) {
    // Log the error message to console
    console.error("Error fetching metadata:", err.message);
    // Throw any errors encountered during the process
    throw err;
  }
};

// Helper function to check if a URL is valid
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = { metaDataFetcher };
