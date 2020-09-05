import { filterItemsById, getNumsOfAllDiets } from "client/helpers";

describe("helpers", () => {
  it("filterItemsById should create a array of items selected from the selected id array", () => {
    const items = [
      {
        id: 1001,
        name:
          "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"]
      },
      {
        id: 1002,
        name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
        dietaries: ["gf", "df", "rsf"]
      },
      {
        id: 1003,
        name:
          "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
        dietaries: ["gf", "df", "v", "ve", "n!"]
      }
    ];
    const expected = [
      {
        id: 1002,
        name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
        dietaries: ["gf", "df", "rsf"]
      },
      {
        id: 1003,
        name:
          "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
        dietaries: ["gf", "df", "v", "ve", "n!"]
      }
    ];

    const result = filterItemsById(items, [1002, 1003]);

    expect(result).toEqual(expected);
  });

  it("getNumsOfAllDiets should create a array of numbers of dietaries", () => {
    const items = [
      {
        id: 1001,
        name:
          "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"]
      },
      {
        id: 1002,
        name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
        dietaries: ["gf", "df", "rsf"]
      },
      {
        id: 1003,
        name:
          "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
        dietaries: ["gf", "df", "v", "ve", "n!"]
      }
    ];
    const expected = [
      { dietary: "v", num: 2 },
      {
        dietary: "ve",
        num: 2
      },
      {
        dietary: "df",
        num: 3
      },
      {
        dietary: "gf",
        num: 3
      },
      {
        dietary: "n!",
        num: 2
      },
      {
        dietary: "rsf",
        num: 1
      }
    ];

    const result = getNumsOfAllDiets(items);

    expect(result).toEqual(expected);
  });
});
