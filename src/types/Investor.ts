export interface Investor {
  id: number;
  name: string;
  type: string;
  address: string;
  totalCommitment: number;
  dateAdded?: string;
}