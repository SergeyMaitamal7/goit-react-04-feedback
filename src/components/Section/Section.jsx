import { Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};
