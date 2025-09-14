import { Elysia } from 'elysia';
import { getTeamMembers, getTeamMemberById } from '../controllers/teamController';

const teamRoutes = new Elysia({ prefix: '/team' })
  .get('/', () => getTeamMembers())
  .get('/:id', ({ params }) => getTeamMemberById(params.id));

export default teamRoutes;