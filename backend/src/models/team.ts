export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  social: {
    github?: string;
    telegram?: string;
    whatsapp?: string;
  };
}

// Sample data based on the frontend Team component
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Roy Antidonasi',
    position: 'Lead Developer',
    image: 'https://placehold.co/120x120/25d366/ffffff?text=RA',
    social: {
      github: '#',
      telegram: '#',
      whatsapp: '#'
    }
  },
  {
    id: '2',
    name: 'Kanata AI',
    position: 'Bot Intelligence',
    image: 'https://placehold.co/120x120/128c7e/ffffff?text=🤖',
    social: {
      github: '#',
      telegram: '#'
    }
  },
  {
    id: '3',
    name: 'Puan Mahalini',
    position: 'Customer Support',
    image: 'https://placehold.co/120x120/075e54/ffffff?text=ST',
    social: {
      whatsapp: '#',
      telegram: '#'
    }
  }
];