import { useLoaderData, LoaderFunction } from "remix";
import styled from "styled-components";
import { Listing } from "types";
import { Wrapper } from "~/components/Layout/Wrapper";
import ListingCard from "~/components/Listings/Card";
import { getListings } from "../services/Listings";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const beds = params.get("beds");
  const bedrooms = params.get("bedrooms");
  const country = params.get("country");

  const parsedQuery = {
    country,
    beds: beds ? Number(beds) : undefined,
    bedrooms: bedrooms ? Number(bedrooms) : undefined,
  };

  return getListings(parsedQuery);
};

const StyledWrapper = styled(Wrapper)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 32px 0;
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
