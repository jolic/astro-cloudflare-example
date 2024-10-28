import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

interface Props {
    data: {
        title: string;
        description: string;
        href: string;
    }[]
}

export default function TopNavigationMenu({ data }: Props) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {data.map((item, i) => {
                    return (
                    <NavigationMenuItem key={i} value={`item-${i.toFixed()}`}>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>{item.description}</NavigationMenuContent>
                    </NavigationMenuItem>
                    );
                })}
                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    )
}