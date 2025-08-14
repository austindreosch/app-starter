import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Milestone',
  description: 'A starter template for Next.js apps with AlignUI, Firebase, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(fontSans.variable, 'antialiased')}>
      <body className="bg-bg-white-0 text-text-strong-950">
        {children}
      </body>
    </html>
  );
}