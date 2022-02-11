// imports
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// query selector variables
const form = document.querySelector("#form");
const ul = document.querySelector("#ul");
const input = document.querySelectorAll("input");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const list = new ListTemplate(ul);
// code
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(toFrom.value, details.value, parseInt(amount.value));
    }
    else if (type.value === "Payment") {
        doc = new Payment(toFrom.value, details.value, parseInt(amount.value));
    }
    else {
        console.log("error");
    }
    doc && list.render(doc, type.value, "end");
    type.value = "";
    input.forEach((i) => (i.value = ""));
});
