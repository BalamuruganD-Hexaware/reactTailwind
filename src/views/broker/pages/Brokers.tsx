import { useAddBrokerMutation, useGetBrokersQuery } from "@/services/broker.service";
import { CircularProgress, Alert, TextField, Button } from '@mui/material';
import Broker from '../components/Broker';
import { useEffect, useState } from 'react';

export default function Brokers() {
  const { isLoading, isError, data = [], error } = useGetBrokersQuery(null, {
    // pollingInterval: 2000
  });
  const [addBroker] = useAddBrokerMutation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.error(error);
  }, [error]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    )
  }

  if (isError) {
    return (
      <Alert severity="error">There is an error</Alert>
    )
  }

  return (
    <section className="grid grid-cols-2 p-10 gap-10">
      <section className="flex flex-col gap-2">
        {data.map(broker => <Broker {...broker} />)}
      </section>
      <form className="flex flex-col gap-2" onSubmit={(e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        addBroker({ firstName, lastName})
      }}>
        <TextField 
          id="first-name" 
          label="First Name" 
          name="firstName" 
          variant="standard" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField 
          id="last-name" 
          label="Last Name" 
          name="lastName" 
          variant="standard" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button type="submit">Add broker</Button>
      </form>
    </section>
  )
}
