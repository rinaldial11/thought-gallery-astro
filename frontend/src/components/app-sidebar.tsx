import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import tgIcon from "@/assets/icon/tg-icon.png";
import { PowerOff } from "lucide-react";
import { useLogout } from "@/hooks/use-logout";
import { useAtom } from "jotai";
import { tokenAtom } from "@/store/token";

const data = {
  navMain: [
    {
      title: "Menu",
      url: "/dashboard",
      items: [
        {
          title: "Post Lists",
          url: "#",
          isActive: true,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { logout } = useLogout();
  const [token] = useAtom(tokenAtom);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="w-full flex justify-center">
          <img src={tgIcon.src} alt="icon" className="w-30" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div
        onClick={logout}
        className="mb-10 text-base font-medium text-red-500 px-4 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
      >
        <PowerOff size={15} />
        Sign out
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
