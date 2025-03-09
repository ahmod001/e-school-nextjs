import './globals.css'
import MainLayout from "./Layout/MainLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
