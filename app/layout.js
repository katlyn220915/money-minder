import { Navbar } from "@/components";

export const metadata = {
  title: "Money minder - 您的記帳小幫手",
  description: "你今天記帳了嗎？快快來記帳！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
