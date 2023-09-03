import {
  Mic2,
  PlayCircle,
  LayoutGrid,
  RadioTower,
  ListMusic,
  Music2,
  User,
  Disc,
} from "lucide-vue-next";

interface SidbarItems {
  header: string;
  subItems: {
    title: string;
    icon: any;
    selected?: boolean;
  }[];
}

export const sidebarItems: SidbarItems[] = [
  {
    header: "Discover",
    subItems: [
      {
        title: "Listen Now",
        icon: PlayCircle,
        selected: true,
      },
      {
        title: "Browse",
        icon: LayoutGrid,
      },
      {
        title: "Radio",
        icon: RadioTower,
      },
    ],
  },
  {
    header: "Library",
    subItems: [
      {
        title: "Playlists",
        icon: ListMusic,
      },
      {
        title: "Songs",
        icon: Music2,
      },
      {
        title: "Made For You",
        icon: User,
      },
      {
        title: "Artists",
        icon: Mic2,
      },
      {
        title: "Albums",
        icon: Disc,
      },
    ],
  },
  {
    header: "Playlists",
    subItems: [
      {
        title: "Recently Added",
        icon: ListMusic,
      },
      {
        title: "Liked Songs",
        icon: ListMusic,
      },
      {
        title: "Recently Played",
        icon: ListMusic,
      },
      {
        title: "Top Songs",
        icon: ListMusic,
      },
      {
        title: "Kanye West Discography",
        icon: ListMusic,
      },
      {
        title: "Top Albums",
        icon: ListMusic,
      },
      {
        title: "Top 100: Global",
        icon: ListMusic,
      },
    ],
  },
];
