import React from 'react';
import PropTypes from 'prop-types';

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import ReactJson from 'react-json-view';
import classnames from 'classnames';
import './block-item-content.scss';
import BlockItemContentContracts from '../BlockItemContentContract/BlockItemContentContracts';

class BlockItemContent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { block } = this.props;

    return (
      <div className='block-item-content'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames(
                { active: this.state.activeTab === '1' },
                'block-item-content-tab-link',
                'pointer'
              )}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Visual
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames(
                { active: this.state.activeTab === '2' },
                'block-item-content-tab-link',
                'pointer'
              )}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Raw
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames(
                { active: this.state.activeTab === '3' },
                'block-item-content-tab-link',
                'pointer'
              )}
              onClick={() => {
                this.toggle('3');
              }}
            >
              Contracts
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12' className='block-item-content-view'>
                <ReactJson src={block} collapsed={true} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12' className='block-item-content-view'>
                {JSON.stringify(block)}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='12' className='block-item-content-view'>
                {this.state.activeTab === '3' && <BlockItemContentContracts />}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

BlockItemContent.propTypes = {
  block: PropTypes.object.isRequired
};

export default BlockItemContent;
