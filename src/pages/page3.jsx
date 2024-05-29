import React from 'react';
import DivWithBackground from '../DivWithBackground';
import { useParams } from 'react-router-dom';

const Page3 = () => {
  const params = useParams();
  console.log(params);
  return (
    <DivWithBackground className="three">
      {params.param ? <h1>✨{params.param}✨</h1> : <p>Page 3</p>}
    </DivWithBackground>
  );
};

export default Page3;
