import React from 'react';

type Props = {
  variant?: 'green' | 'yellow'|'red';
};

const Light: React.FC<Props> = ({ variant }) => {
  return (
    <div style={{ padding: 20, background: variant, borderRadius: '50%', width: 50, height: 50 }}>  </div>
  );
}

export default Light;
