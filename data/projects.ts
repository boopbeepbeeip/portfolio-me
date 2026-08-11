export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
  // Tambahkan data Youtuber yang pernah mainin
  creators?: {
    name: string;
    subs: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "pos-satpam",
    title: "Pos Satpam Anomalies",
    category: "SURVIVAL HORROR",
    description: "Shift-based survival horror game featuring atmospheric mechanics.",
    imageUrl: "/images/pos-satpam.png",
    link: "https://www.roblox.com",
    tags: ["ROBLOX", "LUAU", "HORROR"],
    creators: [
      { name: "Windah Basudara", subs: "14M+" },
      { name: "Frost Diamond", subs: "35M+" },
      { name: "Mefelz", subs: "3M+" },
    ],
  },
  {
    id: "icu-shift",
    title: "The ICU Shift",
    category: "PSYCHOLOGICAL HORROR",
    description: "Medical ICU panic management and survival system.",
    imageUrl: "/images/icu-shift.png",
    link: "https://www.roblox.com",
    tags: ["ROBLOX", "LUAU", "SIMULATION"],
    creators: [
      { name: "Hitzeed CH", subs: "3M+" },
      { name: "HayoGo", subs: "1M+" },
    ],
  },
  {
    id: "mount-peax",
    title: "Mount Peax",
    category: "ADVENTURE",
    description: "Atmospheric exploration and environment experience.",
    imageUrl: "/images/mount-peax.png",
    link: "https://www.roblox.com",
    tags: ["ROBLOX", "3D MODELING"],
    creators: [
      { name: "Mefelz", subs: "3M+" },
    ],
  },
];