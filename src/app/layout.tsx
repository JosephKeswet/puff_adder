import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Puff-Adder Limited - Innovative IT Solutions",
	description:
		"Empowering businesses with cutting-edge IT services and solutions",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="scroll-smooth"
		>
			<body className={`${inter.className} antialiased`}>
				<div className="flex flex-col min-h-screen bg-white dark:bg-black">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-20"></div>
					<Header />
					<main className="flex-grow relative z-10">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
