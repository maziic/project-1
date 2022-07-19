import sharp from 'sharp';

export const reSizeImage = async (
  path: string,
  width: number,
  height: number,
  target: string
): Promise<void> => {
  await sharp(path).resize(width, height).toFormat('jpg').toFile(target);
};
