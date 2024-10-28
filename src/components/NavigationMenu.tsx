"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Image } from 'astro:assets'
// import { Icons } from "@/components/ui/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import IconTalent from '@/assets/talent.png'

const listItemClassName = {
  className: "text-xl font-normal cursor-pointer dark:text-white dark:bg-transparent dark:hover:text-[#2463ea]"
}

const useCasesNavItems: { title: string; href: string; description: string }[] = [
  {
    title: "Skills and Job Profiles",
    href: "/feature/skills-and-job-profiles",
    description:
      "Description A",
  },
  {
    title: "Skill Mapping",
    href: "/feature/skill-mapping",
    description:
      "Description B",
  },
  {
    title: "Skill Analytics",
    href: "/feature/skill-analytics",
    description:
      "Description C",
  },
  {
    title: "Skill Development",
    href: "/feature/skill-development",
    description: "Description D",
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle(listItemClassName)}>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:outline-slate-800 dark:bg-transparent">
              {useCasesNavItems.map((useCasesNavItem) => (
                <ListItem
                  key={useCasesNavItem.title}
                  title={useCasesNavItem.title}
                  href={useCasesNavItem.href}
                  className="text-xl font-normal cursor-pointer dark:text-white"               
                >
                  {useCasesNavItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/en/how-it-works" className={navigationMenuTriggerStyle(listItemClassName)}>
              How it works
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle(listItemClassName)}>
              Blog
            </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          
          <div className="text-normal font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
