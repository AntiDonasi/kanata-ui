import { teamMembers, TeamMember } from '../models/team';

export const getTeamMembers = (): { success: boolean; data: TeamMember[] } => {
  return {
    success: true,
    data: teamMembers
  };
};

export const getTeamMemberById = (id: string): { success: boolean; data?: TeamMember; message?: string } => {
  const member = teamMembers.find(member => member.id === id);
  
  if (!member) {
    return {
      success: false,
      message: `Team member with id ${id} not found`
    };
  }
  
  return {
    success: true,
    data: member
  };
};