import React from 'react';

import LoadingTrandingPanel from '../Shimmer/LoadingTrandingPanel';
import TrendingPanel from './TrendingPanel';

import { Container } from './styles';

const RightColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrandingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
