import { NavigationItem } from '@/types';
import HomeIcon from '@mui/icons-material/Home';

export const getHomeNavigation = (): NavigationItem[] => [
  {
    id: 'home',
    path: '/',
    icon: <HomeIcon />,
    label: 'Home',
  },
];
