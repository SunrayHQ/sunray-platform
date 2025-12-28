export const metadata = {
  title: "Sunray",
  description: "Sunray Solana Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
