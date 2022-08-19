import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test endpoint', (): void => {
  describe('endpoint', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');

      expect(response.status).toBe(200);
    });
  });

  describe('endpoint with images', (): void => {
    it('gets non-existing image', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/?name=fake-eyes&width=200&height=200'
      );

      expect(response.status).toBe(404);
    });

    it('gets image with wrong parameters', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/?name=fake-eyes&widthh=200&height=200'
      );

      expect(response.status).toBe(404);
    });

    it('gets resized image', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/?name=eyes&width=200&height=200'
      );

      expect(response.status).toBe(200);
    });
  });
});
