export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

// Sample data based on the frontend Features component
export const features: Feature[] = [
  {
    id: '1',
    icon: 'fas fa-robot',
    title: 'AI Assistant',
    description: 'Chatbot cerdas dengan AI untuk menjawab pertanyaan dan membantu berbagai kebutuhan',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    icon: 'fas fa-download',
    title: 'Media Downloader',
    description: 'Download video, audio, dan gambar dari berbagai platform seperti YouTube, TikTok, Instagram',
    color: 'bg-green-500'
  },
  {
    id: '3',
    icon: 'fas fa-shield-alt',
    title: 'Group Moderation',
    description: 'Moderasi grup otomatis dengan fitur anti-spam, welcome message, dan manajemen member',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    icon: 'fas fa-magic',
    title: 'Sticker Maker',
    description: 'Buat sticker WhatsApp dari foto atau gambar dengan mudah dan cepat',
    color: 'bg-pink-500'
  },
  {
    id: '5',
    icon: 'fas fa-volume-up',
    title: 'Text to Speech',
    description: 'Konversi teks menjadi suara dengan berbagai pilihan bahasa dan aksen',
    color: 'bg-indigo-500'
  },
  {
    id: '6',
    icon: 'fas fa-qrcode',
    title: 'QR Generator',
    description: 'Generate QR code untuk teks, URL, atau informasi lainnya dengan instant',
    color: 'bg-yellow-500'
  }
];