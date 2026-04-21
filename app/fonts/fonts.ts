import localFont from 'next/font/local'

export const korataki = localFont({
  src: [
    { path: 'korataki/korataki-book-italic.otf',              weight: '400', style: 'italic' },
    { path: 'korataki/korataki-book.otf',                     weight: '400', style: 'normal' }
  ],
  variable: '--font-korataki',
  display: 'swap'
})

export const ppnikkeimaru = localFont({
  src: [
    { path: 'pp-nikkei-maru/ppnikkeimaru-light-italic.otf',   weight: '300', style: 'italic' },
    { path: 'pp-nikkei-maru/ppnikkeimaru-light.otf',          weight: '300', style: 'normal' },
    { path: 'pp-nikkei-maru/ppnikkeimaru-regular-italic.otf', weight: '400', style: 'italic' },
    { path: 'pp-nikkei-maru/ppnikkeimaru-regular.otf',        weight: '400', style: 'normal' },
    { path: 'pp-nikkei-maru/ppnikkeimaru-ultrabold.otf',      weight: '800', style: 'normal' }
  ],
  variable: '--font-pp-nikkei',
  display: 'swap'
})

export const cmuconcrete = localFont({
  src: [
    { path: 'cmu-concrete/cmuconcrete-nobi.ttf', weight: '800', style: 'italic' },
    { path: 'cmu-concrete/cmuconcrete-nobx.ttf', weight: '800', style: 'normal' },
    { path: 'cmu-concrete/cmuconcrete-noti.ttf', weight: '400', style: 'italic' },
    { path: 'cmu-concrete/cmuconcrete-norm.ttf', weight: '400', style: 'normal' }
  ],
  variable: '--font-cmu-concrete',
  display: 'swap'
})
