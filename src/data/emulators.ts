export const emulators = [
  {
    slug: 'r2nes', name: 'R2NES', system: 'Nintendo Entertainment System',
    short: 'A modern NES emulator focused on accuracy and playability.',
    accent: 'cyan', glyph: 'N', stage: 'Playable', image: '/images/r2nes-console.webp',
    features: ['Cycle-based emulation', 'Save states', 'Rewind', 'Controller support'],
    github: 'https://github.com/jpaulobf/R2NESV2'
  },
  {
    slug: 'r2boy', name: 'R2BOY', system: 'Game Boy / Game Boy Color',
    short: 'Pixel-by-pixel graphics and timing-focused handheld emulation.',
    accent: 'violet', glyph: 'B', stage: 'In development', image: '/images/r2boy-console-2.webp',
    features: ['Pixel FIFO rendering', 'Cycle-based timing', 'Game Boy / Color'],
    github: 'https://github.com/jpaulobf/R2BOY'
  },
  {
    slug: 'r2sega8', name: 'R2SEGA8', system: 'Sega 8-bit family',
    short: 'A unified foundation for exploring the classic Sega 8-bit systems.',
    accent: 'orange', glyph: 'S', stage: 'In development', image: '/images/r2sega8-console.webp',
    features: ['Shared system architecture', 'SG-1000 focus', 'More systems planned'],
    github: 'https://github.com/jpaulobf/R2SEGA8'
  }
] as const;
