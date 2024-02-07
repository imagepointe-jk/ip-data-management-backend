import {
  Color,
  Design,
  DesignCategory,
  DesignSubcategory,
  DesignTag,
  Image,
} from "@prisma/client";

const screenPrintId = 1;
const embroideryId = 2;
const published = "Published";
const draft = "Draft";
type SeedDesign = Omit<Design, "id"> & {
  subcategories: string[];
  tags: string[];
};
type SeedDesignCategory = Omit<DesignCategory, "id">;
type SeedDesignSubcategory = Omit<
  DesignSubcategory,
  "id" | "designCategoryId"
> & {
  category: string;
};
type SeedDesignTag = Omit<DesignTag, "id">;
type SeedColor = Omit<Color, "id">;
type SeedImage = Omit<Image, "id">;

export const designs: SeedDesign[] = [
  {
    date: new Date("12/08/2012"),
    description: "Description text here",
    designNumber: 104,
    designTypeId: screenPrintId,
    featured: false,
    name: "Test Design",
    status: published,
    subcategories: ["Best Sellers"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("3/13/2015"),
    description: "Description text here",
    designNumber: 334,
    designTypeId: screenPrintId,
    featured: false,
    name: "Test Design",
    status: published,
    subcategories: ["Best Sellers", "Veterans Day"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("4/02/2018"),
    description: "Description text here",
    designNumber: 1342,
    designTypeId: screenPrintId,
    featured: false,
    name: "Test Design",
    status: published,
    subcategories: ["New Designs"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("9/09/2013"),
    description: "Description text here",
    designNumber: 154,
    designTypeId: screenPrintId,
    featured: false,
    name: "Test Design",
    status: published,
    subcategories: ["St. Patrick's Day"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("11/23/2011"),
    description: "Description text here",
    designNumber: 743,
    designTypeId: screenPrintId,
    featured: false,
    name: "Test Design",
    status: draft,
    subcategories: ["Best Sellers", "Veterans Day", "Strike & Negotiations"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("10/25/2019"),
    description: "Description text here",
    designNumber: 886,
    designTypeId: screenPrintId,
    featured: true,
    name: "Test Design",
    status: published,
    subcategories: ["Veterans Day", "Strike & Negotiations"],
    tags: ["America", "Golf"],
  },
  {
    date: new Date("5/11/2016"),
    description: "Description text here",
    designNumber: 1723,
    designTypeId: embroideryId,
    featured: true,
    name: "Test Design",
    status: published,
    subcategories: ["APWU"],
    tags: ["IBEW", "Flowers", "Dues", "America"],
  },
  {
    date: new Date("4/13/2013"),
    description: "Description text here",
    designNumber: 904,
    designTypeId: embroideryId,
    featured: false,
    name: "Test Design",
    status: draft,
    subcategories: ["APWU", "BAC"],
    tags: ["Holiday"],
  },
  {
    date: new Date("1/06/2022"),
    description: "Description text here",
    designNumber: 365,
    designTypeId: embroideryId,
    featured: false,
    name: "Test Design",
    status: published,
    subcategories: ["APWU"],
    tags: ["America", "Eagle"],
  },
  {
    date: new Date("3/19/2023"),
    description: "Description text here",
    designNumber: 115,
    designTypeId: embroideryId,
    featured: true,
    name: "Test Design",
    status: published,
    subcategories: ["BAC"],
    tags: ["Flowers", "Dues"],
  },
];

export const designCategories: SeedDesignCategory[] = [
  {
    designTypeId: screenPrintId,
    name: "Quick Search",
  },
  {
    designTypeId: screenPrintId,
    name: "Event/Awareness",
  },
  {
    designTypeId: screenPrintId,
    name: "Holiday",
  },
  {
    designTypeId: embroideryId,
    name: "International Union Logos",
  },
  {
    designTypeId: embroideryId,
    name: "Inspiration Board",
  },
];

export const designSubcategories: SeedDesignSubcategory[] = [
  {
    category: "Quick Search",
    name: "New Designs",
  },
  {
    category: "Quick Search",
    name: "Best Sellers",
  },
  {
    category: "Event/Awareness",
    name: "Strike & Negotiations",
  },
  {
    category: "Holiday",
    name: "Labor Day",
  },
  {
    category: "Holiday",
    name: "St. Patrick's Day",
  },
  {
    category: "Holiday",
    name: "Veterans Day",
  },
  {
    category: "International Union Logos",
    name: "APWU",
  },
  {
    category: "International Union Logos",
    name: "BAC",
  },
];

export const designTags: SeedDesignTag[] = [
  {
    name: "AFGE",
  },
  {
    name: "America",
  },
  {
    name: "Dues",
  },
  {
    name: "Eagle",
  },
  {
    name: "Flowers",
  },
  {
    name: "Golf",
  },
  {
    name: "Holiday",
  },
  {
    name: "IBEW",
  },
];

export const colors: SeedColor[] = [
  {
    hexCode: "000000",
    name: "Black",
  },
  {
    hexCode: "cb2423",
    name: "Flag Red",
  },
  {
    hexCode: "ff6511",
    name: "Safety Orange",
  },
  {
    hexCode: "907b54",
    name: "Coyote Brown",
  },
  {
    hexCode: "625f43",
    name: "Olive Drab Green",
  },
  {
    hexCode: "46326f",
    name: "Purple",
  },
];
