import styled from 'styled-components';

export const TweetModalWrapper = styled.div`
  width: 600px;
  max-height: calc(100vh - 100px);
  overflow: auto;

  & > div {
    padding: 0;
    margin: 20px 20px 0 0;
  }

  & textarea {
    min-height: 60px;
  }
`;
