import { nanoid } from 'nanoid';
import Url from '../models/url.model.js';

export default class UrlShorteningService {
  //Encode Big Url into short Url
  addUrl(urlData) {
    const shortUrl = `/${nanoid(10)}`;
    const newUrl = new Url({ bigUrl: urlData.bigUrl, shortUrl });
    return newUrl.save();
  }

  //Decode a short URL into Big Url
  getUrlDataByShortUrl(shortUrl) {
    return Url.findOne({ shortUrl });
  }

  //Decode a short URL into Big Url
  getUrlDataByShortUrlId(shortUrlId) {
    console.log('shorturlId: ', shortUrlId);
    return Url.findOne({ shortUrl: { $regex: shortUrlId } });
  }

  //Get all urls with data
  getAllUrls() {
    return Url.find();
  }

  deleteUrl(shortUrlId) {
    return Url.deleteOne({ shortUrl: { $regex: shortUrlId } });
  }
}
