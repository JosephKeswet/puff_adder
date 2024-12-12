import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-grey-700 dark:from-blue-400 dark:to-grey-300 animate-fade-in-up">
				Contact Us
			</h1>
			<div className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm animate-fade-in-up">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-grey-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<CardHeader className="relative z-10">
							<CardTitle>Get in Touch</CardTitle>
							<CardDescription>
								Fill out the form and we&apos;ll get back to you as soon as
								possible.
							</CardDescription>
						</CardHeader>
						<CardContent className="relative z-10">
							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
									>
										Name
									</label>
									<Input
										id="name"
										placeholder="Your name"
										required
										className="bg-white/50 dark:bg-slate-800/50"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
									>
										Email
									</label>
									<Input
										id="email"
										type="email"
										placeholder="Your email"
										required
										className="bg-white/50 dark:bg-slate-800/50"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
									>
										Message
									</label>
									<Textarea
										id="message"
										placeholder="Your message"
										required
										className="bg-white/50 dark:bg-slate-800/50"
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-gradient-to-r from-blue-600 to-grey-700 hover:from-blue-700 hover:to-grey-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
								>
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>
					<Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-grey-800/80 backdrop-blur-sm animate-fade-in-up animation-delay-200">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-grey-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<CardHeader className="relative z-10">
							<CardTitle>Contact Information</CardTitle>
							<CardDescription>
								You can also reach us using the following information.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 relative z-10">
							<div className="flex items-center group">
								<Mail className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
								<span className="text-slate-700 dark:text-slate-300">
									info@puff-adder.com
								</span>
							</div>
							<div className="flex items-center group">
								<Phone className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
								<span className="text-slate-700 dark:text-slate-300">
									+1 (123) 456-7890
								</span>
							</div>
							<div className="flex items-center group">
								<MapPin className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
								<span className="text-slate-700 dark:text-slate-300">
									123 Tech Street, IT City, 12345
								</span>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
