import React from 'react';

type BodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

function Body(props: BodyProps) {
  return <tbody {...props} />;
}

export default Body;
