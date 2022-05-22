import Url from '../models/url.model.js';

export default class StatsService {
  //Encode Big Url into short Url
  addVisit(pathId) {
    return Url.findOne({ shortUrl: { $regex: pathId } }).then((url) => {
      url.visits += 1;
      url.save();
    });
  }
}
