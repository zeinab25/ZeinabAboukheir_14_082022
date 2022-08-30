import React, {useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-modal-zeinab";
import { ErrorMessage } from "@hookform/error-message";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form(props) {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const [isOpenModal, setIsOpenModal] = useState(false);

  function onSubmit(employee) {
    props.setEmployees((previousValues) => [...previousValues, employee]);
    toggleModal();
    reset();
  }

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <div className="title">
        <h1 className="logo">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            {...register("firstname", { required: "This is required." })}
          />
          <ErrorMessage errors={errors} name="firstname" as="p" />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            {...register("lastname", { required: "This is required." })}
          />
          <ErrorMessage errors={errors} name="lastname" as="p" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="dateOfBirth"
            render={({ field }) => (
              <ReactDatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                todayButton="Today"
              />
            )}
          />
          <ErrorMessage errors={errors} name="dateOfBirth" as="p" />

          <label htmlFor="start-date">Start Date</label>
          <Controller
            control={control}
            rules={{ required: "This is required" }}
            name="startDate"
            render={({ field }) => (
              <ReactDatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                todayButton="Today"
              />
            )}
          />
          <ErrorMessage errors={errors} name="startDate" as="p" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              {...register("street", { required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="street" as="p" />

            <label htmlFor="city">City</label>
            <input
              type="text"
              {...register("city", { required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="city" as="p" />

            <label htmlFor="state">State</label>
            <select {...register("state", { required: "This is required." })}>
              {states.map((elt, idx) => (
                <option key={idx} value={elt.abbreviation}>
                  {elt.name}
                </option>
              ))}
            </select>
            <ErrorMessage errors={errors} name="state" as="p" />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              {...register("zipCode", { required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="zipCode" as="p" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            {...register("department", { required: "This is required." })}
          >
            <option value="">--Please choose an option--</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <ErrorMessage errors={errors} name="department" as="p" />

          <button type="submit">Save</button>
        </form>
      </div>
      <Modal isOpen={isOpenModal} backdrop crossClose onClose={toggleModal}>
        <p>Employee Created!</p>
      </Modal>
    </>
  );
}

const states = [
  {
    name: "--Please choose an option--",
    abbreviation: "",
  },
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];
