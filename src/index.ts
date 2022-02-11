// imports
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";

// query selector variables
const form = document.querySelector("#form") as HTMLFormElement;
const ul = document.querySelector("#ul") as HTMLUListElement;
const input = document.querySelectorAll("input");
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const list = new ListTemplate(ul)!;

// code
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc;
  if (type.value === "Invoice") {
    doc = new Invoice(toFrom.value, details.value, parseInt(amount.value));
  } else if (type.value === "Payment") {
    doc = new Payment(toFrom.value, details.value, parseInt(amount.value));
  } else {
    console.log("error");
  }
  doc && list.render(doc, type.value, "end");

  type.value = "";
  input.forEach((i) => (i.value = ""));
});
