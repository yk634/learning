import { createHash } from 'crypto';

export class HashTable<K, V> {
  size: number;
  table: [K, V][][];

  constructor(size: number = 10) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []);
  }

  private hash(key: K): number {
    const digest = createHash('md5').update(String(key)).digest('hex');
    return parseInt(digest, 16) % this.size;
  }

  add(key: K, value: V): void {
    const index = this.hash(key);
    for (const data of this.table[index]) {
      if (data[0] === key) {
        data[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  print(): void {
    for (let i = 0; i < this.table.length; i++) {
      let output = `${i} `;
      for (const data of this.table[i]) {
        output = `${output} --> ${data[0]}: ${data[1]}`;
      }
      console.log(output);
    }
  }

  get(key: K): V | null {
    const index = this.hash(key);
    for (const data of this.table[index]) {
      if (data[0] === key) {
        return data[1];
      }
    }

    return null;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}
