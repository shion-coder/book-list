import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const Book = styled.div`
  background: #6d3d6d;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;

  :hover {
    opacity: 0.7;
    text-decoration: line-through;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  color: #fff;
  font-size: 1.2em;
`;

export const Author = styled.div`
  font-size: 0.9em;
  color: #ddd;
`;
