import React from 'react';
import * as actions from '../../../store/blocks/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import _ from 'lodash';
import replaceString from 'replace-string';
import './block-item-content-contracts.scss';

class BlockItemContentContracts extends React.Component {
  markDownContract(action, data) {
    let s = action.ricardian_contract;
    for (let k in data) {
      s = replaceString(s, '{{' + k + '}}', data[k]);
    }
    return s;
  }

  renderModalContracts() {
    const {
      selectedBlockId,
      blocks,
      selectedAccount,
      selectedContracts,
      clearAccount
    } = this.props;
    const block = blocks.find(b => b.id === selectedBlockId);
    const accActions = block.accounts[selectedAccount];
    const actions = _.get(selectedContracts, 'abi.actions') || [];
    return (
      <Modal isOpen={!!selectedContracts} toggle={clearAccount}>
        <ModalHeader toggle={clearAccount}>{selectedAccount}</ModalHeader>
        <ModalBody>
          {actions
            // .filter(action => action.ricardian_contract.length > 0)
            .reduce((all, action, i1) => {
              return [
                ...all,
                ...accActions.map((acc, i2) => (
                  <Card
                    className='block-item-content-contracts-card'
                    key={i1 + i2}
                  >
                    <CardBody>
                      <CardTitle>{action.name}</CardTitle>
                      <CardText>
                        {this.markDownContract(action, acc.data)}
                      </CardText>
                    </CardBody>
                  </Card>
                ))
              ];
            }, [])}
        </ModalBody>
      </Modal>
    );
  }

  render() {
    const { selectedBlockId, blocks, selectAccount } = this.props;
    const block = blocks.find(b => b.id === selectedBlockId);
    if (block) {
      const accountNames = Object.keys(_.get(block, 'accounts'));
      return (
        <div className='block-item-content-contracts'>
          {accountNames &&
            accountNames.map(acc => (
              <Button
                key={acc}
                className='block-item-content-contracts-account'
                onClick={selectAccount.bind(this, acc)}
              >
                {acc}
              </Button>
            ))}
          {this.renderModalContracts()}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = ({ blocks }) => ({
  ...blocks
});
const mapActions = dispatch => ({
  selectAccount: bindActionCreators(actions.selectAccount, dispatch),
  clearAccount: bindActionCreators(actions.clearAccount, dispatch)
});

export default connect(
  mapStateToProps,
  mapActions
)(BlockItemContentContracts);
