import Owner from "../models/owner";
import Cat from "../models/cat";

export const OWNERS = [
  new Owner(1, "John Lenon", "KK", true, 1),
  new Owner(2, "Paul McCartney", "PM", false, 0),
  new Owner(3, "GeorGia Harrison", "GH", false, 0),
  new Owner(4, "Ringo Starr", "RS", false, 0),
];

export const CATS = [
  new Cat("O1", "Snowball", "4 years 0 month", 2),
  new Cat("O2", "Blackly", "2 years 3 months", 2),
  new Cat("O3", "Fireball", "8 years 1 month", 2),
  new Cat("O4", "Whitely", "1 year 7 months", 2),
  new Cat("O5", "Blackly", "2 years 3 months", 2),
  new Cat("O6", "Fireball", "8 years 1 month", 2),
  new Cat("O7", "Whitely", "1 year 7 months", 2),
];
