/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Button from './Button';
import '../styles/formStyles.css';
import Div from './Div';

class InputDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { details, editFunc, isOpen, addFunc } = this.props;

    const renderAllDivs = () => {
      return (
        details.map(detail => {
          return (
            detail.entries.map(entry => {
              return(
                <Div 
                isOpen={isOpen}
                divKey={uniqid()}
                divText={entry} />
              )
            })
          )
        })
      )
    }

    return (
      <div>
        <div>
          {renderAllDivs()}
        </div>
        <Button btnText="Edit" clickFunc={editFunc}></Button>
        <Button btnText="Add Position" clickFunc={addFunc}></Button>
      </div>
    )
  }
}

export default InputDisplay;