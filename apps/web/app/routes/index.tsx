import { useLoaderData } from "remix";
import styled from "styled-components";
import { Listing } from "types";
import { Wrapper } from "~/components/Layout/Wrapper";
import ListingCard from "~/components/Listings/Card";
import { getListings } from "../services/Listings";

export const loader = () => {
  return getListings();
};

const StyledWrapper = styled(Wrapper)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
`;

export default function Index() {
  const listings = useLoaderData<Listing[]>();

  return (
    <StyledWrapper>
      {listings.map((item) => (
        <ListingCard data={item} key={item.id} />
      ))}
    </StyledWrapper>
  );
}
