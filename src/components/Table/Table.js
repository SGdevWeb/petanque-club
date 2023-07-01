import styles from "./Table.module.scss";
import { useState, useEffect } from "react";
import data from "../../data/qualifs.json";

function Table({ classname }) {
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    setTableData(data);
    if (data.length > 0) {
      setTableHeaders(Object.keys(data[0]));
    }
  }, []);

  return (
    <div className={`${styles.container} mb-20`}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              {tableHeaders.map((header) => (
                <td data-label={header} key={header}>
                  {item[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
