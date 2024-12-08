"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import {
	CheckCircle,
	Network,
	Code,
	Server,
	Cloud,
	Laptop,
	Zap,
	BarChart,
	Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/scroll-animation";

const services = [
	{
		title: "Networking Solutions",
		icon: Network,
		description:
			"Design, deployment, and management of robust network infrastructures.",
		features: [
			"LAN/WAN configurations, VPNs, VLANs",
			"Network security solutions",
			"Network monitoring and optimization",
			"Minimal downtime and enhanced performance",
		],
	},
	{
		title: "Software Development",
		icon: Code,
		description: "Custom software solutions tailored to business requirements.",
		features: [
			"Full-stack development (web, mobile, desktop)",
			"Agile methodologies for rapid delivery",
			"Modern languages: Python, Java, .NET, etc.",
			"High-quality, scalable solutions",
		],
	},
	{
		title: "Server Installation and Configuration",
		icon: Server,
		description:
			"Deployment and configuration of dedicated, virtual, and cloud-based servers.",
		features: [
			"Linux and Windows Server expertise",
			"High-availability and load-balancing",
			"Server security hardening",
			"Performance optimization",
		],
	},
	{
		title: "Cloud Implementation",
		icon: Cloud,
		description: "Comprehensive cloud migration and management services.",
		features: [
			"AWS, Azure, GCP migration",
			"Hybrid and multi-cloud environments",
			"Cloud-based storage and disaster recovery",
			"Secure on-premise to cloud integration",
		],
	},
	{
		title: "IT Equipment Supply",
		icon: Laptop,
		description:
			"Procurement and supply of high-quality IT hardware and software.",
		features: [
			"Servers, networking devices, laptops",
			"Partnerships with leading tech brands",
			"Latest equipment access",
			"Solutions for varying business needs",
		],
	},
	{
		title: "IT Training",
		icon: Zap,
		description: "Professional training programs for individuals and teams.",
		features: [
			"Networking, cloud, cybersecurity training",
			"Programming language courses",
			"Hands-on workshops",
			"Certification prep (AWS, Cisco, Microsoft)",
		],
	},
	{
		title: "Data Analysis and Business Intelligence",
		icon: BarChart,
		description: "Advanced data analytics for actionable business insights.",
		features: [
			"BI dashboards and visualization tools",
			"Statistical modeling and reporting",
			"Data-driven decision-making support",
			"Operational optimization insights",
		],
	},
	{
		title: "Machine Learning Models",
		icon: Brain,
		description: "Development and deployment of custom AI solutions.",
		features: [
			"Predictive analytics models",
			"Natural Language Processing (NLP)",
			"Image recognition systems",
			"AI tailored to business needs",
		],
	},
];

const MotionCard = motion(Card);

const pageLoadVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants = {
	hidden: { scale: 0, rotate: -180 },
	visible: {
		scale: 1,
		rotate: 0,
		transition: { type: "spring", stiffness: 260, damping: 20 },
	},
};

const featureVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Services() {
	return (
		<div className="container mx-auto px-4 py-12">
			<ScrollAnimation variants={pageLoadVariants}>
				<h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-slate-700 dark:from-purple-400 dark:to-slate-300 animate-gradient text-glow">
					Our Core Services
				</h1>
			</ScrollAnimation>
			<ScrollAnimation variants={pageLoadVariants}>
				<p className="text-xl text-slate-600 dark:text-slate-300 mb-12 text-center max-w-3xl mx-auto">
					Discover our comprehensive range of cutting-edge IT services designed
					to empower your business, drive growth, and keep you at the forefront
					of technological innovation.
				</p>
			</ScrollAnimation>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<ScrollAnimation
						key={service.title}
						variants={cardVariants}
					>
						<MotionCard
							className="overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm card-hover-effect glassmorphism"
							whileHover={{ scale: 1.03 }}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							<CardHeader className="relative z-10">
								<motion.div
									className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4"
									variants={iconVariants}
								>
									<service.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
								</motion.div>
								<CardTitle className="text-2xl text-slate-800 dark:text-slate-200">
									{service.title}
								</CardTitle>
								<CardDescription className="text-slate-600 dark:text-slate-400">
									{service.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="relative z-10">
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<motion.li
											key={feature}
											className="flex items-center"
											variants={featureVariants}
											custom={featureIndex}
										>
											<CheckCircle className="text-purple-500 dark:text-purple-400 mr-2 h-5 w-5 flex-shrink-0" />
											<span className="text-slate-700 dark:text-slate-300">
												{feature}
											</span>
										</motion.li>
									))}
								</ul>
							</CardContent>
						</MotionCard>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
}
