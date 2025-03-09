"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname }from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (  
                <SidebarMenuItem key={item.title} className="py-1">
                   <a href={item.url}>
                <SidebarMenuButton 
                  tooltip={item.title} 
                  className={item.url === pathname ? "bg-accent" : ""}
                >
                  {item.icon && <item.icon  />}
               
                  <span className={`font-semibold `}>
                  {item.title}
                  </span>
                 
                  <ChevronRight className={`ml-auto transition-transform duration-200 `} />
                </SidebarMenuButton>
                </a>
                </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
