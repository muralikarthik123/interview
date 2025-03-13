import React, { createContext, useState } from "react";

export const DataContext1 = createContext(); // Context remains the same

export function DataProvider1({ children }) { // Renamed provider function
  const [data1, setData1] = useState([]);

  return (
    <DataContext1.Provider value={{ data1, setData1 }}>
      {children}
    </DataContext1.Provider>
  );
}
