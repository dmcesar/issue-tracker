import { getSession } from "next-auth/react";
import React from "react";

const DashboardPage = async () => {
  const session = await getSession();

  if (!session) {
    return <div>Unauthorized user</div>;
  }

  return <div>Dashboard Page</div>;
};

export default DashboardPage;
