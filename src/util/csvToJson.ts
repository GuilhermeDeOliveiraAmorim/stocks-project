import csvToJson from "convert-csv-to-json";

let fileInputName =
    "/home/guilherme/Workspace/stocks-project/src/util/report-statement-total.csv";
let fileOutputName =
    "/home/guilherme/Workspace/stocks-project/src/util/myOutputFile.json";

export const jsonToCsv = csvToJson.generateJsonFileFromCsv(
    fileInputName,
    fileOutputName
);
