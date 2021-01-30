# What is for?

Get meta data of any website.

# Installation

`npm install --save fetch-meta-data`

# Usage

```
const { metaDataFetcher } = require('fetch-meta-data');

const getData = async() => {

 // Pass the 'url' like 'https://amazon.in/'
    const result = await metaDataFetcher(url); 

    console.log(result);
}
```