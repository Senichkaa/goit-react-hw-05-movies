import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input`
  background-color: #e4e4e4;
  width: 250px;
  height: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-right: 15px;
  margin-top: 15px;
`;

export const FormButton = styled.button`
  background-color: #e4e4e4;
  height: 26px;
  margin-top: 15px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  :hover {
    background-color: #bbb9b9;
  }
`;
