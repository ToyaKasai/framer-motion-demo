import styled from '@emotion/styled';
import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import CubeGrid from '../animation/Cube';

type LoadingProps = {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading: FC<LoadingProps> = ({ setIsLoading }) => {
  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <LoadingWrapper>
      <CubeGrid onAnimationComplete={stopLoading} />
    </LoadingWrapper>
  );
};

export default Loading;
