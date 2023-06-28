import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Caveat } from "next/font/google";
import "./globals.css";
const caveat = Caveat({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Tutorial",
  description: "This is for learning purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
      <body className={caveat.className}>
        <Navbar />
        <div style={{ paddingTop: 120 }}>{children}</div>
        <Footer />
      </body>
      {/* </Provider> */}
    </html>
  );
}
