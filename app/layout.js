import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Excellent tution app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-cyan-100 bg-gradient-to-br from-cyan-500 to-blue-200">
          <Navbar />
          {children}
          <Toaster
          
            position="top-center"
            toastOptions={{
              className: "bg-yellow-500",
              duration: 700,
              style: {
                background: '#FFFFFF',
                color: '#000000',
                fontWeight: '600', 
              },
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                }
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
