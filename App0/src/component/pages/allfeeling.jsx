import React, { useState } from "react";
import "./allfeelingS.css";

export default AllFeeling;

function AllFeeling() {
  // إنشاء حالة للصفوف
  const [rows, setRows] = useState([
    { id: 1, name: "Overthinking" },
    { id: 2, name: "Anger" },
    { id: 3, name: "Anger" }
  ]);

  // دالة لحذف الصف
  const handleDelete = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <>
      <div className="bodyc">
        <h1>All Feeling</h1>
        <br />

        <div className="all">
          <table className="allt">
            <thead>
              <tr>
                <th className="ti">Feeling name</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <tr>
                    <td className="alln">{row.name}</td>
                    <td>
                      <button className="dbu" onClick={() => handleDelete(row.id)}>Delete</button>
                    </td>
                    <td>
                      <button className="ubu">Update</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3"><hr className="hrall" /></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
