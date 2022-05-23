import { Router } from 'express';
import UrlShorteningService from '../services/urlshortener.service.js';

const router = Router();
const urlShorteningService = new UrlShorteningService();

//Get all urls [GET]
router.route('/').get((req, res) => {
  let baseUrl = `${req.protocol}://${req.headers.host}`;
  urlShorteningService
    .getAllUrls()
    .then((urls) => {
      res.status(200).json({ message: 'Success', urls, baseUrl });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Failed' });
    });
});

//Convert a url into its short url form [POST]
router.route('/encode').post((req, res) => {
  const url = {
    bigUrl: req.body.url,
    baseUrl: req.headers.host,
  };

  urlShorteningService
    .addUrl(url)
    .then((data) => {
      res.status(200).json({ message: 'Success', data });
    })
    .catch((err) => {
      console.log('err: ', err);
      res.status(400).json({ message: 'Failed' });
    });
});

//Get the big url against a given shortUrl [GET]
router.route('/decode').get((req, res) => {
  let urlToDecode = req.query.url;
  urlShorteningService
    .getUrlDataByShortUrl(urlToDecode)
    .then((url) => {
      res.status(200).json({ message: 'Success', bigUrl: url.bigUrl });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Failed' });
    });
});

//Get statistics of a short url [GET]
router.route('/statistics/:urlpath').get((req, res) => {
  let shortUrlId = req.params.urlpath;
  urlShorteningService
    .getUrlDataByShortUrl(shortUrlId)
    .then((url) => {
      res.status(200).json({ message: 'Success', url });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Failed' });
    });
});

//Delete a specific url [DELETE]
router.route('/:shortUrlId').delete((req, res) => {
  let shortUrlId = req.params.shortUrlId;
  urlShorteningService
    .deleteUrl(shortUrlId)
    .then((url) => {
      res.status(200).json({ message: 'Success', url });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Failed' });
    });
});

export default router;
