import { configSheet } from "./config";

const init = sheet => {
  return new Promise((res, rej) => {
    // window.gapi.load("client", initClient(res));
    window.gapi.load("client", () =>
      window.gapi.client
        .init({
          apiKey: configSheet.apiKey,
          // Your API key will be automatically added to the Discovery Document URLs.
          discoveryDocs: configSheet.discoveryDocs
        })
        .then(() => {
          // 3. Initialize and make the API request.
          window.gapi.client.load("sheets", "v4", () => {
            window.gapi.client.sheets.spreadsheets.values
              .get({
                spreadsheetId: configSheet.spreadsheetId,
                range: sheet
              })
              .then(({ result }) => {
                const { values } = result;
                const formatted = values
                  .reduce((acum, currentValue) => {
                    const row = {};
                    currentValue.forEach(
                      (r, index) => (row[values[0][index]] = r)
                    );
                    acum.push(row);
                    return acum;
                  }, [])
                  .filter((val, idx) => idx !== 0);
                res(formatted);
              });
          });
        })
    );
  });
};

const submitRow = values => {
  window.gapi.load("client", () =>
    window.gapi.client
      .init({
        apiKey: configSheet.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: configSheet.discoveryDocs
      })
      .then(() => {
        window.gapi.client.load("sheets", "v4", () => {
          window.gapi.client.sheets.spreadsheets.values
            .update({
              spreadsheetId: configSheet.spreadsheetId,
              range: "Sheet2",
              resource: { values: [["Damian", "Epsz"]] }
            })
            .then(response => {
              var result = response.result;
              console.log(`${result.updatedCells} cells updated.`);
            });
        });
      })
  );
};

export default { init, submitRow };
