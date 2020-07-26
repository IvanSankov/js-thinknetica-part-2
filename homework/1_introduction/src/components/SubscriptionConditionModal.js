import React from 'react';

import Modal from "./Modal";

export default class SubscriptionConditionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState((state) => ({
      show: !state.show
    }))
  }

  render() {
    const style = this.state.show ? styles.showModal : null;

    return (
      <>
        <button onClick={this.toggleShow}>
          Subscription condition
        </button>
        <Modal>
          <div className='modal' tabIndex="-1" style={style}>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>Modal title</h5>
                  <button type="button" className='close' onClick={this.toggleShow}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <p>Modal body text goes here.</p>
                </div>
                <div className='modal-footer'>
                  <button onClick={this.toggleShow} className='btn btn-primary'>I agree</button>
                  <button onClick={this.toggleShow} className='btn btn-secondary' data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

const styles = {
  showModal: {
    display: 'block',
    background: 'rgb(0, 0, 0, 0.50)'
  }
};