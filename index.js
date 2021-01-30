const request = require("request-promise");
const cheerio = require("cheerio");
var http = require("http");
var https = require("https");
http.globalAgent.maxSockets = 1;
https.globalAgent.maxSockets = 1;


module.exports = {
    metaDataFetcher : async(url) => {
    try{
        const result = await request.get(`${url}`);
        const $ = await cheerio.load(result);
    
        const title = $("head").find('title').text().trim();
        const description = $("head")
          .find('meta[name="description"]')
          .attr("content");
    
        const ogurl = $("head").find('meta[property="og:url"]').attr("content");
        const ogtitle = $("head").find('meta[property="og:title"]').attr("content");
        const ogimage = $("head").find('meta[property="og:image"]').attr("content");
        const ogdescription = $("head")
          .find('meta[property="og:description"]')
          .attr("content");
    
        const twitter_url = $("head")
          .find('meta[property="twitter:url"]')
          .attr("content");
        const twitter_title = $("head")
          .find('meta[property="twitter:title"]')
          .attr("content");
        const twitter_image = $("head")
          .find('meta[property="twitter:image"]')
          .attr("content");
        const twitter_description = $("head")
          .find('meta[property="twitter:description"]')
          .attr("content");
    
        const datas = {
          url,
          title,
          description,
          og: { 
            ogurl, 
            ogtitle, 
            ogimage, 
            ogdescription 
          },
          twitter: {
            twitter_url,
            twitter_title,
            twitter_image,
            twitter_description,
          },
        };
    
        return datas;

        }
        catch(err){
          throw new Error(err);
        }
    }
}
