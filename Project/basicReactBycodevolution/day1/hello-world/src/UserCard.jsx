import { UserInfo } from "./UserInfo"

export const UserCard = (id,...rest) => {
    return (
      <div>
        <h2>User {id} Deatils</h2>
        <UserInfo {...rest} />
      </div>

    )
}