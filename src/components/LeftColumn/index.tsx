import React from 'react';

import LodingProfilePanel from '../Shimmer/LoadingProfilePanel';
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import { Container } from './styles';

const LeftColumn: React.FC<LoadingProps> = ({  isLoading }) => {
  return (
    <Container className="left-column">
      {isLoading ? (
        <LodingProfilePanel />
      ) : (
        <>
          <ProfilePanel />
          <HashtagPanel />
        </>
      )}

    </Container>
  );
};

export default LeftColumn;
