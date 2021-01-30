# What is for?

Get meta data of any website.

# Installation

`npm install --save meta-data-fetcher`

# Usage

```
const { metaDataFetcher } = require('meta-data-fetcher');

const getData = async() => {

 // Pass the 'url' like 'https://amazon.in/'
    const result = await metaDataFetcher(url); 

    console.log(result);
}
```