import React from "react";
import { Listing } from "types";
import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: Listing;
};

const Wrapper = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 420px;
  outline: 2px solid transparent;
  outline-offset: 8px;
  border-radius: 12px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Content = styled.div``;

const Heading = styled.h3`
  ${({ theme }) => theme.headingTypeScale.md}
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  display: block;
  margin: 0 auto;
  border-radius: 16px;
  margin-bottom: 12px;
`;

const ListingCard = ({ data }: Props) => {
  const { name, images, listingUrl } = data;
  return (
    <Wrapper
      title={name}
      aria-label={name}
      href={listingUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {images?.picture_url && (
        <Image loading="lazy" alt={name} src={images.picture_url} />
      )}
      <Content>
        <Heading>{name}</Heading>
      </Content>
    </Wrapper>
  );
};

export default ListingCard;
