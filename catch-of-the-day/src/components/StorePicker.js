import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from '../helpers';
    console.log(this.storeInput.value);
    // we can use this.storeInput cause we've done it with a ref
    // second we're going to transition from/ to store/:storeId'
  }

  render() {
    // Comments here or anywhere else okay
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      { /* Comments here in JSX okay*/ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue ={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;