import React from 'react';
import { Button, Spinner } from 'reactstrap';

export default ({ spinning, children, ...others }) => {
  return (
    <Button {...others}>
      {spinning ? (
        <div>
          {children}
          <div>
            <Spinner />
          </div>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
