import { useEffect, useState } from "react";
import type { Investor } from "../types/Investor";
import { fetchInvestors } from "../services/investor_api";

type Props = {
  onSelectInvestor: (id: number) => void;
};

const InvestorTable = ({ onSelectInvestor }: Props) => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchInvestors()
      .then(data => {
        setInvestors(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch investors");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading investors...</p>;
  if (error) return <p>{error}</p>;
  // const investors = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     type: "Individual",
  //     address: "123 Main St, Cityville",
  //     totalCommitment: 100000,
  //     dateAdded: "2023-01-01",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     type: "Institutional",
  //     address: "456 Elm St, Townsville",
  //     totalCommitment: 250000,
  //     dateAdded: "2023-02-15",
  //   },
  //   {
  //     id: 3,
  //     name: "Acme Corp",
  //     type: "Corporate",
  //     address: "789 Oak St, Villagetown",
  //     totalCommitment: 500000,
  //     dateAdded: null,
  //   },
  // ];
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Date Added</th>
          <th>Address</th>
          <th>Total Commitment</th>
        </tr>
      </thead>
      <tbody>
        {investors.map((inv) => (
          <tr key={inv.id} onClick={() => onSelectInvestor(inv.id)} style={{ cursor: 'pointer' }}>
            <td>{inv.id}</td>
            <td>{inv.name}</td>
            <td>{inv.type}</td>
            <td>{inv.dateAdded || "N/A"}</td>
            <td>{inv.address}</td>
            <td>£{inv.totalCommitment.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default InvestorTable;