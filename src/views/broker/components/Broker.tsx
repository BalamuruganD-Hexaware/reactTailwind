import { IBroker } from '@/models';
import { Typography, Card } from '@mui/material';

export default function Broker({ firstName, lastName }: IBroker) {
  return (
    <Card className="p-2 w-full">
      <Typography>{firstName} {lastName}</Typography>
    </Card>
  )
}