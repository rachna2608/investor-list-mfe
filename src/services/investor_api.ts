import axios from "axios";
import type { Investor } from "../types/Investor";

const API_BASE = "http://localhost:5288/api"; // Update this with real backend URL

export const fetchInvestors = async (): Promise<Investor[]> => {
  const response = await axios.get<Investor[]>(`${API_BASE}/investors`);
  return response.data;
};