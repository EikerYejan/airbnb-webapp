/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Order {
    asc = "asc",
    desc = "desc"
}

export enum ListingOrderBy {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    minimumNights = "minimumNights",
    maximumNights = "maximumNights",
    accommodates = "accommodates",
    bedrooms = "bedrooms",
    beds = "beds",
    bathrooms = "bathrooms",
    price = "price",
    weeklyPrice = "weeklyPrice",
    monthlyPrice = "monthlyPrice",
    cleaningFee = "cleaningFee",
    availability_30 = "availability_30",
    availability_60 = "availability_60",
    availability_90 = "availability_90",
    availability_365 = "availability_365"
}

export enum LocationType {
    Point = "Point"
}

export class ImagesInput {
    picture_url?: Nullable<string>;
}

export class LocationInput {
    type: LocationType;
    is_location_exact: boolean;
    coordinates: number[];
}

export class AddressInput {
    suburb?: Nullable<string>;
    government_area?: Nullable<string>;
    market?: Nullable<string>;
    country_code: string;
    location: LocationInput;
}

export class IntFilter {
    lt?: Nullable<number>;
    lte?: Nullable<number>;
    gt?: Nullable<number>;
    gte?: Nullable<number>;
}

export class StringFilter {
    equals?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
}

export class GetListings {
    listingUrl?: Nullable<string>;
    name?: Nullable<StringFilter>;
    minimumNights?: Nullable<IntFilter>;
    maximumNights?: Nullable<IntFilter>;
    accommodates?: Nullable<IntFilter>;
    bedrooms?: Nullable<IntFilter>;
    beds?: Nullable<IntFilter>;
    bathrooms?: Nullable<number>;
    createdAt?: Nullable<Date>;
    updatedAt?: Nullable<Date>;
    propertyType?: Nullable<string>;
    price?: Nullable<IntFilter>;
    weeklyPrice?: Nullable<IntFilter>;
    monthlyPrice?: Nullable<IntFilter>;
    cleaningFee?: Nullable<IntFilter>;
    address?: Nullable<StringFilter>;
    country?: Nullable<StringFilter>;
    availability_30?: Nullable<IntFilter>;
    availability_60?: Nullable<IntFilter>;
    availability_90?: Nullable<IntFilter>;
    availability_365?: Nullable<IntFilter>;
    page?: Nullable<number>;
    size?: Nullable<number>;
    order?: Nullable<Order>;
    orderBy?: Nullable<ListingOrderBy>;
}

export class UpdateListing {
    listingUrl?: Nullable<string>;
    name?: Nullable<string>;
    summary?: Nullable<string>;
    space?: Nullable<string>;
    description?: Nullable<string>;
    propertyType?: Nullable<string>;
    notes?: Nullable<string>;
    transit?: Nullable<string>;
    roomType?: Nullable<string>;
    bedType?: Nullable<string>;
    minimumNights?: Nullable<number>;
    maximumNights?: Nullable<number>;
    cancellationPolicy?: Nullable<string>;
    accommodates?: Nullable<number>;
    bedrooms?: Nullable<number>;
    beds?: Nullable<number>;
    bathrooms?: Nullable<number>;
    amenities?: Nullable<Nullable<string>[]>;
    neighborhoodOverview?: Nullable<string>;
    access?: Nullable<string>;
    interaction?: Nullable<string>;
    houseRules?: Nullable<string>;
    lastScraped?: Nullable<Date>;
    reviewsCount?: Nullable<number>;
    price?: Nullable<number>;
    weeklyPrice?: Nullable<number>;
    monthlyPrice?: Nullable<number>;
    cleaningFee?: Nullable<number>;
    images?: Nullable<ImagesInput>;
    address?: Nullable<string>;
    country?: Nullable<string>;
    addressJson?: Nullable<AddressInput>;
    availability_30?: Nullable<number>;
    availability_60?: Nullable<number>;
    availability_90?: Nullable<number>;
    availability_365?: Nullable<number>;
}

export class CreateListing {
    listingUrl: string;
    name: string;
    summary: string;
    space: string;
    description: string;
    propertyType: string;
    notes: string;
    transit: string;
    roomType: string;
    bedType: string;
    minimumNights: number;
    maximumNights: number;
    cancellationPolicy: string;
    accommodates: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    price: number;
    weeklyPrice?: Nullable<number>;
    monthlyPrice?: Nullable<number>;
    cleaningFee?: Nullable<number>;
    amenities?: Nullable<Nullable<string>[]>;
    neighborhoodOverview?: Nullable<string>;
    access?: Nullable<string>;
    interaction?: Nullable<string>;
    houseRules?: Nullable<string>;
    lastScraped?: Nullable<Date>;
    reviewsCount?: Nullable<number>;
    images: ImagesInput;
    address: string;
    country: string;
    addressJson: AddressInput;
    availability_30: number;
    availability_60: number;
    availability_90: number;
    availability_365: number;
}

export class Images {
    __typename?: 'Images';
    thumbnail_url?: Nullable<string>;
    picture_url?: Nullable<string>;
}

export class Location {
    __typename?: 'Location';
    type: LocationType;
    is_location_exact: boolean;
    coordinates: number[];
}

export class Address {
    __typename?: 'Address';
    street: string;
    suburb?: Nullable<string>;
    government_area?: Nullable<string>;
    market?: Nullable<string>;
    country: string;
    country_code: string;
    location: Location;
}

export class Listing {
    __typename?: 'Listing';
    id: string;
    listingUrl: string;
    name: string;
    summary: string;
    space: string;
    description: string;
    propertyType: string;
    notes: string;
    transit: string;
    roomType: string;
    bedType: string;
    minimumNights: number;
    maximumNights: number;
    cancellationPolicy: string;
    accommodates: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    weeklyPrice?: Nullable<number>;
    monthlyPrice?: Nullable<number>;
    cleaningFee?: Nullable<number>;
    amenities?: Nullable<Nullable<string>[]>;
    neighborhoodOverview?: Nullable<string>;
    access?: Nullable<string>;
    interaction?: Nullable<string>;
    houseRules?: Nullable<string>;
    lastScraped?: Nullable<Date>;
    reviewsCount?: Nullable<number>;
    images: Images;
    address: string;
    country: string;
    addressJson: Address;
    availability_30: number;
    availability_60: number;
    availability_90: number;
    availability_365: number;
}

export class QueryPageInfo {
    __typename?: 'QueryPageInfo';
    page: number;
    count: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export class QueryResponse {
    __typename?: 'QueryResponse';
    pageInfo: QueryPageInfo;
    edges: Listing[];
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract listings(where?: Nullable<GetListings>): QueryResponse | Promise<QueryResponse>;

    abstract listing(id: string): Listing | Promise<Listing>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createListing(data?: Nullable<CreateListing>): Listing | Promise<Listing>;

    abstract updateListing(id: string, data?: Nullable<UpdateListing>): Nullable<Listing> | Promise<Nullable<Listing>>;

    abstract deleteListing(id: string): Nullable<Listing> | Promise<Nullable<Listing>>;
}

type Nullable<T> = T | null;
