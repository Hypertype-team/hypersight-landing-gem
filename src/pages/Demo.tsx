import { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, PieChart, Settings, Users, Bell, Inbox, HelpCircle } from "lucide-react";

const Demo = () => {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: PieChart, label: "Reports", id: "reports" },
    { icon: Users, label: "Teams", id: "teams" },
    { icon: Inbox, label: "Inbox", id: "inbox" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Settings, label: "Settings", id: "settings" },
    { icon: HelpCircle, label: "Help & Support", id: "help" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen w-full">
          <Sidebar>
            <SidebarHeader className="p-4">
              <img
                src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                alt="Hypersight Logo"
                className="h-8"
              />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      data-active={activeSection === item.id}
                      className="w-full"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-8">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div className="flex items-center gap-4">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    JD
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Total Tickets</h3>
                  <p className="mt-2 text-3xl font-bold">1,234</p>
                  <p className="mt-1 text-sm text-green-500">↑ 12% from last month</p>
                </div>
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Response Time</h3>
                  <p className="mt-2 text-3xl font-bold">2.4h</p>
                  <p className="mt-1 text-sm text-red-500">↓ 5% from last month</p>
                </div>
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500">Customer Satisfaction</h3>
                  <p className="mt-2 text-3xl font-bold">94%</p>
                  <p className="mt-1 text-sm text-green-500">↑ 3% from last month</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-medium">Recent Tickets</h3>
                  <div className="space-y-4">
                    {[
                      { id: "T-1234", title: "Integration Issue", status: "Open", priority: "High" },
                      { id: "T-1235", title: "API Documentation", status: "In Progress", priority: "Medium" },
                      { id: "T-1236", title: "Dashboard Bug", status: "Open", priority: "High" },
                    ].map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium text-gray-900">{ticket.title}</p>
                          <p className="text-sm text-gray-500">{ticket.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            ticket.status === "Open" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            {ticket.status}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            ticket.priority === "High" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                          }`}>
                            {ticket.priority}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-medium">Team Performance</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Alice Smith", tickets: 45, rating: 4.8 },
                      { name: "Bob Johnson", tickets: 38, rating: 4.6 },
                      { name: "Carol Williams", tickets: 42, rating: 4.9 },
                    ].map((member) => (
                      <div key={member.name} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.tickets} tickets resolved</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium">{member.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Demo;