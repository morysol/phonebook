import { useAuth } from '../hooks/useAuth';
//
export const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      {user.name ? (
        <p>You can go to your contacts and add or edit what you whish. </p>
      ) : (
        <p>You can register or login to save you phonebook here.</p>
      )}
    </div>
  );
};
