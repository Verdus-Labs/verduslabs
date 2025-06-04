import localFont from 'next/font/local';

export const aktivGrotesk = localFont({
  src: [
    {
      path: '../../public/AktivVariableFonts/AktivGroteskVF_Trial_Wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../public/AktivVariableFonts/AktivGroteskVF_Trial_WghtWdth.ttf',
      style: 'normal',
      weight: '100 900',
      // Note: Next.js font loader doesn't support font-stretch in this format,
      // but the variable font will still work with CSS font-stretch property
    },
    {
      path: '../../public/AktivVariableFonts/AktivGroteskVF_Trial_WghtWdthItal.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-aktiv-grotesk',
  display: 'swap',
}); 