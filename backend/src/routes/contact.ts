import { Elysia } from 'elysia';
import { getContactMessages, createContactMessage, getContactMessageById } from '../controllers/contactController';
import { ContactMessage } from '../models/contact';

const contactRoutes = new Elysia({ prefix: '/contact' })
  .get('/', () => getContactMessages())
  .post('/', ({ body }) => createContactMessage(body as Omit<ContactMessage, 'id' | 'createdAt'>))
  .get('/:id', ({ params }) => getContactMessageById(params.id));

export default contactRoutes;
