/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import InputDisplay from './InputDisplay';
import InputForm from './InputForm';
import { handleChange, handleSubmit, handleEdit } from './HelperFuncs';
import uniqid from 'uniqid';
import '../styles/formStyles.css';

class DisplayGenInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo:    [],
      newGenInfo: {
        Name:       '',
        Address:    '',
        City:       '',
        State:      '',
        Zip:        '',
        Phone:      '',
        Email:      '',
        baseID:     uniqid(),
      },
      display:    'form',
      editIndex:  'none',
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }
  
  render() {
    const { genInfo, newGenInfo } = this.state;
    const genInfoLabels = [['Name', 'first'], ['Address', 'fourth'], 
                          ['City', 'fifth'], ['State', 'sixth'], 
                          ['Zip', 'seventh'], ['Phone', 'second'], 
                          ['Email', 'third']];

    const renderPage = () => {
      if(this.state.display === 'form') {
        return (
          <InputForm 
            changeFunc={this.handleChange} 
            submitFunc={this.handleSubmit}
            infoType="genInfo"
            sectionKey="newGenInfo"
            heading="Basic Info"
            inputList={genInfoLabels}
            details={newGenInfo}
          />
        )     
      }
      else if(this.state.display === 'text') {
        return(
          <InputDisplay 
            details={genInfo} 
            editFunc={this.handleEdit}
            infoType="genInfo"
            sectionKey="newGenInfo"
            needsAddBtn={false}
          />
        )
      }
    }
    return (
      <div>
        {renderPage()}
      </div>
    )
  }
}

export default DisplayGenInfo;