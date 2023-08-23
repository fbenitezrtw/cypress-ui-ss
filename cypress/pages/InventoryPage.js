class InventoryPage {
    elements = {
      inventoryContainer: () => cy.get(".inventory_list"),
      sortingDropdown: () => cy.get(".product_sort_container"),
    };

    selectSortingOption(optionText) {
      this.elements.sortingDropdown().select(optionText);
    }

    verifyItemsSortedAscending() {
      this.elements.inventoryContainer().then((inventory) => {
        const items = inventory.find(".inventory_item_name");
        const itemNames = items.toArray().map((item) => Cypress.$(item).text());

        const sortedItemNames = [...itemNames].sort();
        expect(itemNames, "Items are not sorted in ascending order").to.deep.equal(
          sortedItemNames
        );
      });
    }

    verifyItemsSortedDescending() {
      this.elements.inventoryContainer().then((inventory) => {
        const items = inventory.find(".inventory_item_name");
        const itemNames = items.toArray().map((item) => Cypress.$(item).text());

        const sortedItemNames = [...itemNames].sort().reverse();
        expect(itemNames, "Items are not sorted in descending order").to.deep.equal(
          sortedItemNames
        );
      });
    }


  }

  module.exports = new InventoryPage();