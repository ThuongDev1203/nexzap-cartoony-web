
import { Code, Palette, Users } from "lucide-react";
import { JobPosition } from "@/types/job";

export const jobPositions: JobPosition[] = [
  {
    id: "game-dev",
    title: "Game Developer",
    icon: Code,
    department: "Engineering",
    locationType: "Remote / On-site",
    description: "Join our team to create exciting game experiences using Unity or Unreal Engine. You'll be responsible for implementing gameplay mechanics, optimizing performance, and collaborating with artists and designers to bring creative visions to life.",
    requirements: [
      "At least 2 years of experience with Unity or Unreal Engine",
      "Strong C# or C++ programming skills",
      "Experience with 2D/3D game development",
      "Portfolio demonstrating game projects",
      "Understanding of game design principles",
      "Knowledge of version control systems (Git)",
      "Ability to work collaboratively in a team environment"
    ],
    responsibilities: [
      "Develop and implement gameplay features using Unity/Unreal Engine",
      "Write clean, maintainable, and efficient code",
      "Optimize game performance on various platforms",
      "Fix bugs and technical issues",
      "Collaborate with artists, designers, and other team members",
      "Participate in code reviews and technical discussions",
      "Stay updated with the latest gaming technologies and trends"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible working hours",
      "Professional development opportunities",
      "Modern, creative workspace",
      "Team building events and game jams",
      "Healthcare coverage",
      "Paid time off and holidays"
    ]
  },
  {
    id: "3d-artist",
    title: "3D Artist",
    icon: Palette,
    department: "Art",
    locationType: "Remote / On-site",
    description: "Create captivating 3D assets, characters and environments for our games. You'll work closely with the art director and game designers to develop visually stunning and optimized game assets that bring our worlds to life.",
    requirements: [
      "Experience with 3D modeling software (Blender, Maya, or 3ds Max)",
      "Strong understanding of texturing and lighting",
      "Ability to create optimized game-ready assets",
      "An eye for cartoon-style design",
      "Knowledge of PBR workflows",
      "Understanding of topology and UV unwrapping",
      "Portfolio demonstrating 3D modeling skills"
    ],
    responsibilities: [
      "Create 3D models, textures, and animations for games",
      "Design characters, environments, and props",
      "Optimize 3D assets for various platforms",
      "Collaborate with the art team and game designers",
      "Follow art direction and style guides",
      "Iterate on designs based on feedback",
      "Meet project deadlines and quality standards"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Creative freedom and artistic growth",
      "Access to industry-standard tools and software",
      "Portfolio development opportunities",
      "Collaborative and supportive work environment",
      "Healthcare coverage",
      "Flexible working arrangements"
    ]
  },
  {
    id: "game-design-lead",
    title: "Game Design Lead",
    icon: Users,
    department: "Design",
    locationType: "On-site",
    description: "Lead the design team in creating engaging gameplay mechanics and experiences. You'll define the vision for our games and oversee the implementation of game systems, levels, and player experiences that keep our audience engaged.",
    requirements: [
      "5+ years of game design experience",
      "Experience leading design teams",
      "Strong understanding of player psychology and engagement",
      "Excellent communication and documentation skills",
      "Portfolio of shipped games",
      "Experience with game design tools and engines",
      "Ability to analyze data and make design decisions"
    ],
    responsibilities: [
      "Lead and mentor the game design team",
      "Develop game design documents and specifications",
      "Create compelling game mechanics and systems",
      "Balance gameplay elements for optimal player experience",
      "Collaborate with artists, developers, and producers",
      "Playtest and iterate on game features",
      "Present design concepts to stakeholders"
    ],
    benefits: [
      "Leadership role with creative control",
      "Competitive salary and comprehensive benefits",
      "Professional development budget",
      "Influence on company's game portfolio",
      "Modern office with game testing facilities",
      "Team retreats and industry events",
      "Profit sharing opportunities"
    ]
  }
];
