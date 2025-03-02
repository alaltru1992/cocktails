import { useLocation } from 'react-router-dom';

export const useDrinkName = () => {
  const location = useLocation();
  const { pathname } = location;
  return pathname.replace('/', '') || 'margarita';
};
