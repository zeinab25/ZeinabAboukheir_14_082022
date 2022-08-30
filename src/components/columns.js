import { format, formatISO } from "date-fns";

export const COLUMNS = [
  { Header: "First Name", accessor: "firstname" },
  { Header: "Last Name", accessor: "lastname" },

  {
    Header: "Start Date",
    accessor: (row) => formatISO(new Date(row.startDate)),
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  { Header: "Department", accessor: "department" },
  {
    Header: "Date of Birth",
    accessor: (row) => formatISO(new Date(row.startDate)),
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  { Header: "Street", accessor: "street" },
  { Header: "City", accessor: "city" },
  { Header: "State", accessor: "state" },
  { Header: "Zip Code", accessor: "zipCode" },
];
