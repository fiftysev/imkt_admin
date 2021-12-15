import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { Context } from "..";
import { IUser } from "../models/IUser";
import UserService from "../utils/user.service";

export const HomePage: FC = observer(() => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const users = await UserService.fetchUsers();
      setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  };

  const { store } = useContext(Context);
  return (
    <>
      <div>
        <p>
          {store.isAuth
            ? `User: ${store.user.username}`
            : `You need login first`}
        </p>
        <button onClick={() => store.logout()}>Выйти</button>
        {store.isAuth && (
          <button onClick={() => getUsers()}>пользователи</button>
        )}
        {users.map((user) => (
          <div key={user.username}>{user.username}</div>
        ))}
      </div>
    </>
  );
});
