<script lang="ts">
	import hero from "$lib/images/hero.jpg";
	import Product from "./Product.svelte";
	import Chip from "./Chip.svelte";

	import unittoImg from "$lib/images/unitto.png";
	import indexxoImg from "$lib/images/indexxo.png";
	import sadbotImg from "$lib/images/sadbot.png";
	import sampleImg from "$lib/images/sample.png";
	import qrcodeImg from "$lib/images/qrcode.png";
	import webImg from "$lib/images/web.png";
	import secretImg from "$lib/images/secret.png";
	import contact1 from "$lib/images/contact.png";

	import Contact from "./Contact.svelte";
	import Email from "./Email.svelte";
	import Github from "./Github.svelte";
	import Telegram from "./Telegram.svelte";
</script>
<div class="flex flex-col place-items-center p-8 bg-blue-50 dark:bg-blue-950 text-black dark:text-white">
	<div
		class="flex flex-col py-16 xl:py-32 rounded-3xl place-items-center gap-8 bg-center bg-cover w-full relative dark:invert"
		style="background-image: url({hero});"
	>
		<div class="flex flex-col place place-items-center dark:invert">
			<p class="text-6xl md:text-8xl xl:text-9xl text-center font-medium">
				Hari Moradiya
			</p>
			<p class="text-xl md:text-2xl text-center"></p>
		</div>
		<a href="#contact">
			<button
				class="py-6 px-12 bg-blue-600 dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors rounded-full text-2xl font-medium text-white dark:invert"
			>
				Contact
			</button>
		</a>
	</div>

	<div class="max-w-screen-xl text-black dark:text-blue-50">
		<p class="text-4xl font-medium pt-16 pb-4 w-full">Who is Hari Moradiya?</p>

		<p class="w-full text-lg pb-2">
			Hello, my name is Hari. I am an experienced:
		</p>
		<ol class="flex flex-col w-full gap-6 text-xl font-medium">
			<div class="flex flex-col gap-2">
				<p>1. System analyst</p>
				<div class="flex flex-wrap gap-2">
					<Chip>UML</Chip>
					<Chip>OpenAPI</Chip>
					<Chip>Linux</Chip>
					<Chip>Documentation</Chip>
					<Chip>Git</Chip>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p>2. Business analyst</p>
				<div class="flex flex-wrap gap-2">
					<Chip>BPMN 2.0</Chip>
					<Chip>Market analysis</Chip>
					<Chip>Project management</Chip>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p>3. Designer</p>
				<div class="flex flex-wrap gap-2">
					<Chip>Figma</Chip>
					<Chip>Photoshop</Chip>
					<Chip>Davince Resolve</Chip>
					<Chip>Material design</Chip>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p>4. Developer</p>
				<div class="flex flex-wrap gap-2">
					<Chip>Mobile</Chip>
					<Chip>Web</Chip>
					<Chip>Console</Chip>
					<Chip>Desktop</Chip>
				</div>
			</div>
		</ol>

		<p class="text-4xl font-medium pt-16 pb-4 w-full">
			Successful products
		</p>

		<div
			class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch"
		>
			<div>
				<Product
					title="Stopwatch"
					support="It is built using Kotlin and leverages Android and Jetpack libraries to provide a robust and efficient stopwatch experience. "
					imgSrc={sampleImg}
					href="https://github.com/harimoradiya/WearOS-Stopwatch"
				/>
			</div>
			<div>
				<Product
					title="QR Code Generator"
					support="This open-source tool allows users to quickly and easily generate QR codes for various purposes."
					imgSrc={qrcodeImg}
					href="https://github.com/harimoradiya/QR-Code-Generator"
				/>
			</div>
			
		</div>

		<p class="text-4xl font-medium pt-16 pb-4 w-full">Failed products</p>

		<p>This list is empty</p>

		<p class="text-4xl font-medium pt-16 pb-4 w-full">Contact</p>

		<div
			class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch"
			id="contact"
		>
			<Contact
				title="Github"
				href="https://github.com/harimoradiya"
				img={contact1}
			>
				<Github />
			</Contact>

			<Contact
				title="Email"
				href="mailto:harimoradiya123@gmail.com"
				img={contact1}
			>
				<Email />
			</Contact>

			<Contact
				title="Telegram"
				href="https://t.me/harimoradiyaa"
				img={contact1}
			>
				<Telegram />
			</Contact>
		</div>
	</div>
	<footer>
		<div class="pt-16">
			<p>
				Photos by <a
					class="font-medium text-blue-600 hover:text-blue-900 hover:underline"
					href="https://unsplash.com/@orlovamaria">Maria Orlova</a
				>,
				<a
					class="font-medium text-blue-600 hover:text-blue-900 hover:underline"
					href="https://unsplash.com/@philipsfuture"
					>Philip Oroni</a
				>
				and
				<a
					class="font-medium text-blue-600 hover:text-blue-900 hover:underline"
					href="https://unsplash.com/@pawel_czerwinski"
					>Pawel Czerwinski</a
				>
				on
				<a
					class="font-medium text-blue-600 hover:text-blue-900 hover:underline"
					href="https://unsplash.com/">Unsplash</a
				>
			</p>
		</div>
	</footer>
</div>
