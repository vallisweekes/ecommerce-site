import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const GoBack = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;

  transition: all 0.3s ease-in;

  :hover {
    background-color: #f6f6f6;
  }
`;
const BackButton = ({ history }) => (
  <GoBack className="back-button" onClick={history.goBack}>
    <ArrowBackIcon />
  </GoBack>
);

export default BackButton;
