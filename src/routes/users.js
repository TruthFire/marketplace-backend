import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  res.json(exampleAds);
});

router.post('/register');
router.post('/login');
router.post('/logout');
router.get('/activate/:link');
router.get('/refresh');