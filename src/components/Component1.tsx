import React, { useState, FC, ReactElement } from 'react';

interface Component1Props {
    name: string;
}

const Component1: FC<Component1Props> = ({ name = '' }): ReactElement => {
    const [nameState, setNameState] = useState(name);

    return <div>${nameState}</div>;
};

export default Component1;
