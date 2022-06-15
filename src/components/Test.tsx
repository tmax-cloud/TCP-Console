import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
type TestComponentProps = {
  path: string;
  buttonText: string;
};
export const TestComponent: React.FC<TestComponentProps> = props => {
  const { path, buttonText } = props;
  return (
    <Button variant="contained">
      <Link to={path}>{buttonText}</Link>
    </Button>
  );
};
