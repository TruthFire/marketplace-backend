import { Router } from 'express';

export const router = Router();

const exampleAds = {
    data: [
        {
            id: 1,
            title: "Lorem ipsum",
            price: 100,
            location: 'Vilnius',
            timestamp: Date.now(),
            image: "https://picsum.photos/id/1/300/300",
        },
         {
            id: 2,
            title: "Lorem pipsum",
            price: 100,
            location: 'Kaunas',
            timestamp: Date.now() - 1000,
            image: "https://picsum.photos/id/2/300/300",
        },
        
    ]
}

router.get('/', (req, res) => {
  res.json(exampleAds);
});

