import { HasFormatter } from "../interfaces/hasFormatter.js";
export class Payment implements HasFormatter {
  readonly recipient: string;
  readonly details: string;
  readonly amount: number;
  constructor(c: string, d: string, a: number) {
    this.recipient = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
