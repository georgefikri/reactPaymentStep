import React from 'react';
import './ProgressBar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Progress } from 'reactstrap';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress__bar__wrapper">
      <Progress value={value} />
    </div>
  );
};

export default ProgressBar;
