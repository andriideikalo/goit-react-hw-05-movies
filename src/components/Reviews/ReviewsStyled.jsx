import styled from 'styled-components';

const Blockquote = styled.blockquote`
  position: relative;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: center;
  color: #161414;

  p {
    margin-top: 16px;
    color: #494545;
  }

  svg {
    margin-right: 16px;
  }

  cite {
    font-style: normal;
  }
`;

export { Blockquote };
