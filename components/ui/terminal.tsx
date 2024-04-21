import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const parseData = (input: any): any[] => {
  const rows: any[] = input.split("<EOL>");
  const headers: any[] = rows[0]
    .split(" | ")
    .filter((header: any) => header.trim());
  const data: any[] = rows.slice(1).map((row: any) => {
    const cells: any[] = row.split(" | ").filter((cell: any) => cell.trim());
    return headers.reduce<any>((obj: any, header: any, index: any) => {
      obj[header] = cells[index];
      return obj;
    }, {});
  });
  return data;
};

const demoFile = `id | first_name | last_name | email | phone_number | hire_date | department<EOL>
1 | Robert | Anderson | robert.anderson@email.com | 7778889999 | 2010-06-30T18:30:00.000Z | Mathematics<EOL>
2 | Emma | Taylor | emma.taylor@email.com | 1112223333 | 2015-03-14T18:30:00.000Z | English Literature<EOL>
3 | Daniel | Moore | daniel.moore@email.com | 4445556666 | 2018-08-31T18:30:00.000Z | Computer Science<EOL>
4 | Olivia | Wilson | olivia.wilson@email.com | 7778889999 | 2012-01-14T18:30:00.000Z | Biology<EOL>
5 | William | Thomas | william.thomas@email.com | 2223334444 | 2016-05-31T18:30:00.000Z | History<EOL>`;

export default function Terminal() {
  const [codes, setCodes] = useState<any>([]);

  useEffect(() => {
    const data = parseData(demoFile);
    // data.reverse();
    setCodes(data);
    console.log(data);
  }, []);

  return (
    <div className="w-full flex flex-col relative h-screen border-l-2 border-slate-100">
      <div className="flex flex-row">
        <Table>
          <TableHeader>
            <TableRow>
              {parseData(demoFile)[0] &&
                Object.keys(parseData(demoFile)[0]).map((key, index) => (
                  <TableHead key={index}>{key}</TableHead>
                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {codes.map((row: any, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{row[0]}</TableCell>
                <TableCell className="font-medium">{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell className="text-right">{row.phone_number}</TableCell>
                <TableCell className="text-right">{row.hire_date}</TableCell>
                <TableCell className="text-right">{row.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}