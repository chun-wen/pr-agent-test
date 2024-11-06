import { useEffect, useState } from 'react';

const Consumer = () => {
  const [data, setData] = useState<string>('');


  useEffect(() => {
    setData('consumer page');
  }, []);

  return (
    <div>
      <h1>Consumer</h1>
      <p>This is the consumer page: {data}</p>
    </div>
  )
}

export default Consumer;