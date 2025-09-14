export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Sample data for contact messages
export const contactMessages: ContactMessage[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Saya tertarik dengan fitur AI Assistant, bisakah Anda memberikan informasi lebih lanjut?',
    createdAt: new Date('2023-06-15T10:30:00')
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Bagaimana cara menggunakan fitur Media Downloader untuk YouTube?',
    createdAt: new Date('2023-06-16T14:45:00')
  }
];