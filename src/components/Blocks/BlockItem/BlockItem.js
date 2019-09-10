import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import _ from 'lodash';
import BlockItemContent from '../BlockItemContent/BlockItemContent';
import './block-item.scss';
import classnames from 'classnames';

class BlockItem extends React.Component {
  handleClick() {
    const { block, onClick } = this.props;
    const id = _.get(block, 'id');

    if (onClick) {
      onClick(id);
    }
  }

  render() {
    const { block, selected } = this.props;
    const id = _.get(block, 'id');
    const timestamp = _.get(block, 'timestamp');
    const totalActions = _.get(block, 'totalActions');
    const classes = classnames('block-item', {
      selected: selected
    });
    return (
      <div className={classes}>
        <div
          className='block-item-header pointer'
          onClick={this.handleClick.bind(this)}
        >
          <div className='block-item-header-id'>{id}</div>
          {timestamp && (
            <div className='block-item-header-time'>{timestamp}</div>
          )}
          <div className='block-item-header-total-actions'>
            actions: {totalActions}
          </div>
        </div>
        <Collapse isOpen={selected} className='block-item-content'>
          <BlockItemContent block={block} />
        </Collapse>
      </div>
    );
  }
}
BlockItem.propsType = {
  block: PropTypes.object.isRequired,
  selected: PropTypes.bool
};
BlockItem.defaultProps = {
  selected: false
};

export default BlockItem;
