import { useContext, useState } from 'react';
import './index.css';
import { primaryContext } from '../../context/primaryContext';
import axios from 'axios';

import React from 'react'

const Form = () => {

    const { workout, setWorkout } = useContext(primaryContext);
  return (
    <div>Form</div>
  )
}

export default Form