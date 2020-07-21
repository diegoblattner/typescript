import React from 'react';

interface IsLoading {
  isLoading: boolean;
}

const withLoading = <T extends {}>(WrappedComponent: React.ComponentType<T>): React.ComponentType<T & IsLoading> => {
  
  const Loading = (props: T & IsLoading) => {
    const { isLoading } = props;


    return (
      <>
        {isLoading && 'Loading...'}
        {!isLoading && <WrappedComponent {...props} />}
      </>
    );
  };

  return Loading;
}


interface PersonProps {
  name: string;
}
const Person = ({ name }: PersonProps) => <div>{name}</div>;
const PersonLoading = withLoading(Person);

const Test = () => (
  <>
    <Person name="Test" />
    <PersonLoading isLoading={true} name="Test2" />
  </>
)
