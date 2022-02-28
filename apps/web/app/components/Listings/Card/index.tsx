import React from "react";
import { Listing } from "types";
import styled, { DefaultTheme } from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: Listing;
};

const Wrapper = styled.a``;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`;

const ListingCard = ({ data }: Props) => {
  const { name } = data;
  return (
    <Wrapper>
      <Heading>{name}</Heading>
    </Wrapper>
  );
};

export default ListingCard;
