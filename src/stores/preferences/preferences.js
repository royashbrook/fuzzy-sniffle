import { writable } from 'svelte/store';

export const docProps = [
  { "id": "1", "name": "Vendor Name" },
  { "id": "2", "name": "Invoice Number" },
  { "id": "3", "name": "Invoice Date" },
  { "id": "4", "name": "Amount" },
  { "id": "5", "name": "Company Code" },
  { "id": "6", "name": "Batch Number" },
  { "id": "7", "name": "Vendor Code" },
  { "id": "8", "name": "Check Date" },
  { "id": "9", "name": "Check Number" },
  { "id": "10", "name": "Voucher Number" },
  { "id": "11", "name": "Check Amount" },
  { "id": "12", "name": "Terminal Number" },
  { "id": "13", "name": "Bill of Lading Number" },
  { "id": "14", "name": "Ship Date" },
  { "id": "15", "name": "Shipper ID " },
  { "id": "16", "name": "Consignee ID" },
  { "id": "17", "name": "Bill to ID " },
  { "id": "18", "name": "Driver" },
  { "id": "19", "name": "Order Status" },
  { "id": "20", "name": "Customer PO #" },
  { "id": "21", "name": "PRO Number" },
  { "id": "22", "name": "Billed Date" },
  { "id": "23", "name": "TIME" },
  { "id": "24", "name": "DATE" },
  { "id": "25", "name": "BARCODE FAILED" },
  { "id": "26", "name": "CUSTOMER ID" },
  { "id": "27", "name": "AUTO INDEX FAILED" },
  { "id": "31", "name": "Apply Date" },
  { "id": "32", "name": "Cust Ship Ticket" },
  { "id": "37", "name": "Account Code" },
  { "id": "38", "name": "Voucher Date" },
  { "id": "39", "name": "Social Security #" },
  { "id": "40", "name": "Last Name" },
  { "id": "41", "name": "First Name" },
  { "id": "42", "name": "Qualcomm Barcode #" },
  { "id": "43", "name": "Unit Number" },
  { "id": "44", "name": "Internal PO Number" },
  { "id": "47", "name": "ORDERID" },
  { "id": "48", "name": "Order Number" },
  { "id": "49", "name": "Date Opened" },
  { "id": "50", "name": "Date Closed" },
  { "id": "51", "name": "Year" },
  { "id": "54", "name": "Unit ID" },
  { "id": "55", "name": "Fiscal Year" },
  { "id": "56", "name": "Terminal" },
  { "id": "57", "name": "Month" },
  { "id": "58", "name": "TYPE" },
  { "id": "69", "name": "DocumentId" },
  { "id": "70", "name": "Created" },
  { "id": "71", "name": "Modified" },
  { "id": "72", "name": "DocumentTypeId" },
  { "id": "73", "name": "PageCount" }
]

export const docTypes = [
  { "id": "1", "name": "Invoice in Process" },
  { "id": "2", "name": "Check Issued to Vendor" },
  { "id": "3", "name": "AP Vendor Invoice" },
  { "id": "4", "name": "Bill of Lading" },
  { "id": "5", "name": "Ship Ticket" },
  { "id": "6", "name": "Customer Invoice" },
  { "id": "7", "name": "NO READ BARCODE" },
  { "id": "8", "name": "Fuel Delivery Ticket" },
  { "id": "9", "name": "Per Diem" },
  { "id": "10", "name": "Weight Ticket" },
  { "id": "11", "name": "Check List" },
  { "id": "12", "name": "Safety Form" },
  { "id": "13", "name": "Shop/Breakdown Form" },
  { "id": "14", "name": "Exception Form" },
  { "id": "15", "name": "IT Forms" },
  { "id": "16", "name": "Debit Memo" },
  { "id": "17", "name": "Check Printed Pending Post" },
  { "id": "18", "name": "Cancelled Check" },
  { "id": "19", "name": "Check Cancelled Pending Post" },
  { "id": "20", "name": "Tampa Autbra Load Summary" },
  { "id": "21", "name": "Meter Route" },
  { "id": "22", "name": "Customer BP Invoice" },
  { "id": "23", "name": "Quality Control" },
  { "id": "24", "name": "Pending" },
  { "id": "25", "name": "Demmurage Ticket Form" },
  { "id": "26", "name": "P-14 Termination Form" },
  { "id": "27", "name": "P-14 On Leave" },
  { "id": "31", "name": "Other Form" },
  { "id": "37", "name": "HR Terms" },
  { "id": "38", "name": "Recruiting Applications" },
  { "id": "39", "name": "Safety Terminations" },
  { "id": "40", "name": "PUC" },
  { "id": "41", "name": "AVMS" },
  { "id": "42", "name": "Settlement Sheets" },
  { "id": "44", "name": "Safety Meeting Documents" },
  { "id": "47", "name": "Hours of Service" },
  { "id": "48", "name": "Unassigned Driving" },
  { "id": "50", "name": "Safety Bonuses and Awards" }
]

const defaultPrefs = docProps
  .filter(x =>
    !["25", "27", "69", "71", "72", "73"].includes(x.id)
  )
  .map(x => ({
    ...x,
    selected: ["13", "14", "15", "16", "17"].includes(x.id) ? true : false
  }))
  .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

export const preferences = writable(
  localStorage.preferences ? JSON.parse(localStorage.preferences) : defaultPrefs);
preferences.subscribe(val => localStorage.setItem("preferences", JSON.stringify(val)));
export const resetPreferences = () => preferences.set(defaultPrefs);