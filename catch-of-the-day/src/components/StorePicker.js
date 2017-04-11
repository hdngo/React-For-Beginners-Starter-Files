import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    // Comments here or anywhere else okay
    return (
      <form className="store-selector">
      { /* Comments here in JSX okay*/ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue ={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;