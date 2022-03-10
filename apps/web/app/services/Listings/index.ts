import { AxiosResponse } from "axios";
import { Listing } from "types";
import fetch from "./client";

type GetListingParams = {
  beds?: number;
  bedrooms?: number;
};

export const getListings = async (
  params: GetListingParams
): Promise<Listing[]> => {
  const { data }: AxiosResponse<{ data: Listing[] }> = await fetch(
    "/listings",
    { params }
  );

  return data.data;
};
