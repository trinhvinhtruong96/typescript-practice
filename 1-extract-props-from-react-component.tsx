import React from 'react';

const MyFunctionComponent = (props: { enabled: boolean }) => {
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
type FunctionComponentProps = PropsForm<typeof MyFunctionComponent>
// {enabled: boolean}

type ClassComponentProps = PropsForm<MyClassComponent>
// {enabled: boolean, name: string}