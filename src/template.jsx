import React from 'react';
import './template.scss';

export class Template extends React.Component {
  render() {
    return <div className="component--Template">
      <div className='header'>Template!</div>
      <div>{this.props.children}</div>
      ...
    </div>;
  }
}