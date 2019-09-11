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
    const navItems = [
      {
        code: '1',
        name: 'Visual',
        render: block => <ReactJson src={block} collapsed={true} />
      },
      {
        code: '2',
        name: 'Raw',
        render: block => JSON.stringify(block)
      },
      {
        code: '3',
        name: 'Contracts',
        render: block =>
          this.state.activeTab === '3' && <BlockItemContentContracts />
      }
    ];

    return (
      <div className='block-item-content'>
        <Nav tabs>
          {navItems.map(navItem => (
            <NavItem key={navItem.code}>
              <NavLink
                className={classnames(
                  { active: this.state.activeTab === navItem.code },
                  'block-item-content-tab-link',
                  'pointer'
                )}
                onClick={() => {
                  this.toggle(navItem.code);
                }}
              >
                {navItem.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {navItems.map(navItem => (
            <TabPane tabId={navItem.code} key={navItem.code}>
              <Row>
                <Col sm='12' className='block-item-content-view'>
                  {navItem.render(block)}
                </Col>
              </Row>
            </TabPane>
          ))}
        </TabContent>
      </div>
    );
  }
}

BlockItemContent.propTypes = {
  block: PropTypes.object.isRequired
};

export default BlockItemContent;
