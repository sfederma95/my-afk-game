export default class lootTable {
  constructor() {
    this.table = [];
    this.totalWeight = 0;
    this.rareDrops = [];
    this.rareDropsWeight = 0;
  }

  addToTable(item) {
    if (item.weight <= 5 && item.weight > 0) this.addRareDrop(item);
    this.table.push(item);
    this.totalWeight += item.weight;
  }

  addRareDrop(item) {
    this.rareDrops.push(item);
    this.rareDropsWeight += item.weight;
  }

  /* 
  These methods aren't needed at this stage
  */

  //   removeFromTable(itemName) {
  //     for (let i = 0; i < this.table.length; i++) {
  //       if (this.table[i].name === itemName) {
  //         let removed = this.table.splice(i, 1);
  //         if (removed.weight <= 5 && removed.weight > 0)
  //           this.removeRareDrop(i, removed.weight);
  //         this.table.totalWeight -= removed.weight;
  //       }
  //     }
  //   }

  //   removeRareDrop(index, weight) {
  //     this.rareDrops.splice(index, 1);
  //     this.rareDropsWeight -= weight;
  //   }

  //   changeItemWeight(itemName, newWeight) {
  //     for (let i = 0; i < this.table.length; i++) {
  //       if (this.table[i].name === itemName) {
  //         let oldWeight = this.table[i].weight;
  //         this.totalWeight -= oldWeight;
  //         this.table[i].weight = newWeight;
  //         this.totalWeight += newWeight;
  //       }
  //     }
  //   }

  //   changeRareDropWeight(itemName, newWeight) {
  //     return;
  //   }

  choose() {
    if (!this.table.length) return null;
    const random = Math.floor(Math.random() * this.totalWeight + 1);
    let currWeight = 0;
    let itemIndex;
    for (let i = 0; i < this.table.length; i++) {
      currWeight += this.table[i].weight;
      if (random <= currWeight) {
        itemIndex = i;
        break;
      }
    }
    return this.table[itemIndex];
  }

  guaranteedRareDrop() {
    if (!this.rareDrops.length) return null;

    const random = Math.floor(Math.random() * this.rareDropsWeight + 1);
    let currWeight = 0;
    let itemIndex;
    for (let i = 0; i < this.rareDrops.length; i++) {
      currWeight += this.rareDrops[i].weight;
      if (random <= currWeight) {
        itemIndex = i;
        break;
      }
    }
    return this.rareDrops[itemIndex];
  }
}
