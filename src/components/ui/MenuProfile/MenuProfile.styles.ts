import styled from 'styled-components';

export const MenuProfileWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.textDark500};
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin: 100px 0 30px 0;
`;

export const Avatar = styled.img`
  width: 52px;
  height: 52px;
  margin: 0 30px 0 0;
  object-fit: cover;
  border-radius: 50%;
`;

export const Name = styled.h3`
  font-weight: 600;
`;

export const Username = styled.span`
  font-weight: 400;
  opacity: 0.6;
`;
