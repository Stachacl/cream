import React from 'react'; 

interface Props {
    message: string;
}

const Placeholder: React.FC<Props> = ({ message }) => {
    return <div className="placeholder">{message}</div>;
};

export default Placeholder;