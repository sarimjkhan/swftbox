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
    const shortUrlId = shortUrl.substring(shortUrl.lastIndexOf('/') + 1);
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
