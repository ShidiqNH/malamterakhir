export interface VideoNode {
  id: string;
  videoUrl: string;
  choices?: {
    text: string;
    nextVideoId: string;
  }[];
  isEnding?: boolean;
}

export const videoData: Record<string, VideoNode> = {
  // Starting video
  start: {
    id: 'start',
    videoUrl: 'https://player.vimeo.com/video/1045474811',
    choices: [
      { text: 'Pulang', nextVideoId: 'pulang' },
      { text: 'Ekspedisi', nextVideoId: 'ekspedisi' }
    ]
  },

  pulang: {
    id: 'pulang',
    videoUrl: 'https://player.vimeo.com/video/1045475531',
    isEnding: true
  },

  ekspedisi: {
    id: 'ekspedisi',
    videoUrl: 'https://player.vimeo.com/video/1045476040',
    choices: [
      { text: 'Lanjut', nextVideoId: 'lanjut' },
      { text: 'Pulang', nextVideoId: 'pulang2' }
    ]
  },

  lanjut: {
    id: 'lanjut',
    videoUrl: 'https://player.vimeo.com/video/1045482770',
    choices: [
      { text: 'Tanya mahasiswa', nextVideoId: 'tanya' },
      { text: 'Explore', nextVideoId: 'Explore' }
    ]
  },

  pulang2: {
    id: 'pulang2',
    videoUrl: 'https://player.vimeo.com/video/1045479305',
    isEnding: true
  },

  // Endings
  tanya: {
    id: 'tanya',
    videoUrl: 'https://player.vimeo.com/video/1045482608',
    choices: [
      { text: 'Kabur', nextVideoId: 'pulang3' },
      { text: 'Lanjut expedisi', nextVideoId: 'lanjut2' }
    ]
  },

  lanjut2: {
    id: 'lanjut2',
    videoUrl: 'https://player.vimeo.com/video/1045500737',
    choices: [
      { text: 'Check sumber suara', nextVideoId: 'check' },
      { text: 'Explore tempat lain', nextVideoId: 'expparkiran' }
    ]
  },

  expparkiran: {
    id: 'expparkiran',
    videoUrl: 'https://player.vimeo.com/video/1045503306',
    isEnding: true
  },

  pulang3: {
    id: 'pulang3',
    videoUrl: 'https://player.vimeo.com/video/1045504040',
    isEnding: true
  },

  check: {
    id: 'check',
    videoUrl: 'https://player.vimeo.com/video/1045500846',
    isEnding: true
  },

  Explore: {
    id: 'Explore',
    videoUrl: 'https://player.vimeo.com/video/1045573669',
    choices: [
      { text: 'Diam di kamar mandi', nextVideoId: 'diam' },
      { text: 'Kabur', nextVideoId: 'kabur' }
    ]
  },

  diam: {
    id: 'diam',
    videoUrl: 'https://player.vimeo.com/video/1045488018',
    isEnding: true
  },

  kabur: {
    id: 'kabur',
    videoUrl: 'https://player.vimeo.com/video/1045487815',
    isEnding: true
  },

  regret_ending: {
    id: 'regret_ending',
    videoUrl: 'https://player.vimeo.com/video/1044548370',
    isEnding: true
  }
};