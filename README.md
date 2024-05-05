# meta-data-fetcher

## What is it for?

The `meta-data-fetcher` is a Node.js library designed to retrieve metadata from any website. This metadata includes information such as the title, description, and images associated with the URL provided.

## Installation

To install the `meta-data-fetcher` library, use npm:

```bash
npm install --save meta-data-fetcher
```

## Usage

Here's an example of how to use the `metaDataFetcher` function:

```javascript
const { metaDataFetcher } = require('meta-data-fetcher');

const getData = async () => {
    try {
        // Provide the URL of the website to fetch metadata from
        const url = 'https://example.com';
        const result = await metaDataFetcher(url); 

        console.log(result);
    } catch (error) {
        console.error('Error fetching metadata:', error.message);
    }
}

getData();
```

Replace `'https://example.com'` with the URL from which you want to extract metadata.

The `metaDataFetcher` function returns a promise that resolves with an object containing the metadata information extracted from the provided URL. The object includes properties such as `url`, `title`, `description`, and `image`.

### Result Example:

```json
{
  "url": "https://example.com",
  "title": "Example Domain",
  "description": "This domain is for use in illustrative examples in documents.",
  "image": "https://www.example.com/example.png"
}
```

The provided example demonstrates how to fetch metadata from a website using the `meta-data-fetcher` library and log the result to the console. Adjust the example and description as needed for your specific use case.