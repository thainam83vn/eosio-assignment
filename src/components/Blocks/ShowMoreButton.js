import React from 'react';
import { SpinningButton as Button } from './../../common-components';

export default ({ loadBlocks, loading }) => (
  <Button
    className='block-page-buttons-show-more'
    onClick={loadBlocks}
    spinning={loading}
  >
    {loading ? 'Loading' : 'Show more'}
  </Button>
);
