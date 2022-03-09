import React from "react";
import { Listing } from "types";
import styled from "styled-components";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: Listing;
};

const Content = styled.div`
  display: block;
  padding: 0 16px 12px;
`;

const Heading = styled.h3`
  ${({ theme }) => theme.headingTypeScale.md}
`;

const Text = styled.p`
  ${({ theme }) => theme.textTypeScale.sm}
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  display: block;
  margin: 0 auto;
  margin-bottom: 12px;
  transition: inherit;
  border-radius: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Wrapper = styled.a`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 420px;
  outline: 2px solid transparent;
  outline-offset: 8px;
  border-radius: 12px;
  transition: 0.1s linear;
  text-decoration: none;
  overflow: hidden;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: left;
  box-shadow: ${({ theme }) => theme.boxShadow.levelOne};
  padding: 4px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    ${Image} {
      transform: scale(1.05);
    }
  }
`;

const ListingCard = ({ data }: Props) => {
  const { name, images, listingUrl, address } = data;
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
        <Text>{address}</Text>
      </Content>
    </Wrapper>
  );
};

export default ListingCard;
