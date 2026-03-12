# CalTech Web

Next.js 16, React 19, TypeScript, Tailwind CSS v4
Deployed on Vercel: https://caltechweb.vercel.app
Production: https://caltechweb.com
Local dev: http://localhost:3006

## Run Agents

WORK=/Users/brandonhopkins/Projects/caltechweb/agents/cro-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/discovery-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/visual-enhancement-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
