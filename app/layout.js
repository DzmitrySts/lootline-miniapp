import "./globals.css";

export const metadata = {
  title: "LOOTLINE",
  description: "Digital drops, криптоподарки, лутбоксы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
