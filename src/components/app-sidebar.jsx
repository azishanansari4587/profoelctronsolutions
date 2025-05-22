"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  Calendar,
  CameraIcon,
  ClipboardListIcon,
  ContactIcon,
  CpuIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  Newspaper,
  PhoneIcon,
  Projector,
  RectangleHorizontal,
  SearchIcon,
  SettingsIcon,
  UserRoundCheck,
  UsersIcon,
} from "lucide-react"

// import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChartIcon,
    },

    {
        title: "Projects",
        url: "/project",
        icon: Projector,
    },

    {
      title: "Subscriber",
      url: "/subscriber",
      icon: UserRoundCheck,
    },

    {
      title: "Contact Request",
      url: "/contactRequest",
      icon: PhoneIcon,
    },

    {
      title: "Consultation Request",
      url: "/consultationRequest",
      icon: Calendar,
    },

    {
      title: "Team",
      url: "/team",
      icon: UsersIcon,
    },
    {
        title: "Blog",
        url: "/blogs",
        icon: Newspaper,
    },

  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu >
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white"
            >
              <Link href="/">
                <CpuIcon className="h-5 w-5 text-white" />
                <span className="text-base text-white  font-semibold">Profoelctron Solution</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
