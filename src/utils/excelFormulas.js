const leftOption = carac => {
  if (!carac || carac === 0) return "";
  if (carac === "n-A" || carac === "n-a" || carac === "N-a") return "";
  const idxOfSpace = carac.indexOf(" ");
  if (idxOfSpace === -1) return carac;
  return carac.substring(0, idxOfSpace);
};

const getDescripcion = sol => {
  const { plantillaSeleccionada, camposDinamicos } = sol;

  const tempResp = `${
    plantillaSeleccionada["Nombre Plantilla (breve)"]
  } ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 1"]]
  )} ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 2"]]
  )} ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 3"]]
  )} ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 4"]]
  )} ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 5"]]
  )} ${leftOption(
    camposDinamicos[plantillaSeleccionada["Característica 6"]]
  )} `;

  if (tempResp.length > 40) return tempResp.substring(0, 39);
  return tempResp;
};

const getCaracCompleta = (key, value, last = false) => {
  if (value) {
    return `, ${key}: ${value}`;
  }
  return "";
};

const getDescripcionCompleta = sol => {
  const { plantillaSeleccionada, camposDinamicos } = sol;
  return `${plantillaSeleccionada["Nombre Plantilla"]}${getCaracCompleta(
    plantillaSeleccionada["Característica 1"],
    camposDinamicos[plantillaSeleccionada["Característica 1"]]
  )}${getCaracCompleta(
    plantillaSeleccionada["Característica 2"],
    camposDinamicos[plantillaSeleccionada["Característica 2"]]
  )}${getCaracCompleta(
    plantillaSeleccionada["Característica 3"],
    camposDinamicos[plantillaSeleccionada["Característica 3"]]
  )}${getCaracCompleta(
    plantillaSeleccionada["Característica 4"],
    camposDinamicos[plantillaSeleccionada["Característica 4"]]
  )}${getCaracCompleta(
    plantillaSeleccionada["Característica 5"],
    camposDinamicos[plantillaSeleccionada["Característica 5"]]
  )}${getCaracCompleta(
    plantillaSeleccionada["Característica 6"],
    camposDinamicos[plantillaSeleccionada["Característica 6"]]
  )}.-`;
};

export { getDescripcion, getDescripcionCompleta };
