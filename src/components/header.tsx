"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setDarkMode(isDarkMode);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark");
	};

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "Services", href: "/services" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<header className="bg-gray-100 dark:bg-black  backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link
							href="/"
							className="text-2xl font-bold text-blue-600 dark:text-white"
						>
							<Image
								src="/assets/Logo.png"
								width={32}
								height={32}
								className="w-8 h-8 lg:w-14 lg:h-14"
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Button
							variant="ghost"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							<span className="sr-only">Open menu</span>
							{mobileMenuOpen ? (
								<X
									className="h-6 w-6"
									aria-hidden="true"
								/>
							) : (
								<Menu
									className="h-6 w-6"
									aria-hidden="true"
								/>
							)}
						</Button>
					</div>
					<nav className="hidden md:flex space-x-10">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-base font-medium ${
									pathname === item.href
										? "text-blue-600 dark:text-white"
										: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						{/* <Button
							variant="ghost"
							size="icon"
							onClick={toggleDarkMode}
							className="mr-4"
						>
							{darkMode ? (
								<Sun className="h-5 w-5 text-gray-400" />
							) : (
								<Moon className="h-5 w-5" />
							)}
						</Button> */}
						<Button
							asChild
							className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
						>
							<Link href="/contact">Get Started</Link>
						</Button>
					</div>
				</div>
			</div>

			{mobileMenuOpen && (
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50 dark:divide-gray-800">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<Link
										href="/"
										className="text-2xl font-bold text-blue-600 dark:text-white"
									>
										Puff-Adder
									</Link>
								</div>
								<div className="-mr-2">
									<Button
										variant="ghost"
										onClick={() => setMobileMenuOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<X
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{navItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
										>
											<span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-100">
												{item.name}
											</span>
										</Link>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							{/* <Button
								variant="ghost"
								size="icon"
								onClick={toggleDarkMode}
								className="mr-4"
							>
								{darkMode ? (
									<Sun className="h-5 w-5 text-gray-400" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button> */}
							<Button
								asChild
								className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
							>
								<Link href="/contact">Get Started</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
