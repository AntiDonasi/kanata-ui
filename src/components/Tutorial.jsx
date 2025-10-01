import React, { useState } from 'react';
import { 
  FaWhatsapp, 
  FaPlay, 
  FaDownload, 
  FaRobot, 
  FaUsers, 
  FaTools, 
  FaChevronRight,
  FaCheckCircle,
  FaCopy,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Tutorial = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [copiedCommand, setCopiedCommand] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const tutorialTabs = [
    { id: 'getting-started', label: 'Memulai', icon: FaPlay },
    { id: 'ai-features', label: 'Fitur AI', icon: FaRobot },
    { id: 'downloader', label: 'Downloader', icon: FaDownload },
    { id: 'group-management', label: 'Moderasi Grup', icon: FaUsers },
    { id: 'tools', label: 'Tools & Utilities', icon: FaTools }
  ];

  const gettingStartedSteps = [
    {
      title: "Tambahkan Bot ke Kontak",
      description: "Simpan nomor Kachina Bot ke kontak WhatsApp Anda",
      command: "+62 812-3456-7890",
      details: [
        "Buka WhatsApp di ponsel Anda",
        "Tambahkan nomor bot ke kontak",
        "Berikan nama 'Kachina Bot' untuk mudah diingat"
      ]
    },
    {
      title: "Kirim Pesan Pertama",
      description: "Mulai percakapan dengan mengirim pesan ke Kachina Bot",
      command: "/start",
      details: [
        "Buka chat dengan Kachina Bot",
        "Ketik /start untuk memulai",
        "Bot akan merespons dengan menu utama"
      ]
    },
    {
      title: "Lihat Menu Bantuan",
      description: "Gunakan command /menu untuk melihat semua fitur",
      command: "/menu",
      details: [
        "Ketik /menu kapan saja untuk melihat daftar fitur",
        "Pilih kategori yang ingin Anda gunakan",
        "Ikuti instruksi yang diberikan bot"
      ]
    }
  ];

  const aiFeatures = [
    {
      command: "/ai",
      title: "Chat dengan AI",
      description: "Berbicara dengan AI assistant yang cerdas",
      example: "/ai Jelaskan tentang fotosintesis",
      features: ["Menjawab pertanyaan", "Membantu tugas", "Diskusi topik apapun"]
    },
    {
      command: "/translate",
      title: "Terjemahan Bahasa",
      description: "Terjemahkan teks ke berbagai bahasa",
      example: "/translate en Halo, apa kabar?",
      features: ["50+ bahasa", "Deteksi otomatis", "Hasil akurat"]
    },
    {
      command: "/summary",
      title: "Ringkas Teks",
      description: "Buat ringkasan dari teks panjang",
      example: "/summary [teks panjang]",
      features: ["Ringkasan cepat", "Poin utama", "Hemat waktu"]
    }
  ];

  const downloaderFeatures = [
    {
      platform: "YouTube",
      command: "/yt",
      description: "Download video dan audio dari YouTube",
      example: "/yt https://youtube.com/watch?v=...",
      formats: ["MP4 (Video)", "MP3 (Audio)", "Berbagai kualitas"]
    },
    {
      platform: "TikTok",
      command: "/tiktok",
      description: "Download video TikTok tanpa watermark",
      example: "/tiktok https://tiktok.com/@user/video/...",
      formats: ["Video HD", "Tanpa watermark", "Audio terpisah"]
    },
    {
      platform: "Instagram",
      command: "/ig",
      description: "Download foto, video, dan story Instagram",
      example: "/ig https://instagram.com/p/...",
      formats: ["Foto HD", "Video", "Story", "Reels"]
    },
    {
      platform: "Facebook",
      command: "/fb",
      description: "Download video dari Facebook",
      example: "/fb https://facebook.com/watch?v=...",
      formats: ["Video HD", "Audio", "Berbagai resolusi"]
    }
  ];

  const groupManagement = [
    {
      feature: "Auto Moderation",
      commands: ["/antilink", "/antispam", "/antiflood"],
      description: "Moderasi otomatis untuk menjaga grup tetap aman",
      capabilities: ["Blokir link spam", "Deteksi spam", "Batasi pesan berulang"]
    },
    {
      feature: "Member Management",
      commands: ["/kick", "/promote", "/demote"],
      description: "Kelola anggota grup dengan mudah",
      capabilities: ["Keluarkan member", "Promosi admin", "Turunkan admin"]
    },
    {
      feature: "Group Settings",
      commands: ["/welcome", "/goodbye", "/rules"],
      description: "Atur pesan dan aturan grup",
      capabilities: ["Pesan selamat datang", "Pesan perpisahan", "Aturan grup"]
    }
  ];

  const toolsUtilities = [
    {
      tool: "Sticker Maker",
      command: "/sticker",
      description: "Buat sticker dari foto atau video",
      usage: "Kirim foto/video + /sticker"
    },
    {
      tool: "QR Code Generator",
      command: "/qr",
      description: "Generate QR code dari teks atau URL",
      usage: "/qr https://example.com"
    },
    {
      tool: "Text to Speech",
      command: "/tts",
      description: "Ubah teks menjadi suara",
      usage: "/tts Halo, ini adalah text to speech"
    },
    {
      tool: "URL Shortener",
      command: "/short",
      description: "Perpendek URL panjang",
      usage: "/short https://very-long-url.com/..."
    },
    {
      tool: "Weather Info",
      command: "/weather",
      description: "Cek cuaca di lokasi tertentu",
      usage: "/weather Jakarta"
    },
    {
      tool: "Random Quote",
      command: "/quote",
      description: "Dapatkan quote inspiratif random",
      usage: "/quote"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cara Memulai dengan Kachina Bot</h3>
              <p className="text-gray-600">Ikuti langkah-langkah sederhana ini untuk mulai menggunakan bot</p>
            </div>
            
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <code className="text-green-600 font-mono text-lg">{step.command}</code>
                        <button
                          onClick={() => copyToClipboard(step.command)}
                          className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors"
                        >
                          {copiedCommand === step.command ? <FaCheckCircle /> : <FaCopy />}
                          <span className="text-sm">{copiedCommand === step.command ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-600">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'ai-features':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fitur AI Assistant</h3>
              <p className="text-gray-600">Manfaatkan kekuatan AI untuk berbagai kebutuhan Anda</p>
            </div>
            
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                      <FaRobot className="text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-mono">{feature.command}</code>
                      <h4 className="text-xl font-semibold text-gray-800">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-500 mb-2">Contoh penggunaan:</p>
                      <code className="text-gray-800 font-mono">{feature.example}</code>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((feat, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'downloader':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Media Downloader</h3>
              <p className="text-gray-600">Download konten dari berbagai platform media sosial</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {downloaderFeatures.map((platform, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center">
                      <FaDownload className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">{platform.platform}</h4>
                      <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-mono">{platform.command}</code>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-500 mb-2">Contoh:</p>
                    <code className="text-gray-800 font-mono text-sm break-all">{platform.example}</code>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Format yang didukung:</p>
                    {platform.formats.map((format, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500 text-sm" />
                        <span className="text-gray-600 text-sm">{format}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'group-management':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Moderasi Grup WhatsApp</h3>
              <p className="text-gray-600">Kelola grup WhatsApp Anda dengan fitur moderasi otomatis</p>
            </div>
            
            {groupManagement.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center">
                      <FaUsers className="text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.feature}</h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {feature.commands.map((cmd, idx) => (
                        <code key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg font-mono">
                          {cmd}
                        </code>
                      ))}
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      {feature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-green-500 text-sm" />
                          <span className="text-gray-600 text-sm">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        
      case 'tools':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tools & Utilities</h3>
              <p className="text-gray-600">Berbagai tools berguna untuk kebutuhan sehari-hari</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolsUtilities.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <FaTools className="text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{tool.tool}</h4>
                  </div>
                  
                  <div className="text-center mb-4">
                    <code className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg font-mono">{tool.command}</code>
                  </div>
                  
                  <p className="text-gray-600 text-center mb-4">{tool.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Cara pakai:</p>
                    <code className="text-gray-800 font-mono text-sm">{tool.usage}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="tutorial" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaWhatsapp className="text-lg" />
            <span>Tutorial Lengkap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Panduan Lengkap
            <span className="text-green-600"> Kachina Bot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelajari cara menggunakan semua fitur Kachina Bot dengan panduan step-by-step yang mudah diikuti
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tutorialTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow-md'
                }`}
              >
                <IconComponent className="text-lg" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>

        {/* Quick Start CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Siap Mencoba Kachina Bot?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Mulai gunakan bot sekarang juga dan rasakan kemudahan semua fiturnya!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628157695152?text=/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>Mulai Chat Bot</span>
                <FaExternalLinkAlt className="text-sm" />
              </a>
              <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
                <FaPlay className="text-lg" />
                <span>Lihat Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
