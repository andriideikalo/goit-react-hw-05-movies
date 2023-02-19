import styled from 'styled-components';

const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;

  text-align: center;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  margin-bottom: 36px;
  width: 510px;

  border-radius: 15px;
`;
const Field = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  padding: 0 4px;

  font-size: 16px;

  color: #494545;

  pointer-events: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  Input:focus ~ &,
  Input:not(:placeholder-shown) ~ & {
    transform: translateY(-34px) scale(0.8);

    color: #ec9706;
    background-color: #212121;
  }

  Input:not(:focus) ~ & {
    color: #494545;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  padding-right: 42px;

  font-size: 16px;
  letter-spacing: 1.4px;

  color: #ec9706;
  background-color: transparent;

  border: 1px solid #494545;
  border-radius: 10px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: #ec9706;
    box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);
  }

  &:not(:focus) {
    color: #494545;
  }
`;

const Button = styled.button`
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
    text-shadow: 4px 0px 2px rgba(1,225,216,0.61)
  }
`;

export { Section, Container, Form, Field, Label, Input, Button };
