import React from 'react';
import { loadBlocks, selectBlock } from './../../store/blocks/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import ShowMoreButton from './ShowMoreButton';
import BlockItem from './BlockItem/BlockItem';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './block-page.scss';

class BlocksPage extends React.Component {
  componentDidMount() {
    const { loadBlocks } = this.props;
    const { blocks } = this.props;
    if (blocks.length === 0) {
      loadBlocks();
    }
  }

  autoScrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }

  componentDidUpdate() {
    // this.autoScrollToBottom();
  }

  render() {
    const {
      blocks,
      selectBlock,
      loadBlocks,
      selectedBlockId,
      loading
    } = this.props;

    return (
      <div className='block-page'>
        <ListGroup>
          {blocks.map(block => {
            const id = _.get(block, 'id');
            const selected = id === selectedBlockId;
            return (
              <ListGroupItem key={id}>
                <BlockItem
                  block={block}
                  selected={!!selected}
                  onClick={selectBlock}
                />
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <div className='block-page-buttons'>
          <ShowMoreButton loading={loading} loadBlocks={loadBlocks} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ blocks }) => ({
  ...blocks
});
const mapAction = dispatcher => ({
  loadBlocks: bindActionCreators(loadBlocks, dispatcher),
  selectBlock: bindActionCreators(selectBlock, dispatcher)
});

export default connect(
  mapStateToProps,
  mapAction
)(BlocksPage);
