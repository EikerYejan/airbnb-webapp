import { useLoaderData } from "remix";
import { Listing } from "types";
import ListingCard from "~/components/Listings/Card";
import { getListings } from "../services/Listings";

export const loader = () => {
  return getListings();
};

export default function Index() {
  const listings = useLoaderData<Listing[]>();

  return (
    <div>
      {listings.map((item) => (
        <ListingCard data={item} key={item.id} />
      ))}
    </div>
  );
}
