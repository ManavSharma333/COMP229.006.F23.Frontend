import { useContext } from 'react';
import { CountContext } from './UseContextExample';

export default function Component3() {
  const count = useContext(CountContext);

  return <>Value: {count}</>
}
