import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the repo minimal for the classroom demo - don't auto-generate
  // AGENTS.md / CLAUDE.md agent-rules files.
  agentRules: false,
};

export default nextConfig;
