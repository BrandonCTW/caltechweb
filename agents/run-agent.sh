#!/usr/bin/env bash
# CalTech Web Agent Runner
# Usage: ./run-agent.sh [redesign] [model] [loops]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
MODEL="${2:-opus}"
LOOPS="${3:-15}"
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
ENGINE="$HOME/Projects/claude-lab/ENGINE/run.sh"
AGENTS_DIR="$PROJECT_ROOT/agents"

# Check if ENGINE exists
if [ ! -f "$ENGINE" ]; then
    echo -e "${RED}❌ ENGINE not found at: $ENGINE${NC}"
    echo "Please verify the ENGINE path is correct."
    exit 1
fi

# Help function
show_help() {
    echo -e "${BLUE}CalTech Web Agent Runner${NC}"
    echo ""
    echo "Usage: ./run-agent.sh [agent] [model] [loops]"
    echo ""
    echo "Agents:"
    echo "  discover  - One-time: crawl caltechweb.com and write output/pages-queue.md"
    echo "  redesign  - Visual redesign: analyze and improve UI/design (recommended: opus, 20 loops)"
    echo ""
    echo "Models:"
    echo "  opus      - Best quality, slower (default)"
    echo "  sonnet    - Good balance"
    echo "  haiku     - Fast, lower quality"
    echo ""
    echo "Examples:"
    echo "  ./run-agent.sh discover              # Crawl live site, build pages-queue.md (run once)"
    echo "  ./run-agent.sh redesign              # Redesign with opus, 15 loops"
    echo "  ./run-agent.sh redesign sonnet 10    # Redesign with sonnet, 10 loops"
    echo "  ./run-agent.sh redesign opus 30      # Redesign with opus, 30 loops"
    echo ""
    echo "Prerequisites:"
    echo "  - Dev server running on port 3006: npm run dev"
    echo "  - http://localhost:3006"
    echo ""
}

# Run agent function
run_agent() {
    local agent_name=$1
    local agent_dir=$2
    local emoji=$3
    local model=$4
    local loops=$5

    echo ""
    echo -e "${GREEN}$emoji Running $agent_name${NC}"
    echo -e "${YELLOW}Model: $model | Loops: $loops${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    WORK="$agent_dir" MODEL="$model" MAX_LOOPS="$loops" STOP_ON_COMPLETE=true bash "$ENGINE"

    echo ""
    echo -e "${GREEN}✅ $agent_name complete!${NC}"
    echo -e "Output: ${BLUE}$agent_dir/output/${NC}"
    echo ""
}

# Main logic
case "${1:-help}" in
    discover)
        run_agent "CalTech Web Discovery Agent" "$AGENTS_DIR/discovery-agent" "🔍" "$MODEL" "1"
        ;;

    redesign)
        run_agent "CalTech Web Redesign Agent" "$AGENTS_DIR/visual-enhancement-agent" "🌐" "$MODEL" "${LOOPS:-15}"
        ;;

    help|--help|-h)
        show_help
        ;;

    *)
        echo -e "${RED}❌ Unknown agent: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac
