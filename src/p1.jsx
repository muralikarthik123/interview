import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./a1.jsx";

const Page1 = () => {
  const { data,setData } = useContext(DataContext);
  const navigate = useNavigate();

  const deletes=(indexing)=>{
    const delted=data.filter((value,index)=>index!==indexing)
    setData(delted)
    
  }
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Data Table</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/form")}
      >
        Add Data
      </button>

      <table className="w-full mt-4 border-collapse border border-gray-300">

          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>

          {data.length > 0 ? (
            data.map((item, index) => 
              (
              <tr key={index}>
                <td className="border p-2">{item.name}</td>
                <button onClick={()=>deletes(index)}>Delete</button>
                <td className="border p-2">{item.email}</td>
                <button onClick={()=>deletes(index)}>Delete</button>
              </tr>
            )
          )
          ) : (
            <tr>
              <td className="border p-2 text-center" colSpan="2">
                No Data Available
              </td>
            </tr>
          )}
      </table>
    </div>
  );
};

export default Page1;
