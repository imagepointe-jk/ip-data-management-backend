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
type SeedDesign = Omit<
  Design,
  "id" | "defaultBackgroundColorId" | "imageId"
> & {
  subcategories: string[];
  tags: string[];
  defaultBackgroundColor: string;
  imageUrl: string;
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
    defaultBackgroundColor: "Black",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/567-15.png",
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
    defaultBackgroundColor: "Purple",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/758-6.jpg",
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
    defaultBackgroundColor: "Coyote Brown",
    imageUrl: "https://www.imagepointe.com/wp-content/uploads/2024/02/205.jpg",
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
    defaultBackgroundColor: "Safety Orange",
    imageUrl: "https://www.imagepointe.com/wp-content/uploads/2024/02/1028.png",
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
    defaultBackgroundColor: "Black",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/1611-darks.png",
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
    defaultBackgroundColor: "Flag Red",
    imageUrl: "",
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
    defaultBackgroundColor: "Olive Drab Green",
    imageUrl: "https://www.imagepointe.com/wp-content/uploads/2024/02/1566.png",
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
    defaultBackgroundColor: "Safety Orange",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/1135-darks.png",
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
    defaultBackgroundColor: "Black",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/759-lights.png",
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
    defaultBackgroundColor: "Purple",
    imageUrl:
      "https://www.imagepointe.com/wp-content/uploads/2024/02/913-lights.png",
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

export const images: SeedImage[] = [
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/567-15.png",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/758-6.jpg",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/205.jpg",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/1028.png",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/1611-darks.png",
  },
  {
    url: "",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/1566.png",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/1135-darks.png",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/759-lights.png",
  },
  {
    url: "https://www.imagepointe.com/wp-content/uploads/2024/02/913-lights.png",
  },
];
