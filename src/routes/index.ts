import express from 'express';
import path from 'path';
import fs from 'fs';
import { reSizeImage } from '../services/image';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
  // retreive query params
  const name: string = req.query.name as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;

  if (!name) {
    return res.json({
      message:
        "HELLO! Please add the image's name, width and height as query parameters"
    });
  }

  // const imagePath = path.resolve(
  //   `D:\\Udacity\\project_1\\assets\\images\\${name}.jpg`
  // );
  const imagePath = path.resolve(
    __dirname,
    `../../`,
    `assets\\images\\${name}.jpg`
  );
  const targetPath = path.resolve(
    __dirname,
    `../../`,
    `assets\\images\\${name}_${width}_${height}.jpg`
  );

  // check if thumbnail already exists
  if (fs.existsSync(targetPath)) return res.sendFile(targetPath);

  // create thumbnail for image
  if (fs.existsSync(imagePath)) {
    if (width && height) {
      if (isNaN(+width) || isNaN(+height)) {
        res.json({ error: 'Enter valid Numbers' });
      }
      await reSizeImage(imagePath, +width, +height, targetPath);
      res.sendFile(targetPath);
    } else res.sendFile(imagePath);
    // return error if image does not exist
  } else res.status(404).json({ error: 'image not found' });
});

export default router;
