import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-muted text-muted-foreground">
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Puff-Adder Limited</h3>
						<p>Empowering businesses with innovative IT solutions.</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="hover:underline"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:underline"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:underline"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:underline"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p>Email: info@puff-adder.com</p>
						<p>Phone: +1 (123) 456-7890</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>&copy; 2023 Puff-Adder Limited. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
