import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
       404 Sorry this page doesn't exist! - Go back to <Link to="/">home page</Link>
    </div>
);

export default NotFoundPage;