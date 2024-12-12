"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	CheckCircle,
	Zap,
	Cloud,
	Server,
	Code,
	Network,
	Laptop,
} from "lucide-react";

export default function Home() {
	return (
		<div className=" mx-auto  py-12 space-y-[150px]">
			<section className="text-center mb-16 px-0 lg:px-[170px] py-[50px]">
				<h1 className="h-auto pb-4  text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-700 dark:from-blue-400 dark:to-grey-300 animate-fade-in-up">
					Empower Your Business with Cutting-Edge IT
				</h1>
				<p className="text-xl mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
					Puff-Adder delivers innovative IT solutions to drive your business
					forward in the digital age.
				</p>
				<div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
					<Button
						asChild
						size="lg"
						className="group rounded-full bg-gradient-to-r from-blue-600 to-grey-700 hover:from-blue-700 hover:to-grey-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<Link href="/contact">
							Get Started{" "}
							<ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<Link href="/services">Our Services</Link>
					</Button>
				</div>
			</section>

			<section className="mb-16 border py-[50px] ">
				<h2 className=" text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200 animate-fade-in-up">
					Our Services
				</h2>
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ name: "Networking", icon: Network },
						{ name: "Software Development", icon: Code },
						{ name: "Server Installation", icon: Server },
						{ name: "Cloud Implementation", icon: Cloud },
						{ name: "IT Equipment Supply", icon: Laptop },
						{ name: "IT Training", icon: Zap },
					].map((service, index) => (
						<div
							key={service.name}
							onClick={() => {}}
							className="bg-white/80 dark:bg-grey-800/80  p-6 rounded-[8px] shadow-sm hover:shadow-sm transition-all duration-300 transform hover:-translate-y-1 border border-grey-100 dark:border-grey-700 overflow-hidden group animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-grey-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<div className="relative z-10">
								<div className="w-12 h-12 bg-white dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
									<service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-grey-800 dark:text-grey-200">
									{service.name}
								</h3>
								<p className="text-grey-600 dark:text-grey-400 mb-4">
									Providing top-notch {service.name.toLowerCase()} solutions for
									businesses of all sizes.
								</p>
								<Link
									href="/services"
									className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center font-medium group"
								>
									Learn more{" "}
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="text-center mb-16 ">
				<h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200 animate-fade-in-up">
					Why Choose Puff-Adder?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
					{[
						"Expertise in cutting-edge technologies",
						"Tailored solutions for your business",
						"Reliable and responsive support",
					].map((reason, index) => (
						<div
							key={reason}
							className="flex items-center bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm p-4 rounded-lg shadow-md group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<CheckCircle className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
							<p className="text-left text-grey-600 dark:text-grey-300">
								{reason}
							</p>
						</div>
					))}
				</div>
				<Button
					asChild
					variant="outline"
					className="mt-8 rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-300"
				>
					<Link href="/about">Learn More About Us</Link>
				</Button>
			</section>

			<section className="container bg-gradient-to-r from-blue-600 to-grey-700 text-white rounded-lg p-8 text-center relative overflow-hidden group animate-fade-in-up">
				<div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
				<div className="relative z-10">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Transform Your IT Infrastructure?
					</h2>
					<p className="mb-8 max-w-2xl mx-auto">
						Let&apos;s work together to create a tailored IT solution that
						drives your business forward.
					</p>
					<Button
						asChild
						variant="secondary"
						size="lg"
						className="rounded-full bg-white text-blue-600 hover:bg-grey-100 shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<Link href="/contact">Contact Us Today</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
