import { HasFormatter } from "../interfaces/hasFormatter.js";
export class Invoice implements HasFormatter {
  readonly client: string;
  readonly details: string;
  readonly amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
