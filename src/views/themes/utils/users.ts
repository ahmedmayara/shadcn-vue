export const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Midnight",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Kitty",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Cleo",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Charlie",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Chloe",
  },
] as const;

export type User = (typeof users)[number];
