import React from 'react';

const myFunctionComponent = (props: { enabled: boolean }) => {
    return null;
};

class MyClassComponent extends React.Component<{
    enabled: boolean;
    name: string;
}> {
}

// Your code here !!!
type PropsForm = any

//Result
type FunctionComponentProps = PropsForm<typeof myFunctionComponent>
// {enabled: boolean}

type ClassComponentProps = PropsForm<MyClassComponent>
// {enabled: boolean, name: string}