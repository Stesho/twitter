import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 0 100px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  max-width: 336px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Main = styled.main`
  max-width: 909px;
  width: 100%;
`;

export const Border = styled.div`
  width: 1px;
  height: 990px;
  background-color: ${(props) => props.theme.border200};
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AsideWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
