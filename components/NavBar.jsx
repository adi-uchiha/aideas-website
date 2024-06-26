import Image from "next/image";
import Link from "next/link";


const NavBar = async () => {

	return (
		<div className={`fixed z-10 flex items-center justify-between h-24 px-4 w-full bg-black`}>
			<Link href="/" className="font-bold flex items-center justify-between">
				<Image height={120} width={120} alt="Logo" src="/assets/logo.png" />
			</Link>
			<div className="flex items-center justify-between">
				<div className="text-2xl flex w-auto items-center justify-between max-md:hidden mr-10 gap-14">
					<Link href="/" className=" hover:text-blue-500">Home</Link>
					<Link href="/team" className=" hover:text-blue-500">Team</Link>
					<Link href="/events" className=" hover:text-blue-500">Events</Link>
					<Link href="/sponsors" className=" hover:text-blue-500">Sponsors</Link>
					<Link href="/magazines" className=" hover:text-blue-500">Magazines</Link>
					<Link href="/aboutus" className=" hover:text-blue-500">About Us</Link>
				</div>
				<div className="rounded-md bg-blue-500 px-2 py-1 cursor-pointer hover:bg-blue-700 text-2xl">Register Now</div>
			</div>
		</div>
	);
};

export default NavBar;
