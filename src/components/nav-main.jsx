"use client"

import { MailIcon, PlusCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"
import { usePathname } from 'next/navigation';
import Link from "next/link"

export function NavMain({
  items,
}) {
    const pathname = usePathname(); 
    // const [isActive, setIsActive] = useState();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            // if (!item.href) return null;
            const isActive = pathname === item.url;

            return (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url}>
                <SidebarMenuButton tooltip={item.title} 
                className={`hover:bg-gradient-to-br from-tech-darkBlue to-tech-blue hover:text-white ${
                  isActive ? 'bg-gradient-to-br from-tech-darkBlue to-tech-blue text-white font-semibold' : ''
                }`}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
           );
        } ) }
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
