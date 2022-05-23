import { Router } from 'express';
import StatsService from '../services/stats.service.js';
import UrlShorteningService from '../services/urlshortener.service.js';

const router = Router();
const urlShorteningService = new UrlShorteningService();
const statsService = new StatsService();

router.route('/:pathid').get(async (req, res) => {
  const pathId = req.params.pathid;
  const urlData = await urlShorteningService.getUrlDataByShortUrl(pathId);
  statsService.addVisit(pathId);
  let redirectUrl = urlData.bigUrl;
  if (redirectUrl.indexOf('https') < 0) {
    redirectUrl = `https://${urlData.bigUrl}`;
  }
  res.redirect(redirectUrl);
});

router.route('/*').get(async (req, res) => {
  res.json({});
});

export default router;
