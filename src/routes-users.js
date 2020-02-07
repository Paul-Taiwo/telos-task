import React from 'react';

// const Dashboard = React.lazy(() => import('./views/DashboardUsers'));
const ViewTasks = React.lazy(() => import('./views/ViewAllTaskUsers'));
const TaskCompleted = React.lazy(() => import("./views/TaskCompleted"));
const UserProfile = React.lazy(() => import("./views/UserProfile"));
const Settings = React.lazy(() => import("./views/Settings"));
const Wallet = React.lazy(() => import("./views/Wallet/Wallet"));

const routes = [
  { path: "/home", exact: true, name: "Home" },
  { path: "/home/tasks", exact: true, name: "Tasks", component: ViewTasks },
  { path: "/home/tasks-completed", name: "Completed Task", component: TaskCompleted },
  { path: "/home/user-profile", name: "Profile", component: UserProfile },
  { path: "/home/settings", name: "Settings", component: Settings },
  { path: "/home/wallet", name: "Wallet", component: Wallet }
];

export default routes;
