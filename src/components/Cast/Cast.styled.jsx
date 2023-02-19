import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  li {
    flex-basis: calc((50% - 7 * 16px) / 8);
  }

  img {
    width: 140px;
    height: 140px;
    margin-bottom: 16px;
    object-fit: cover;

    border-radius: 10px;
  }

  p {
    font-size: 12px;
  }
`;

const Character = styled.p`
  margin-top: 4px;
  color: #808080;
`;

export { List, Character };
