import React from "react";
import { Listing } from "types";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  data: Listing;
};

const ListingCard = ({ data }: Props) => {
  const { name } = data;
  return <div>{name}</div>;
};

export default ListingCard;
