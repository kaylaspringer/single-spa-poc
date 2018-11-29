import React from 'react';

const FinalPage = ({ globalStore }) => (
    <div>
        {`This is a separate app, ${globalStore.getState().firstName}!`}
    </div>
);

export default FinalPage;