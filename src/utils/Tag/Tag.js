import React from 'react';
import Chip from '@mui/material/Chip';
import './Tag.css';

function Tag({ value }) {
  return <Chip label={value} variant="outlined" className="tags" />;
}

export default Tag;
