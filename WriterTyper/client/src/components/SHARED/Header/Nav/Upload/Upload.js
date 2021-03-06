import React from 'react';
import { Link } from 'react-router-dom'

function UploadButton() {
  return (
    <Link to='/upload' className='navLink'>
      <button className='navButton'>
        Upload
      </button>
    </Link>
  );
}
export default UploadButton;