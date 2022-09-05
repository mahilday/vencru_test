export const sidebarNav = {
  header: [
    {
      icon: "/icons/home.svg",
      name: "home",
      href: "/home",
    },
    {
      icon: "/icons/bar-chart-2.svg",
      name: "dashboard",
      href: "/dashboard",
    },
    {
      icon: "/icons/3-layers.svg",
      name: "projects",
      href: "/projects",
    },
    {
      icon: "/icons/check-square.svg",
      name: "tasks",
      href: "/tasks",
    },
    {
      icon: "/icons/flag.svg",
      name: "reporting",
      href: "/reporting",
    },
    {
      icon: "/icons/users.svg",
      name: "users",
      href: "/users",
    },
  ],
  footer: [
    {
      icon: "/icons/life-buoy.svg",
      name: "support",
      href: "/support",
    },
    {
      icon: "/icons/settings.svg",
      name: "settings",
      href: "/settings",
    },
  ],
};

export const topBar = [
    {
        name: "My details"
    },
    {
        name: "profile"
    },
    {
        name: "password"
    },
    {
        name: "team"
    },
    {
        name: "plan"
    },
    {
        name: "billing"
    },
    {
        name: "notifications"
    },
    {
        name: "integration"
    },
    {
        name: "API"
    },
]

export const last4Nums =(num: string | number)=>{
  let result = typeof num === "number"? String(num).slice(-4) : num.slice(-4);
  return Number(result)
}


