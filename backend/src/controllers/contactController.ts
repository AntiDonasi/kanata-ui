import { contactMessages, ContactMessage } from '../models/contact';

export const getContactMessages = (): { success: boolean; data: ContactMessage[] } => {
  return {
    success: true,
    data: contactMessages
  };
};

export const createContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt'>): { success: boolean; data?: ContactMessage; message?: string } => {
  try {
    const newMessage: ContactMessage = {
      id: (contactMessages.length + 1).toString(),
      ...message,
      createdAt: new Date()
    };
    
    contactMessages.push(newMessage);
    
    return {
      success: true,
      data: newMessage
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to create contact message'
    };
  }
};

export const getContactMessageById = (id: string): { success: boolean; data?: ContactMessage; message?: string } => {
  const message = contactMessages.find(msg => msg.id === id);
  
  if (!message) {
    return {
      success: false,
      message: `Contact message with id ${id} not found`
    };
  }
  
  return {
    success: true,
    data: message
  };
};