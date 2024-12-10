"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Lightbulb,
	Users,
	Zap,
	CheckCircle,
	Building,
	Globe,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/scroll-animation";

const MotionCard = motion(Card);

const reasons = [
	{
		title: "Experienced Team",
		description:
			"A team of certified professionals with expertise across diverse IT domains.",
		icon: Users,
	},
	{
		title: "Tailored Solutions",
		description:
			"Tailored services to meet the specific requirements of each client.",
		icon: Lightbulb,
	},
	{
		title: "Reliability",
		description: "High-quality, dependable solutions with proactive support.",
		icon: CheckCircle,
	},
	{
		title: "Innovative Technologies",
		description:
			"We leverage the latest tools and methodologies to drive business transformation.",
		icon: Zap,
	},
	{
		title: "Comprehensive Services",
		description:
			"A single point of contact for all IT needs, from hardware to cloud integration.",
		icon: Globe,
	},
	{
		title: "Proven Track Record",
		description:
			"A portfolio of successful projects for clients across a wide range of industries.",
		icon: Building,
	},
];

const pageLoadVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
	return (
		<div className="container mx-auto px-4 py-12">
			<ScrollAnimation variants={pageLoadVariants}>
				<h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-grey-700 dark:from-blue-400 dark:to-grey-300 animate-gradient ">
					About Puff-Adder Limited
				</h1>
			</ScrollAnimation>

			<div className="max-w-3xl mx-auto mb-12">
				<ScrollAnimation variants={pageLoadVariants}>
					<p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
						Puff-Adder Limited is a cutting-edge Information Technology (IT)
						company specializing in delivering comprehensive and innovative IT
						services to businesses of all sizes. Founded on the principles of
						excellence, reliability, and innovation, Puff-Adder is committed to
						empowering organizations with state-of-the-art technology solutions
						that enhance efficiency and drive growth.
					</p>
					<p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
						Our expertise spans Networking, Software Development, Server
						Installation and Configuration, Cloud Implementation, IT Equipment
						Supply, and IT Training. Puff-Adder takes pride in being a one-stop
						shop for all IT needs, ensuring seamless integration of technology
						into your business operations.
					</p>
				</ScrollAnimation>
			</div>

			<ScrollAnimation variants={pageLoadVariants}>
				<h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
					Why Choose Puff-Adder IT Solutions?
				</h2>
			</ScrollAnimation>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
				{reasons.map((reason, index) => (
					<ScrollAnimation
						key={reason.title}
						variants={cardVariants}
					>
						<MotionCard className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-grey-200 dark:border-grey-700 bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm card-hover-effect glassmorphism">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-grey-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<CardContent className="flex flex-col items-center p-6 relative z-10">
								<reason.icon className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
								<h3 className="text-xl font-semibold mb-2 text-grey-800 dark:text-grey-200">
									{reason.title}
								</h3>
								<p className="text-center text-grey-600 dark:text-grey-300">
									{reason.description}
								</p>
							</CardContent>
						</MotionCard>
					</ScrollAnimation>
				))}
			</div>

			<ScrollAnimation variants={pageLoadVariants}>
				<h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
					Our Clientele
				</h2>
				<p className="mb-12 text-lg text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto">
					We serve a diverse range of industries, including finance, healthcare,
					education, retail, and manufacturing. Our solutions are scalable and
					adaptable to meet the needs of both SMEs and large enterprises.
				</p>
			</ScrollAnimation>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<ScrollAnimation variants={cardVariants}>
					<MotionCard className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm card-hover-effect glassmorphism">
						<CardContent className="p-6 relative z-10">
							<h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
								Nigerian Office
							</h3>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Flat 1, Magaji Estate, Miri Drive Rayfield, Jos
							</p>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Phone: +234 803700 8529
							</p>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Email: puffadderltd@gmail.com
							</p>
							<p className="text-slate-600 dark:text-slate-300">
								Website: www.puff-adder.ng
							</p>
						</CardContent>
					</MotionCard>
				</ScrollAnimation>
				<ScrollAnimation variants={cardVariants}>
					<MotionCard className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm card-hover-effect glassmorphism">
						<CardContent className="p-6 relative z-10">
							<h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
								UK Office
							</h3>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Flat 9, Eagle Court, Drinkwater Road, London
							</p>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Phone: +44 7565460792
							</p>
							<p className="text-slate-600 dark:text-slate-300 mb-2">
								Email: puffadderltd@gmail.com
							</p>
							<p className="text-slate-600 dark:text-slate-300">
								Website: www.puff-adder.net
							</p>
						</CardContent>
					</MotionCard>
				</ScrollAnimation>
			</div>

			<ScrollAnimation variants={pageLoadVariants}>
				<div className="bg-gradient-to-r from-blue-600 to-grey-700 text-white rounded-lg p-8 text-center relative overflow-hidden group animate-float">
					<div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
					<div className="relative z-10">
						<h2 className="text-3xl font-bold mb-4">
							Ready to Transform Your IT Infrastructure?
						</h2>
						<p className="mb-8 max-w-2xl mx-auto">
							Choose Puff-Adder Limited as your IT partner, and experience the
							difference that comes with working with a company that truly cares
							about your success. Let us help you navigate the complex world of
							technology and unlock your business's full potential.
						</p>
						<Button
							asChild
							variant="secondary"
							size="lg"
							className="rounded-full bg-white text-blue-600 hover:bg-grey-100 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<Link href="/contact">Get Started Today</Link>
						</Button>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	);
}
