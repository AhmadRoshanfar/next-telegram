"use client";
import { useEffect, useState } from "react";

function logMe(message) {
  var sendMessage = `
پیام شما: ${message}
  `;
  // telegram.sendData(sendMessage);

  // telegram.close();
}
export default function Checkout() {
  useEffect(() => {
    let telegram = window.Telegram.WebApp;

    telegram.ready();
    let main_page = document.querySelector("#main_page");

    telegram.SettingsButton.show();
    telegram.BackButton.show();
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    code: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    telegram.MainButton.text = "Pay :)";
    telegram.MainButton.show();
    telegram.MainButton.onClick(logMe("Hello"));
    // You can replace this with your form submission logic (e.g., sending data to a server)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap space-y-2">
        <label
          htmlFor="firstName"
          className="w-1/2 text-sm  m-4 font-medium mr-2"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full rounded-md border border-gray-300 p-2  m-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label
          className="w-1/2 text-sm  m-4 font-medium mr-2"
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full rounded-md border border-gray-300 p-2  m-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label
          className="w-1/2 text-sm  m-4 font-medium mr-2"
          htmlFor="address"
        >
          Address:
        </label>
        <textarea
          id="address"
          name="address"
          className="w-full rounded-md border border-gray-300 p-2  m-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
        <label className="w-1/2 text-sm  m-4 font-medium mr-2" htmlFor="code">
          Postal Code:
        </label>
        <input
          type="text"
          id="code"
          name="code"
          className="w-full rounded-md border border-gray-300 p-2 m-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.code}
          onChange={handleChange}
          required
        />
        <br />
        <label
          className="w-1/2 text-sm  m-4 font-medium mr-2"
          htmlFor="phoneNumber"
        >
          Phone Number:
        </label>
        <input
          type="tel" // Use "tel" for phone number input
          id="phoneNumber"
          name="phoneNumber"
          className="w-full rounded-md border m-4 border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={formData.formData}
          onChange={handleChange}
          required
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
}
