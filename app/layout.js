export const metadata = {
  title: "TabNews",
  description: "Implementação do TabNews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
