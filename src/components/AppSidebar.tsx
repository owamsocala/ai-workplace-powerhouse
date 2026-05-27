import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Mail, FileText, ListChecks, Search, MessageSquare, Sparkles } from "lucide-react";
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
  SidebarFooter,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Smart Email", url: "/email", icon: Mail },
  { title: "Meeting Notes", url: "/meeting", icon: FileText },
  { title: "Task Planner", url: "/planner", icon: ListChecks },
  { title: "Research", url: "/research", icon: Search },
  { title: "Chatbot", url: "/chat", icon: MessageSquare },
];

export function AppSidebar() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4">
        <Link to="/" className="flex items-center gap-2 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="font-display text-sm font-semibold text-sidebar-foreground">Worksmith AI</span>
            <span className="text-[11px] text-sidebar-foreground/60">Productivity Assistant</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = path === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3 py-3 text-[11px] text-sidebar-foreground/55 group-data-[collapsible=icon]:hidden">
        AI outputs may be inaccurate. Review before use.
      </SidebarFooter>
    </Sidebar>
  );
}
