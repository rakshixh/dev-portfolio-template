import './globals.scss';
import { colorSystem } from '../data/colors';

const defaultTheme =
  colorSystem.themes.find((theme) => theme.id === colorSystem.defaultTheme) ??
  colorSystem.themes[0];

export const metadata = {
  title: 'Rakshith Acharya — Developer & Digital Maker',
  description:
    'A thoughtful developer portfolio template for building useful, expressive digital experiences.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: defaultTheme.css['--ink'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={defaultTheme.css}>
      <body>{children}</body>
    </html>
  );
}
