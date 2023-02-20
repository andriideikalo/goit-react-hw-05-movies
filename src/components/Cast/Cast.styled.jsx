import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const Item = styled.li`
  flex-basis: calc((50% - 7 * 5px) / 3);
`;

export const NameCast = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Img = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 16px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Character = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;
