interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface ProjectSection {
  header: string;
  paragraphs: {
    content: string;
    media?: ProjectMedia[];
  }[];
}

interface ProjectArticle {
  cover_url: string;
  title: string;
  type: string;
  stack: string[];
  roles: string[];
  description: string;
  sections: ProjectSection[];
}

export const PROJECTS: ProjectArticle[] = [
  {
    cover_url: "/images/triagent/banner.png",
    title: "Triagent",
    type: "design",
    stack: ["Figma", "AI/NLP Integration"],
    roles: ["Lead UI/UX Designer", "UX Researcher"],
    description: "AI Medical Triage & Doctor Recommendation System",
    sections: [
      {
        header: "Initial",
        paragraphs: [
          {
            content:
              "Most people have been in this situation: something feels wrong, you don't know if it's serious, and you have no idea which type of doctor handles it. Going to a hospital just to be redirected is exhausting, and for older adults or people with full schedules, it's often not even an option. Triagent was built to remove that friction entirely, letting users describe their symptoms conversationally and walk away with a doctor's recommendation in mind.",
          },
          {
            content:
              "Developed as a thesis project at De La Salle University with three colleagues and attracted a formal partnership with a real healthcare platform. I led the UI design end-to-end, built and maintained the design system across all five iterations, and was deeply involved in research, interview facilitation, and usability testing throughout.",
          },
        ],
      },
      {
        header: "Research and Needfinding",
        paragraphs: [
          {
            content:
              "66 participants were gathered across the full study: 33 in the final iteration, spanning Gen Z, Millennials, Gen X/Boomers, and practicing doctors that we interviewed on-site at St. Luke's Medical Center BGC.",
          },
          {
            content:
              "Most participants across both groups also mentioned some degree of vision difficulty, which pushed the design toward larger UI elements and a lighter theme throughout.",
          },
          {
            content:
              "The finding that reframed everything early on came from younger users, who pointed out they could already do this with ChatGPT. Older users told a completely different story: they found the concept genuinely valuable, were used to navigating healthcare through hospital visits alone, and many of them found that process physically exhausting.",
          },
          {
            content:
              "That contrast defined the entire design challenge going forward: approachable enough for someone who barely uses tech, distinct enough that someone who uses AI daily would still find it worth opening.",
          },
        ],
      },
      {
        header: "Design Process and Iterations",
        paragraphs: [
          {
            content:
              "The first version was exactly what you'd expect: a ChatGPT-style interface with a text input at the bottom, chat bubbles, and a doctor recommendation at the end. We tested mid-fidelity Figma prototypes remotely over Zoom, since vague wireframes produce vague feedback.",
          },
          {
            content:
              'Early rounds surfaced the usual comments: color choices, button placements, and layout preferences. But the comment that kept coming back, and the one that mattered most, was: "Why would I use this instead of just asking ChatGPT?" We could have ignored it. Instead, we treated it as the central design problem and built around it.',
          },
          {
            content:
              "Three features came out of that decision. The symptom summary modal sits above the chat and pulls excerpts from the conversation in real time. It surfaces potential symptoms as tappable tags, each linked back to the specific messages the AI used to identify them.",
          },
          {
            content:
              "The Q&A section gave users a guided path into the conversation when they weren't sure how to describe what they were feeling, particularly useful for those who found an open text field intimidating. ",
          },
          {
            content:
              "The 3D body model took the most deliberate path to the final product. It lets users tap a diagram to pinpoint where they feel pain and attach a note for the AI to factor in, because sometimes you genuinely can't describe in words where something hurts. We were unsure if it was feasible within our timeline, so we tested a simplified 2D version first to gauge how people responded. The response was overwhelmingly positive, so we committed to including it in the final product.",
          },
          {
            content:
              "We called each iteration complete when the volume and weight of feedback dropped noticeably, which turned out to be a more reliable signal than any arbitrary deadline.",
          },
        ],
      },
      {
        header: "Outcomes",
        paragraphs: [
          {
            content:
              "The result that meant the most to me was generational parity. We measured it across three rounds using NASA-TLX, a standardized tool for perceived task difficulty, with participants using the live app over Zoom in a thinking-aloud approach. At baseline, older users reported significantly higher cognitive and physical load than younger users, which made sense given what we had found in research. By the guided round, those differences had disappeared entirely across every subdimension. The app didn't just reduce workload on average; it equalized the experience across age groups, which was the whole point.",
          },
          {
            content:
              "Frustration and Effort stayed relatively stable throughout, and that was useful information rather than a disappointment. It pointed directly at what the interface alone couldn't fix: better onboarding, clearer communication about what the AI can and can't do, and more empathetic language throughout the conversation.",
          },
        ],
      },
      {
        header: "What I Learned",
        paragraphs: [
          {
            content:
              "This was the first project where I went genuinely deep into UX research rather than designing from instinct. The most uncomfortable part of that was realizing how many of my design instincts were just personal preferences dressed up as decisions. Everyone has a different relationship with interfaces, and the research is what keeps you honest about whose problem you're actually solving.",
          },
          {
            content:
              "Designing for someone who finds AI exciting and someone who has never relied on technology in their life are almost opposite challenges. Holding both in mind at the same time is something I got better at over the course of this project. Working under consistent time pressure helped too: I'm less precious about individual screens now, more willing to ship something good enough to learn from rather than waiting for something perfect that never arrives.",
          },
        ],
      },
    ],
  },
  {
    cover_url: "/images/phainon/banner.gif",
    title: "Phainon",
    type: "Development",
    stack: [
      "Discord.js v14",
      "Node.js",
      "Typescript",
      "Supabase",
      "PostgreSQL",
    ],
    roles: ["Full-Stack Developer"],
    description: "Trading Card Collecting Game Discord Bot",
    sections: [
      {
        header: "Introduction",
        paragraphs: [
          {
            content:
              "Phainon is a card-collecting game bot for Discord built around characters from music, anime, video games, and celebrities. The idea came from years of playing other card bots and noticing a consistent gap: nobody had built one that was issue-based across this breadth of characters.",
          },
          {
            content:
              "The project was initialized in September 2025, with roughly 2 to 3 weeks of focused development squeezed in between finishing my CS degree, freelance work, and job hunting.",
          },
        ],
      },
      {
        header: "Background",
        paragraphs: [
          {
            content:
              "I've been building Discord bots throughout college: an embed formatter, a music player, and a scraper bot that parsed card game embeds, which is also where I picked up TypeScript. Years of being a player in these communities taught me exactly what to replicate and what to leave behind. Phainon is where all of that experience finally had somewhere to go.",
          },
          {
            content:
              "TypeScript, Discord.js v14, and Supabase were chosen because I had strong existing knowledge across all three. Supabase made early development fast, handles authentication cleanly for the planned companion website, and costs little to nothing at current scale. Migrating to Neon and Prisma is already partially accounted for. All server-side logic is written in pure SQL with no host-specific terminology, so the SQL itself transfers and only the invocation layer needs updating.",
          },
        ],
      },
      {
        header: "How it plays",
        paragraphs: [
          {
            content:
              "Players can drop a card every 10 minutes or spend in-game currency to pull 5 cards at once. There's a player-run marketplace, seasonal events, and a leaderboard. Everything is obtainable free-to-play, and the gacha is designed to be engaging without being predatory.",
          },
          {
            content:
              "Cards have a rarity of 1 through 5, with 6-star cards reserved for events. Rarities are introduced gradually as the card count grows rather than releasing everything at launch and diluting the pool immediately.",
          },
          {
            content:
              "Every rarity has a bot-side floor price that players can always sell into. It keeps cards from losing value over time without over-engineering the player-to-player side, which is left to supply and demand.",
          },
        ],
      },
      {
        header: "What was hard",
        paragraphs: [
          {
            content:
              "Concurrency was the biggest challenge. The core principle: never make a user wait on another user. Every command is fully asynchronous, and even commands that require a response window don't block other users from playing. In practice, this meant fast lookups, minimal database round-trips, and an architecture built to stay stable under simultaneous load.",
          },
          {
            content:
              "The hardest specific problem was race conditions on card issuance. When multiple users triggered a button-based collector in rapid succession, Discord's API would return an unpredictable user rather than reliably the first. Storing the initial user's ID client-side and rejecting the rest was unreliable because Discord collectors are inconsistently ordered when inputs arrive close together.",
          },
          {
            content:
              "The fix had two parts: for drops, the collector is filtered to the user who initiated it, sidestepping the race condition by design. For package openings, PostgreSQL row-level locks inside RPCs make every issuance atomic, and all database operations are strictly sequential unless the command is read-only.",
          },
          {
            content:
              "The database architecture is what made all of this possible. Early versions handled most logic client-side: querying multiple tables in sequence, merging results, and handling nulls before passing anything back. The problem is that the client is unpredictable. One step can fail cleanly while the rest continue, leaving the database in a mismatched state. ",
          },
          {
            content:
              "Moving critical logic into server-side RPCs solved both problems: fewer round-trips and self-contained transactions that exit cleanly on failure before any destructive operation goes through. Data cleanup still happens client-side for parsing arguments and handling malformed input, but anything that touches the database directly lives in the RPC. Every entity lives in its own table and joins are handled entirely server-side.",
          },
        ],
      },
      {
        header: "What's left",
        paragraphs: [
          {
            content:
              "Testing, quality-of-life commands, image optimization, and hosting remain. The more deliberate decision is sharding: running multiple bot instances under a single token, each handling a subset of servers. For a card game where every user should have one uninterrupted instance of the bot, it becomes necessary earlier than most developers account for. The architecture already avoids patterns that assume a single shared process. A companion website in Next.js, TypeScript, and Tailwind is planned when demand increases.",
          },
        ],
      },
    ],
  },
];
