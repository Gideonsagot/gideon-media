import { useState } from 'react';
import { Home, User, Briefcase, Star, Phone, HelpCircle, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const sidebarItems = [
  { title: 'header.home', url: '#home', icon: Home },
  { title: 'header.about', url: '#about', icon: User },
  { title: 'header.services', url: '#services', icon: Briefcase },
  { title: 'header.portfolio', url: '#portfolio', icon: Star },
  { title: 'header.testimonials', url: '#testimonials', icon: MessageSquare },
  { title: 'header.contact', url: '#contact', icon: Phone },
  { title: 'header.help', url: '/help', icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false; // Could implement active section detection
    }
    return currentPath === path;
  };

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => scrollToSection(item.url)}
                    className={isActive(item.url) ? "bg-primary/10 text-primary" : ""}
                  >
                    <item.icon className="h-4 w-4" />
                    {state !== "collapsed" && <span>{t(item.title)}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}