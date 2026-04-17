import React from 'react';

const   page = async ({params}) => {
     const resolvedParams = await params;
  const { id } = resolvedParams;

    return (
        <div>
            <h1>Friend ID: {id}</h1>
        </div>
    );
};

export default page;