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
    title: 'AI Chat (Gemini/Llama/Qwen)',
    description: 'Chat dengan AI: Gemini, Llama (Groq), Qwen. Dukungan Vision, TTS, dan Speech-to-Text',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    icon: 'fas fa-download',
    title: 'Media Downloader',
    description: 'YouTube (audio/video kualitas), TikTok (tanpa watermark, audio), Threads, Mediafire, Spotify',
    color: 'bg-green-500'
  },
  {
    id: '3',
    icon: 'fas fa-shield-alt',
    title: 'Group Moderation',
    description: 'Welcome/Leave, anti-link, anti-toxic, tagall, promote/demote/kick, info & settings grup',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    icon: 'fas fa-magic',
    title: 'Sticker Maker',
    description: 'Sticker dari gambar/video dengan kualitas tinggi. Konversi sticker→image juga tersedia',
    color: 'bg-pink-500'
  },
  {
    id: '5',
    icon: 'fas fa-volume-up',
    title: 'Text to Speech',
    description: 'TTS AI (Groq) dengan kualitas suara natural. Dukungan banyak bahasa',
    color: 'bg-indigo-500'
  },
  {
    id: '6',
    icon: 'fas fa-camera',
    title: 'Website Screenshot',
    description: 'Tangkap screenshot website (desktop/tablet/mobile) via perintah ssweb',
    color: 'bg-yellow-500'
  },
  {
    id: '7',
    icon: 'fas fa-image',
    title: 'Image Upscale',
    description: 'Perbesar resolusi gambar hingga 4x dan tingkatkan kualitas secara otomatis',
    color: 'bg-teal-500'
  }
];
