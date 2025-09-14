import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';

// Import routes
import teamRoutes from './routes/team';
import contactRoutes from './routes/contact';
import featuresRoutes from './routes/features';

const app = new Elysia()
  .use(cors())
  .get('/', () => ({ message: 'Welcome to Kanata Bot API' }))
  .group('/api', app => {
    return app
      .use(teamRoutes)
      .use(contactRoutes)
      .use(featuresRoutes);
  })
  .listen(3000);

console.log(`🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;