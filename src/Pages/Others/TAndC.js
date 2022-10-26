import React from 'react';
import { Link } from 'react-router-dom';

const TAndC = () => {
    return (
        <div>
            <h3>Here is our terms and conditions</h3>
            <p>go back to SignUp: <Link to='/signup'>SignUp</Link></p>
        </div>
    );
};

export default TAndC;   