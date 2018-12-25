import config from "./config";

const init = () => {
  return new Promise((res, rej) => {
    // window.gapi.load("client", initClient(res));
    window.gapi.load("client", () =>
      window.gapi.client
        .init({
          apiKey: config.apiKey,
          // Your API key will be automatically added to the Discovery Document URLs.
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
          // 3. Initialize and make the API request.
          window.gapi.client.load("sheets", "v4", () => {
            window.gapi.client.sheets.spreadsheets.values
              .get({
                spreadsheetId: config.spreadsheetId,
                range: "Sheet1"
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

export default { init };
