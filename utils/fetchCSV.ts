import { Opportunity } from "@/interface/Opportunity";
import Papa from "papaparse";

export const fetchCSV = async (url: string) => {
  return new Promise<Opportunity[]>((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data as Opportunity[]);
      },
      error: (error) => reject(error),
    });
  });
};
