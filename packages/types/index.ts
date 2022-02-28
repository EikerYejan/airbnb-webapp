import { Listing as DBListing } from "@prisma/client";

export enum LocationType {
  Point = "Point",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export type ListingImages = {
  thumbnail_url?: string;
  picture_url?: string;
};

export type ListingAddressLocation = {
  type: LocationType;
  is_location_exact: boolean;
  coordinates: [number, number];
};

export type ListingAddress = {
  street: string;
  suburb?: string;
  government_area?: string;
  market?: string;
  country: string;
  country_code: string;
  location: Location;
};

export type Listing = Omit<
  DBListing,
  "createdAt" | "updatedAt" | "lastScraped" | "images" | "addressJson"
> & {
  images: ListingImages;
  addressJson: DBListing["addressJson"];
  createdAt: string;
  updatedAt: string;
  lastScraped: string;
};

export type GetListingsParams = {
  name?: string;
  minimumNights?: number;
  maximumNights?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  propertyType?: string;
  price?: number;
  weeklyPrice?: number;
  monthlyPrice?: number;
  cleaningFee?: number;
  select?: string;
  orderBy?: keyof Listing;
  order?: SortOrder;
  createdAt?: string;
  updatedAt?: string;
  address?: string;
  country?: string;
  availability_30?: number;
  availability_60?: number;
  availability_90?: number;
  availability_365?: number;
  size?: number;
  page?: number;
};
