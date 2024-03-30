import { Crimson_Text } from "next/font/google";
import "./globals.css";
import NavBar from '@components/NavBar';


const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ['400','600', '700'],
});

export const metadata = {
  title: "AIDEAS - Student Association",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={crimson.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
