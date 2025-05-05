"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,

  Frame,
  BoxIcon,
  GalleryVerticalEnd,
  Home,
  PieChart,
  Settings2,
  ShoppingCart,
  User

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"

// This is sample data.
const data = {
  user: {
    name: "Smiley",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shpt Corp.",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp. ",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],



  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,

    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCart,
      isActive: true,
    },

    {
      title: "Services",
      url: "services",
      icon: BoxIcon,
      isActive: true,
    },
    {
      title: "Settings",
      url: "settings",
      icon: Settings2,
      isActive: true,
    },
  ],



  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: User,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
        <SidebarTrigger />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
