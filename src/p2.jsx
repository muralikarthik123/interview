import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./a1.jsx";

const Page2 = () => {
  const { setData } = useContext(DataContext);
  const [formData, setFormData] = useState(
    { name: "",
     email: "" 
    });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formData]); // Add new data to existing data
    navigate("/"); // Navigate back to Page1
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fill the Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page2;
