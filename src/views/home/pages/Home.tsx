import { useEffect } from 'react';
import { setNavigation } from '@/common/Store/slices/navigation.slice';
import { getHomeNavigation } from '@/configs/navigation/navigation.config';
import { useDispatch } from '@/store';
import { Typography } from '@mui/material';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigation(getHomeNavigation()));
  }, []);

  return (
    <section className="flex justify-center items-center h-full">
      <Typography variant="h3">Welcome to RapidX</Typography>
    </section>
  );
}

export default Home;
