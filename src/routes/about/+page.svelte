<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Sacha LAHLOU, ML engineer</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm a freelance ML engineer who strongly believes that accurately engineered data is the secret sauce to a successful AI project. Coming from 42 School, I'm skilled at conducting projects, working in team, adapting to new technologies, and explaining my work in a clear and pedagogical way.
			I also hold a bachelor's degree in business administration, which gives me a good understanding of a company's needs and challenges.
			After a six-month internship as a research engineer at PMU, where I built data pipelines for training state-of-the-art vision models, I realized both the significant time investment required for data engineering and the immense impact a well-structured dataset can have on a project's success.
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
