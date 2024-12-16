import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
							Puff-Adder Limited
						</h3>
						<p>Empowering businesses with innovative IT solutions.</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="hover:text-blue-600 dark:hover:text-white"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:text-blue-600 dark:hover:text-white"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-blue-600 dark:hover:text-white"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-blue-600 dark:hover:text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
							Contact Us
						</h3>
						<p>Email: info@puff-adder.ng</p>
						<p>Phone:+2348037008529</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>&copy; 2023 Puff-Adder Limited. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
