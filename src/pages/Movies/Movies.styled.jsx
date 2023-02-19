import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 1280px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
  width: 510px;

  border-radius: 15px;
`;
export const Field = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  padding: 0 4px;

  font-size: 16px;

  color: grey;

  pointer-events: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
    transform: translateY(-34px) scale(0.8);

    color: orange;
    background-color: black;
  }

  Input:not(:focus) ~ & {
    color: grey;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  padding-right: 42px;

  font-size: 16px;
  letter-spacing: 1.4px;

  color: orange;
  background-color: transparent;

  border: 1px solid #494545;
  border-radius: 10px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: orange;
    box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);
  }

  &:not(:focus) {
    color: #494545;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  padding: 0;

  color: #494545;
  background-color: transparent;

  border: none;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: red
    text-shadow: 4px 0px 2px rgba(1,225,216,0.61)rgba(1,225,216,0.61)
  }
`;
