import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi, facere neque perferendis est accusantium fuga quibusdam voluptatem. Est consequatur eum voluptatum asperiores debitis rem eius iste repudiandae aperiam, reiciendis tenetur laborum, totam, corporis ab vel maxime dolorem incidunt molestiae!</p>
            <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;