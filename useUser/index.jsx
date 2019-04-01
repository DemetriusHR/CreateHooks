import { useState } from 'react';

import usersGet from './usersGet';

export default function useUsuario() {
  const [user, setUserLog] = useState({});

  function setUser(id) {
    const usersGetFilter = usersGet.filter(user => user.id === id);

    setUserLog(usersGetFilter[0]);
  }

  return [user, setUser];
}
