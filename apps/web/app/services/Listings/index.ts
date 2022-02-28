import { AxiosResponse } from "axios";
import { Listing } from "types";
import fetch from "./client";

export const getListings = async (): Promise<Listing[]> => {
  const { data }: AxiosResponse<{ data: Listing[] }> = await fetch("/listings");

  return data.data;
};
