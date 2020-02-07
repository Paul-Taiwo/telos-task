export default {
  items: [
    {
      title: true,
      name: "Main",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "Create Task",
      url: "/admin/create-task",
      icon: "icon-pencil"
    },
    {
      name: "View All Task",
      url: "/admin/view-all-task",
      icon: "icon-layers"
    },
    {
      title: true,
      name: "Settings",
    },
    {
      name: "Profile",
      url: "/admin/profile",
      icon: "icon-user"
    },
    {
      name: "Settings",
      url: "/admin/settings",
      icon: "icon-settings"
    },
    {
      name: "Payments",
      url: "/admin/payments",
      icon: "icon-credit-card"
    }
  ]
};
