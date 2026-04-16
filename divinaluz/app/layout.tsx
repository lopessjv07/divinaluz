import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Divina Luz | Assistência Familiar em Jaraguá",
  description: "Tradição e respeito cuidando da sua família há mais de 30 anos. Planos de assistência funeral completos, atendimento humanizado e cobertura nacional.",
  keywords: ["Assistência Familiar", "Plano Funerário", "Funerária", "Jaraguá", "Goiás", "Grupo Divina Luz", "Atendimento 24h", "Plano POP", "Plano VIP", "Plano MASTER", "Cremação", "Coroa de Flores"],
  openGraph: {
    title: "Grupo Divina Luz | Assistência Familiar",
    description: "Amparo completo para sua família. Conheça nossos planos flexíveis e garanta a proteção e o cuidado que quem você ama merece.",
    locale: "pt_BR",
    type: "website",
    siteName: "Grupo Divina Luz",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0 }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
