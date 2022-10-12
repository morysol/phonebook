import { Text } from '@chakra-ui/react';
//
import { useAuth } from '../hooks/useAuth';
//
export const Home = () => {
  const { user } = useAuth();
  return (
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      padding="0 10%"
      align="center"
    >
      {user.name
        ? 'You can go to your contacts and add or edit what you whish.'
        : 'You can register or login to save you phonebook here.'}
    </Text>
  );
};
