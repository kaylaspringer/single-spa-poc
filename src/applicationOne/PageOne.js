import React from 'react';
import { Link } from 'react-router-dom';

const PageOne = () => (
    <div>
        Page One
        <Link to="/applicationOne/pageTwo">
            <button>On to Page Two</button>
        </Link>
    </div>
);

export default PageOne;