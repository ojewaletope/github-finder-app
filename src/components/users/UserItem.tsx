import { Link } from "react-router-dom";
import { User } from "../../models/models";

interface UserProps {
  user: User;
}
export const UserItem = ({ user: { login, avatar_url } }: UserProps) => {
  return (
    <div className="card shadow-md bg-base-100 compact side">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="avatar" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-conten text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
