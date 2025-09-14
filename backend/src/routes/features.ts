import { Elysia } from 'elysia';
import { getFeatures, getFeatureById } from '../controllers/featuresController';

const featuresRoutes = new Elysia({ prefix: '/features' })
  .get('/', () => getFeatures())
  .get('/:id', ({ params }) => getFeatureById(params.id));

export default featuresRoutes;