<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaPhone from 'svelte-icons/fa/FaPhone.svelte';
	
	import { modalOpened } from '$lib/store';
	import { onMount } from 'svelte';
	import { whatToDisplay } from '$lib/store';


	// Arrays for the scrolling text
	const dataSources = ["Scrapping", "Internal data", "Survey", "APIs", "public datasets"];
	const dataFormats = ["HF dataset 🤗​", "SQL db", "Vectorisation", "JSON", "CSV", "CoT"];
	const models = ["LLM", "Encoder Only", "Vision", "classificator", "clustering", "GPT", "Llama", "Grok", "..."];
	const interfaces = ["Chat bot", "API", "Dashboard", "Web app"];

	// Variables to track current indices
	let currentSourceIndex = 0;
	let currentFormatIndex = 0;
	let currentModelIndex = 0;
	let currentInterfaceIndex = 0;

	// Function to handle the cycling of text
	onMount(() => {
		const sourceInterval = setInterval(() => {
			currentSourceIndex = (currentSourceIndex + 1) % dataSources.length;
		}, 2000);

		const formatInterval = setInterval(() => {
			currentFormatIndex = (currentFormatIndex + 1) % dataFormats.length;
		}, 2200); // Slightly offset timing

		const modelInterval = setInterval(() => {
			currentModelIndex = (currentModelIndex + 1) % models.length;
		}, 2400); // Slightly offset timing

		const interfaceInterval = setInterval(() => {
			currentInterfaceIndex = (currentInterfaceIndex + 1) % interfaces.length;
		}, 2600); // Slightly offset timing

		return () => {
			clearInterval(sourceInterval);
			clearInterval(formatInterval);
			clearInterval(modelInterval);
			clearInterval(interfaceInterval);
		};
	});
</script>

<svelte:head>
	<title>Sacha LAHLOU - Main page</title>
</svelte:head>
<main>
	<div class="profile-section">
		<!-- Profile Picture -->
		<div class="profile-picture">
			<img src="/slahlou.JPG" alt="Sacha LAHLOU" />
		</div>
		
		<div class="text-content">
			<h1>Hi! I'm Sacha LAHLOU 🖖<br />I'm a Machine Learning engineer 💻 <br /> I'm based in France</h1>
			
			<!-- Dynamic offer description -->
			<div class="offer-description">
				<p class="offer-heading">Together we can:</p>
				<ul>
					<li>
						Find a data source: <span class="dynamic-text">{dataSources[currentSourceIndex]}</span>
					</li>
					<li>
						Define a data format: <span class="dynamic-text">{dataFormats[currentFormatIndex]}</span>
					</li>
					<li>
						Connect a model: <span class="dynamic-text">{models[currentModelIndex]}</span>
					</li>
					<li>
						Define an interface for your data: <span class="dynamic-text">{interfaces[currentInterfaceIndex]}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="icons">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
				whatToDisplay.set("email")
			}}
			on:click={() => {
				modalOpened.set(true);
				whatToDisplay.set("email")
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</div>
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
				whatToDisplay.set("phone")
			}}
			on:click={() => {
				modalOpened.set(true);
				whatToDisplay.set("phone")
			}}
		>
			<div class="icon">
				<FaPhone />
			</div>
		</div>
		<a
			href="https://github.com/LahlouS"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/sacha-lahlou/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0 20px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
		max-width: 1000px;
	}

	/* New profile section layout */
	.profile-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 40px;
		width: 100%;
	}

	/* Text content container */
	.text-content {
		text-align: left;
		margin-top: 20px;
	}

	h1 {
		font-weight: 700;
		font-size: 22px; /* Reduced size */
		margin: 0;
		line-height: 1.3;
	}

	.offer-description {
		margin-top: 15px;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.9);
	}

	.offer-heading {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.offer-description ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.offer-description li {
		margin-bottom: 8px;
		font-size: 16px;
	}

	.dynamic-text {
		color: #4158d0;
		font-weight: 600;
		min-width: 120px;
		display: inline-block;
		transition: opacity 0.3s ease;
		animation: fadeInOut 0.7s ease;
	}

	@keyframes fadeInOut {
		0% { opacity: 0.2; }
		50% { opacity: 1; }
		100% { opacity: 1; }
	}

	/* Profile Picture Styles */
	.profile-picture {
		width: 120px; /* Slightly smaller */
		height: 120px; /* Slightly smaller */
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid #4158d0;
	}

	.profile-picture img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		max-width: 200px;
		margin: 0 auto;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #4158d0;
	}

	/* Media Queries for responsive design */
	@media (min-width: 768px) {
		.profile-section {
			flex-direction: row;
			justify-content: center;
			text-align: left;
			gap: 40px;
			align-items: flex-start; /* Align items to the top */
		}
		
		.text-content {
			margin-top: 0;
		}
		
		h1 {
			font-size: 24px; /* Slightly increased for desktop but still smaller */
		}
		
		.profile-picture {
			width: 300px;
			height: 300px;
		}
	}

	@media (min-width: 900px) {
		h1 {
			font-size: 26px; /* Slightly increased for larger screens */
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>