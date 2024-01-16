import styled from 'styled-components';

import { SecondaryButton } from '@/components/ui/Button/Button.styled';

export const ResultsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  margin: 0 0 15px 0;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.bgSecondaryDark200};
  }
`;

export const ResultsUsername = styled.span`
  max-width: 167px;
  font-weight: 400;
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

export const ResultsItemContent = styled.div`
  display: flex;
`;

export const FollowButton = styled(SecondaryButton)`
  width: 98px;
  height: 39px;
  padding: 0;

  @media (max-width: 768px) {
    width: 65px;
    height: 26px;
  }
`;
