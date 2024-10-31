import Header from '@/components/molecules/Header/Header';
import '../styles/globals.scss';
import { metaData } from '@/consts/appMeta';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <head>
        <title>{metaData.title}</title>
        <meta name='description' content={metaData.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </head>
      <body>
        <header>
          <Header title={metaData.title} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
