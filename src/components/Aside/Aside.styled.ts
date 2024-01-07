import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  padding: 20px 28px;
`;

export const SearchResults = styled.div`
  margin: 30px 0 0 0;
  padding: 15px;
  border-radius: 10px;
  background: #f7f9f9;
`;

export const ResultsTitle = styled.h3`
  margin: 0 0 29px 0;
  font-family:
    Roboto Serif,
    sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const NoResults = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ResultsItem = styled.li`
  display: flex;
  margin: 0 0 25px 0;
`;

export const ResultsImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
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
  font-weight: 400;
  opacity: 0.6;
`;
