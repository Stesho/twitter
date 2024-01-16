import { lighten } from 'polished';
import styled from 'styled-components';

import { adaptiveFont } from '@/utils/adaptiveFont';

export const AsideWrapper = styled.aside`
  padding: 20px 28px;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const SearchResultsWrapper = styled.div`
  margin: 30px 0 0 0;
  padding: 15px 5px;
  border-radius: 10px;
  background: ${(props) => props.theme.bgSecondaryDark100};

  @media (max-width: 1024px) {
    position: absolute;
    width: 373px;
    z-index: 1;
    top: 0;
    left: 100%;
    transform: translate(-405px, 60px);
  }

  @media (max-width: 425px) {
    width: 300px;
    transform: translate(-315px, 30px);
  }
`;

export const ResultsTitle = styled.h3`
  margin: 0 10px 24px 10px;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: ${adaptiveFont(24, 20)};
  font-weight: 700;
`;

export const NoResults = styled.div`
  padding: 0 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const ResultsList = styled.ul`
  list-style-image: none;
`;

export const ResultsItem = styled.li`
  display: flex;
  padding: 5px 10px;
  margin: 0 0 15px 0;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.bgSecondaryDark200};
  }
`;

export const ResultsImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ResultsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 13px;
  font-family: Roboto, sans-serif;
  font-size: ${adaptiveFont(18, 14)};
`;

export const ResultsName = styled.span`
  margin: 5px 0;
  font-weight: 500;
`;

export const ResultsUsername = styled.span`
  max-width: 265px;
  font-weight: 400;
  opacity: 0.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 425px) {
    max-width: 200px;
  }
`;

export const ShowMore = styled.button`
  padding: 0 10px;
  color: ${(props) => props.theme.textNeutral};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${(props) => lighten(0.2, props.theme.bgSecondaryLight100)};
  }
`;
