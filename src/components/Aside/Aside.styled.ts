import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  padding: 20px 28px;
`;

export const SearchResultsWrapper = styled.div`
  margin: 30px 0 0 0;
  padding: 15px 5px;
  border-radius: 10px;
  background: ${(props) => props.theme.bgSecondaryDark100};
`;

export const ResultsTitle = styled.h3`
  margin: 0 10px 24px 10px;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const NoResults = styled.div`
  padding: 0 10px;
  font-size: 20px;
  font-weight: 600;
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
`;

export const ResultsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 13px;
  font-family: Roboto, sans-serif;
  font-size: 18px;
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
`;
