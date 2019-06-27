import { useState } from "react";

import usersGet from "./usersGet";

export default function useUser() {
  const [user, setUserLog] = useState({});

  async function setUser(id) {
    const usersGetFilter = await usersGet(id);
    setUserLog(usersGetFilter);
  }

  return [user, setUser];
}
