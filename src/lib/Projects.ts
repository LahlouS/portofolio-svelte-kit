const projects = [
	{
		title: 'MIRANDA',
		technologies: ['GCP', 'PostgresSQL:pgvector', "HF 🤗​ Sentence Transformer", "FastAPI", "Sveltekit"],
		description:
			'Miranda is an AI powered ranking system that help online brand to find the perfect ambassor for their products.\nMIRANDA transform product marketing description into social media post format and find the best mathcing user based on different metrics:\n- emotional score\n- factual score\n- quantitative metrics: number of followers, likes ...',
		url: 'https://miranda.slahlou.tech/'
	},
	{
		title: 'DBM ad-hoc survey to LLM training DS',
		technologies: ['HF 🤗​ Datasets', 'Qwen', 'LLama / GPT'],
		description:
			'In partnership with DBM (Database Marketing), an agricultural and animal health survey consulting company, we developed an automated pipeline that converts audio from ad-hoc surveys into text (Qwen). This process creates a structured, ready-to-use dataset (GPT) for training a specialized LLM (GPT2, Llama) designed to support expert decision-making in agriculture and animal health.',
		url: 'https://dbmarketing.fr/'
	},
	{
		title: 'Graph rag email generator',
		technologies: ['LLama3.1', 'Langchain', 'neo4j', "python", "Gradio", "cypher", "Recommendation algo"],
		description: 'A simple Graph rag email generator based on customer buying pattern',
		url: 'https://github.com/LahlouS/recommendation_agent_rag'
	}
];

export default projects;
