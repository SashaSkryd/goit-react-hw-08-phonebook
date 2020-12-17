import React from 'react';

import classes from './alert.module.css';

export default function AlertMessage({ children }) {
  return <div className={classes.alertMessage}>{children}</div>;
}