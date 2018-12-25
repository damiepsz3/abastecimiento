import React, {Component} from "react";
import {Header, Grid, Input, Dropdown} from "semantic-ui-react";
import "../../App.css";



class Camposcomunes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiereStock: ''
    };
  }
  //obj = {value: 'des'}
  handleChange = (e, { value }) => this.setState({requiereStock: value})

  opcionesGradoDeCriticidad = [
    {
      key: '0',
      value: '  A1- No previsible- Oc Parada',
      text: '  A1- No previsible- Oc Parada'
    }, {
      key: '1',
      value: '  A2- No previsible- Afecta Prod',
      text: '  A2- No previsible- Afecta Prod'
    }, {
      key: '2',
      value: 'D3- Eq Auxiliar- No critico',
      text: 'D3- Eq Auxiliar- No critico'
    }, {
      key: '3',
      value: '  B1- Previsible- Oc Parada',
      text: '  B1- Previsible- Oc Parada'
    }
    , {
      key: '4',
      value: '  B1- Previsible- Oc Parada',
      text: '  B1- Previsible- Oc Parada'
    }
    , {
      key: '5',
      value: 'B2- Previsible- Afecta Prod',
      text: 'B2- Previsible- Afecta Prod'
    }
    , {
      key: '6',
      value: 'B3- Previsible- No critico',
      text: 'B3- Previsible- No critico'
    }
    , {
      key: '7',
      value: 'C1- Reparable- Oc Parada',
      text: 'C1- Reparable- Oc Parada'
    }
    , {
      key: '8',
      value: 'C3- Reparable- No critico',
      text: 'C3- Reparable- No critico'
    }
    , {
      key: '9',
      value: 'C2- Reparable- Afecta Prod',
      text: 'C2- Reparable- Afecta Prod'
    }

  ]
  opcionesSector = [
   {
     "key": 0,
     "value": "Produc. / Operación Pozuelo",
     "text": "Produc. / Operación Pozuelo"
   },
   {
     "key": 1,
     "value": "(No usar) Almacén Lagos",
     "text": "(No usar) Almacén Lagos"
   },
   {
     "key": 2,
     "value": "(no usar) Logística Regional - Norte",
     "text": "(no usar) Logística Regional - Norte"
   },
   {
     "key": 3,
     "value": "(no usar) Logística Regional - Sur",
     "text": "(no usar) Logística Regional - Sur"
   },
   {
     "key": 4,
     "value": "Administracion Lagos",
     "text": "Administracion Lagos"
   },
   {
     "key": 5,
     "value": "Almacén Bahía Blanca",
     "text": "Almacén Bahía Blanca"
   },
   {
     "key": 6,
     "value": "Almacén El Cofre y Calera",
     "text": "Almacén El Cofre y Calera"
   },
   {
     "key": 7,
     "value": "Almacén Jaen",
     "text": "Almacén Jaen"
   },
   {
     "key": 8,
     "value": "Almacén Lógico",
     "text": "Almacén Lógico"
   },
   {
     "key": 9,
     "value": "Almacén Merco",
     "text": "Almacén Merco"
   },
   {
     "key": 10,
     "value": "Almacén Timbúes",
     "text": "Almacén Timbúes"
   },
   {
     "key": 11,
     "value": "Asistente Gerencia Rosario",
     "text": "Asistente Gerencia Rosario"
   },
   {
     "key": 12,
     "value": "BIO Lagos",
     "text": "BIO Lagos"
   },
   {
     "key": 13,
     "value": "Compras Insumos Honduras",
     "text": "Compras Insumos Honduras"
   },
   {
     "key": 14,
     "value": "Compras Insumos Perú",
     "text": "Compras Insumos Perú"
   },
   {
     "key": 15,
     "value": "Contabilidad Merco",
     "text": "Contabilidad Merco"
   },
   {
     "key": 16,
     "value": "CROM",
     "text": "CROM"
   },
   {
     "key": 17,
     "value": "Fertilizantes",
     "text": "Fertilizantes"
   },
   {
     "key": 18,
     "value": "Gestión BB",
     "text": "Gestión BB"
   },
   {
     "key": 19,
     "value": "Ingeniería de Planta",
     "text": "Ingeniería de Planta"
   },
   {
     "key": 20,
     "value": "IT BA",
     "text": "IT BA"
   },
   {
     "key": 21,
     "value": "IT Paraguay",
     "text": "IT Paraguay"
   },
   {
     "key": 22,
     "value": "IT Uruguay",
     "text": "IT Uruguay"
   },
   {
     "key": 23,
     "value": "Laboratorio Lagos",
     "text": "Laboratorio Lagos"
   },
   {
     "key": 24,
     "value": "Laboratorio Merco",
     "text": "Laboratorio Merco"
   },
   {
     "key": 25,
     "value": "Laboratorio Timbúes",
     "text": "Laboratorio Timbúes"
   },
   {
     "key": 26,
     "value": "Laboratorios de café",
     "text": "Laboratorios de café"
   },
   {
     "key": 27,
     "value": "Logística Bahía Blanca",
     "text": "Logística Bahía Blanca"
   },
   {
     "key": 28,
     "value": "Logística Lagos",
     "text": "Logística Lagos"
   },
   {
     "key": 29,
     "value": "Logística Regional Timbúes",
     "text": "Logística Regional Timbúes"
   },
   {
     "key": 30,
     "value": "Logística Timbúes",
     "text": "Logística Timbúes"
   },
   {
     "key": 31,
     "value": "Mantenimiento Bahía Blanca",
     "text": "Mantenimiento Bahía Blanca"
   },
   {
     "key": 32,
     "value": "Mantenimiento El Cofre",
     "text": "Mantenimiento El Cofre"
   },
   {
     "key": 33,
     "value": "Mantenimiento Lagos",
     "text": "Mantenimiento Lagos"
   },
   {
     "key": 34,
     "value": "Mantenimiento Lógico",
     "text": "Mantenimiento Lógico"
   },
   {
     "key": 35,
     "value": "Mantenimiento Merco",
     "text": "Mantenimiento Merco"
   },
   {
     "key": 36,
     "value": "Mantenimiento Quimili",
     "text": "Mantenimiento Quimili"
   },
   {
     "key": 37,
     "value": "Mantenimiento Timbúes",
     "text": "Mantenimiento Timbúes"
   },
   {
     "key": 38,
     "value": "Mejora Continua",
     "text": "Mejora Continua"
   },
   {
     "key": 39,
     "value": "Produc. / Operación Alsur",
     "text": "Produc. / Operación Alsur"
   },
   {
     "key": 40,
     "value": "Produc. / Operación América",
     "text": "Produc. / Operación América"
   },
   {
     "key": 41,
     "value": "Produc./Operación Bahía Blanca",
     "text": "Produc./Operación Bahía Blanca"
   },
   {
     "key": 42,
     "value": "Produc. / Operación Baradero",
     "text": "Produc. / Operación Baradero"
   },
   {
     "key": 43,
     "value": "Produc. / Operación Basavilbaso",
     "text": "Produc. / Operación Basavilbaso"
   },
   {
     "key": 44,
     "value": "Produc. / Operación Calera",
     "text": "Produc. / Operación Calera"
   },
   {
     "key": 45,
     "value": "Produc. / Operación CDU",
     "text": "Produc. / Operación CDU"
   },
   {
     "key": 46,
     "value": "Produc. / Operación Charata",
     "text": "Produc. / Operación Charata"
   },
   {
     "key": 47,
     "value": "Produc. / Operación Curuguaty",
     "text": "Produc. / Operación Curuguaty"
   },
   {
     "key": 48,
     "value": "Produc. / Operación Ibagué",
     "text": "Produc. / Operación Ibagué"
   },
   {
     "key": 49,
     "value": "Produc. / Operación Irineo Portella",
     "text": "Produc. / Operación Irineo Portella"
   },
   {
     "key": 50,
     "value": "Produc. / Operación Lagos",
     "text": "Produc. / Operación Lagos"
   },
   {
     "key": 51,
     "value": "Produc. / Operación Levalle",
     "text": "Produc. / Operación Levalle"
   },
   {
     "key": 52,
     "value": "Produc. / Operación Lógico",
     "text": "Produc. / Operación Lógico"
   },
   {
     "key": 53,
     "value": "Produc. / Operación Merco",
     "text": "Produc. / Operación Merco"
   },
   {
     "key": 54,
     "value": "Produc. / Operación Paysadú",
     "text": "Produc. / Operación Paysadú"
   },
   {
     "key": 55,
     "value": "Produc. / Operación Pereira",
     "text": "Produc. / Operación Pereira"
   },
   {
     "key": 56,
     "value": "Produc. / Operación Pergamino",
     "text": "Produc. / Operación Pergamino"
   },
   {
     "key": 57,
     "value": "Produc. / Operación Peyrano",
     "text": "Produc. / Operación Peyrano"
   },
   {
     "key": 58,
     "value": "Produc. / Operación Presid. de la Plaza",
     "text": "Produc. / Operación Presid. de la Plaza"
   },
   {
     "key": 59,
     "value": "Produc. / Operación Quimili",
     "text": "Produc. / Operación Quimili"
   },
   {
     "key": 60,
     "value": "Produc. / Operación Saladillo",
     "text": "Produc. / Operación Saladillo"
   },
   {
     "key": 61,
     "value": "Produc. / Operación Sarah",
     "text": "Produc. / Operación Sarah"
   },
   {
     "key": 62,
     "value": "Produc. / Operación Tapachula",
     "text": "Produc. / Operación Tapachula"
   },
   {
     "key": 63,
     "value": "Produc. / Operación Timbúes",
     "text": "Produc. / Operación Timbúes"
   },
   {
     "key": 64,
     "value": "Produc. / Operación Tuna",
     "text": "Produc. / Operación Tuna"
   },
   {
     "key": 65,
     "value": "Produc. / Operación Villaguay",
     "text": "Produc. / Operación Villaguay"
   },
   {
     "key": 66,
     "value": "Produc. / Operación Villanueva",
     "text": "Produc. / Operación Villanueva"
   },
   {
     "key": 67,
     "value": "Produc. / Operación Zacapoaxtla",
     "text": "Produc. / Operación Zacapoaxtla"
   },
   {
     "key": 68,
     "value": "Proyecto Lagos",
     "text": "Proyecto Lagos"
   },
   {
     "key": 69,
     "value": "Proyecto Timbúes",
     "text": "Proyecto Timbúes"
   },
   {
     "key": 70,
     "value": "Puebla Mexico",
     "text": "Puebla Mexico"
   },
   {
     "key": 71,
     "value": "QA Calidad Regional",
     "text": "QA Calidad Regional"
   },
   {
     "key": 72,
     "value": "RRHH",
     "text": "RRHH"
   },
   {
     "key": 73,
     "value": "RRHH A101",
     "text": "RRHH A101"
   },
   {
     "key": 74,
     "value": "RRHH A102",
     "text": "RRHH A102"
   },
   {
     "key": 75,
     "value": "RRHH A115",
     "text": "RRHH A115"
   },
   {
     "key": 76,
     "value": "Seguridad Patrimonial (todos los centros)",
     "text": "Seguridad Patrimonial (todos los centros)"
   },
   {
     "key": 77,
     "value": "Servicios y Caldera",
     "text": "Servicios y Caldera"
   },
   {
     "key": 78,
     "value": "SHE América",
     "text": "SHE América"
   },
   {
     "key": 79,
     "value": "SHE Bahía Blanca",
     "text": "SHE Bahía Blanca"
   },
   {
     "key": 80,
     "value": "SHE Basavilbaso",
     "text": "SHE Basavilbaso"
   },
   {
     "key": 81,
     "value": "SHE Buenos Aires",
     "text": "SHE Buenos Aires"
   },
   {
     "key": 82,
     "value": "SHE Callao",
     "text": "SHE Callao"
   },
   {
     "key": 83,
     "value": "SHE Charata",
     "text": "SHE Charata"
   },
   {
     "key": 84,
     "value": "SHE Compromin Manzanillo",
     "text": "SHE Compromin Manzanillo"
   },
   {
     "key": 85,
     "value": "SHE Curuguaty",
     "text": "SHE Curuguaty"
   },
   {
     "key": 86,
     "value": "SHE Ibagué",
     "text": "SHE Ibagué"
   },
   {
     "key": 87,
     "value": "SHE Irineo Portella",
     "text": "SHE Irineo Portella"
   },
   {
     "key": 88,
     "value": "SHE JAEN - LDC PERU",
     "text": "SHE JAEN - LDC PERU"
   },
   {
     "key": 89,
     "value": "SHE Lagos",
     "text": "SHE Lagos"
   },
   {
     "key": 90,
     "value": "SHE Levalle",
     "text": "SHE Levalle"
   },
   {
     "key": 91,
     "value": "SHE Lógico",
     "text": "SHE Lógico"
   },
   {
     "key": 92,
     "value": "SHE Merco",
     "text": "SHE Merco"
   },
   {
     "key": 93,
     "value": "SHE Mexico",
     "text": "SHE Mexico"
   },
   {
     "key": 94,
     "value": "SHE MOYOBAMBA - LDC PERU",
     "text": "SHE MOYOBAMBA - LDC PERU"
   },
   {
     "key": 95,
     "value": "SHE MOYOBAMBA - LDC PROC",
     "text": "SHE MOYOBAMBA - LDC PROC"
   },
   {
     "key": 96,
     "value": "SHE Pereira",
     "text": "SHE Pereira"
   },
   {
     "key": 97,
     "value": "SHE Pergamino",
     "text": "SHE Pergamino"
   },
   {
     "key": 98,
     "value": "SHE Pozuelo",
     "text": "SHE Pozuelo"
   },
   {
     "key": 99,
     "value": "SHE Presid. de la Plaza",
     "text": "SHE Presid. de la Plaza"
   },
   {
     "key": 100,
     "value": "SHE Quimili",
     "text": "SHE Quimili"
   },
   {
     "key": 101,
     "value": "SHE Saladillo",
     "text": "SHE Saladillo"
   },
   {
     "key": 102,
     "value": "SHE Sarah",
     "text": "SHE Sarah"
   },
   {
     "key": 103,
     "value": "SHE Timbúes",
     "text": "SHE Timbúes"
   },
   {
     "key": 104,
     "value": "SHE Tres Bocas",
     "text": "SHE Tres Bocas"
   },
   {
     "key": 105,
     "value": "SHE Tuna",
     "text": "SHE Tuna"
   },
   {
     "key": 106,
     "value": "SHE Villaguay",
     "text": "SHE Villaguay"
   },
   {
     "key": 107,
     "value": "SHE Villanueva",
     "text": "SHE Villanueva"
   }
  ]
  opcionesGradoDeUnidadesDeMedida= [
    {
       key: '1'
      ,value:'Pulgada cúbica [2 Pulgada cuadrada 3]'
      ,text:'Pulgada cúbica [2 Pulgada cuadrada 3]'
    },
    {
       key: '2'
      ,value:'Porcentaje [%]'
      ,text:'Porcentaje [%]'
    },
    {
       key: '3'
      ,value:'Tanto por mil [%O]'
      ,text:'Tanto por mil [%O]'
    },
    {
       key: '4'
      ,value:'Metro/Minuto [0]'
      ,text:'Metro/Minuto [0]'
    },
    {
       key: '5'
      ,value:' [1]'
      ,text:' [1]'
    },
    {
       key: '6'
      ,value:'Siemens por metro [A/U]'
      ,text:'Siemens por metro [A/U]'
    },
    {
       key: '7'
      ,value:'Resistencia eléctrica espec. [AA]'
      ,text:'Resistencia eléctrica espec. [AA]'
    },
    {
       key: '8'
      ,value:'Acre [ACR]'
      ,text:'Acre [ACR]'
    },
    {
       key: '9'
      ,value:'Alqueire [AL]'
      ,text:'Alqueire [AL]'
    },
    {
       key: '10'
      ,value:'Bidón [BID]'
      ,text:'Bidón [BID]'
    },
    {
       key: '11'
      ,value:'Block [BLK]'
      ,text:'Block [BLK]'
    },
    {
       key: '12'
      ,value:'Bolsa [BOL]'
      ,text:'Bolsa [BOL]'
    },
    {
       key: '13'
      ,value:'Bulto [BTO]'
      ,text:'Bulto [BTO]'
    },
    {
       key: '14'
      ,value:'Cada uno [C/U]'
      ,text:'Cada uno [C/U]'
    },
    {
       key: '15'
      ,value:'Centímetro cúbico/Segundo [C3S]'
      ,text:'Centímetro cúbico/Segundo [C3S]'
    },
    {
       key: '16'
      ,value:'Caja [CA]'
      ,text:'Caja [CA]'
    },
    {
       key: '17'
      ,value:'Cartón [CAR]'
      ,text:'Cartón [CAR]'
    },
    {
       key: '18'
      ,value:'Participación en grupo en % [CEB]'
      ,text:'Participación en grupo en % [CEB]'
    },
    {
       key: '19'
      ,value:'Caja [CJ]'
      ,text:'Caja [CJ]'
    },
    {
       key: '20'
      ,value:'Centilitro [CL]'
      ,text:'Centilitro [CL]'
    },
    {
       key: '21'
      ,value:'Centímetros [CM]'
      ,text:'Centímetros [CM]'
    },
    {
       key: '22'
      ,value:'Centímetro cuadrado [CM2]'
      ,text:'Centímetro cuadrado [CM2]'
    },
    {
       key: '23'
      ,value:'Centímetro cúbico [CM3]'
      ,text:'Centímetro cúbico [CM3]'
    },
    {
       key: '24'
      ,value:'Centímetro/Segundo [CMS]'
      ,text:'Centímetro/Segundo [CMS]'
    },
    {
       key: '25'
      ,value:'Milifaradio [CO]'
      ,text:'Milifaradio [CO]'
    },
    {
       key: '26'
      ,value:'Cuarto galón, EE.UU., líquido [CTO]'
      ,text:'Cuarto galón, EE.UU., líquido [CTO]'
    },
    {
       key: '27'
      ,value:'Días [D]'
      ,text:'Días [D]'
    },
    {
       key: '28'
      ,value:'Grado [DEG]'
      ,text:'Grado [DEG]'
    },
    {
       key: '29'
      ,value:'Dias [DIA]'
      ,text:'Dias [DIA]'
    },
    {
       key: '30'
      ,value:'Decímetro [DM]'
      ,text:'Decímetro [DM]'
    },
    {
       key: '31'
      ,value:'Decímetro cúbico [DM3]'
      ,text:'Decímetro cúbico [DM3]'
    },
    {
       key: '32'
      ,value:'Docena [DOC]'
      ,text:'Docena [DOC]'
    },
    {
       key: '33'
      ,value:'Unidades enzimas/Milímetro [EML]'
      ,text:'Unidades enzimas/Milímetro [EML]'
    },
    {
       key: '34'
      ,value:'Estuches [EST]'
      ,text:'Estuches [EST]'
    },
    {
       key: '35'
      ,value:'Frasco [FCO]'
      ,text:'Frasco [FCO]'
    },
    {
       key: '36'
      ,value:'Gramo [G]'
      ,text:'Gramo [G]'
    },
    {
       key: '37'
      ,value:'Gramo aditivo/Litro [G/L]'
      ,text:'Gramo aditivo/Litro [G/L]'
    },
    {
       key: '38'
      ,value:'Gramo oro [GAU]'
      ,text:'Gramo oro [GAU]'
    },
    {
       key: '39'
      ,value:'Gigajulio [GJ]'
      ,text:'Gigajulio [GJ]'
    },
    {
       key: '40'
      ,value:'Gramo/Litro [GLI]'
      ,text:'Gramo/Litro [GLI]'
    },
    {
       key: '41'
      ,value:'Galón (EE.UU.) [GLN]'
      ,text:'Galón (EE.UU.) [GLN]'
    },
    {
       key: '42'
      ,value:'Gramo/Mol [GM]'
      ,text:'Gramo/Mol [GM]'
    },
    {
       key: '43'
      ,value:'Gramo/Metro cuadrado [GM2]'
      ,text:'Gramo/Metro cuadrado [GM2]'
    },
    {
       key: '44'
      ,value:'Gramo/Metro cúbico [GM3]'
      ,text:'Gramo/Metro cúbico [GM3]'
    },
    {
       key: '45'
      ,value:'Gigaohmio [GOH]'
      ,text:'Gigaohmio [GOH]'
    },
    {
       key: '46'
      ,value:'Gramo principio activo [GPA]'
      ,text:'Gramo principio activo [GPA]'
    },
    {
       key: '47'
      ,value:'Galones por hora (EE.UU) [GPH]'
      ,text:'Galones por hora (EE.UU) [GPH]'
    },
    {
       key: '48'
      ,value:'Galones por milla (EE.UU) [GPM]'
      ,text:'Galones por milla (EE.UU) [GPM]'
    },
    {
       key: '49'
      ,value:'Grande [GRD]'
      ,text:'Grande [GRD]'
    },
    {
       key: '50'
      ,value:'Hora [H]'
      ,text:'Hora [H]'
    },
    {
       key: '51'
      ,value:'Hectárea [HA]'
      ,text:'Hectárea [HA]'
    },
    {
       key: '52'
      ,value:'Hojas [HJA]'
      ,text:'Hojas [HJA]'
    },
    {
       key: '53'
      ,value:'Hectolitro [HL]'
      ,text:'Hectolitro [HL]'
    },
    {
       key: '54'
      ,value:'Caballos de Fuerza [HP]'
      ,text:'Caballos de Fuerza [HP]'
    },
    {
       key: '55'
      ,value:'Horas [HRA]'
      ,text:'Horas [HRA]'
    },
    {
       key: '56'
      ,value:' [JG]'
      ,text:' [JG]'
    },
    {
       key: '57'
      ,value:'Años (annum) [JHR]'
      ,text:'Años (annum) [JHR]'
    },
    {
       key: '58'
      ,value:'Julio/Kilogramo [JKG]'
      ,text:'Julio/Kilogramo [JKG]'
    },
    {
       key: '59'
      ,value:'Capac.térmica espec. [JKK]'
      ,text:'Capac.térmica espec. [JKK]'
    },
    {
       key: '60'
      ,value:'Julio/Mol [JMO]'
      ,text:'Julio/Mol [JMO]'
    },
    {
       key: '61'
      ,value:'Kilogramo/Decímetro cúbico [KD3]'
      ,text:'Kilogramo/Decímetro cúbico [KD3]'
    },
    {
       key: '62'
      ,value:'Kilogramo [KG]'
      ,text:'Kilogramo [KG]'
    },
    {
       key: '63'
      ,value:'Kilogramo/Mol [KGM]'
      ,text:'Kilogramo/Mol [KGM]'
    },
    {
       key: '64'
      ,value:'Kilogramo principio activo [KGP]'
      ,text:'Kilogramo principio activo [KGP]'
    },
    {
       key: '65'
      ,value:'Kilogramo/Segundo [KGS]'
      ,text:'Kilogramo/Segundo [KGS]'
    },
    {
       key: '66'
      ,value:'Kilogramo/Metro cúbico [KGV]'
      ,text:'Kilogramo/Metro cúbico [KGV]'
    },
    {
       key: '67'
      ,value:'Kit [KIT]'
      ,text:'Kit [KIT]'
    },
    {
       key: '68'
      ,value:'Kilojulio/Kilogramo [KJK]'
      ,text:'Kilojulio/Kilogramo [KJK]'
    },
    {
       key: '69'
      ,value:'Kilojulio/Mol [KJM]'
      ,text:'Kilojulio/Mol [KJM]'
    },
    {
       key: '70'
      ,value:'Kilómetro [KM]'
      ,text:'Kilómetro [KM]'
    },
    {
       key: '71'
      ,value:'Kilómetro cuadrado [KM2]'
      ,text:'Kilómetro cuadrado [KM2]'
    },
    {
       key: '72'
      ,value:'Kilómetro/Hora [KMH]'
      ,text:'Kilómetro/Hora [KMH]'
    },
    {
       key: '73'
      ,value:'Kilomol [KML]'
      ,text:'Kilomol [KML]'
    },
    {
       key: '74'
      ,value:'Kelvin/Minuto [KMN]'
      ,text:'Kelvin/Minuto [KMN]'
    },
    {
       key: '75'
      ,value:'Kelvin/Segundo [KMS]'
      ,text:'Kelvin/Segundo [KMS]'
    },
    {
       key: '76'
      ,value:'Kilonewton [KN]'
      ,text:'Kilonewton [KN]'
    },
    {
       key: '77'
      ,value:'Kilopascal [KPA]'
      ,text:'Kilopascal [KPA]'
    },
    {
       key: '78'
      ,value:'Kilotoneladas [KT]'
      ,text:'Kilotoneladas [KT]'
    },
    {
       key: '79'
      ,value:'Kilovoltioamperio [KVA]'
      ,text:'Kilovoltioamperio [KVA]'
    },
    {
       key: '80'
      ,value:'Kilovatio [KW]'
      ,text:'Kilovatio [KW]'
    },
    {
       key: '81'
      ,value:'Kilovatio-hora [KWH]'
      ,text:'Kilovatio-hora [KWH]'
    },
    {
       key: '82'
      ,value:'Kg principio activo/kg [KWK]'
      ,text:'Kg principio activo/kg [KWK]'
    },
    {
       key: '83'
      ,value:'Litro [L]'
      ,text:'Litro [L]'
    },
    {
       key: '84'
      ,value:'Libra (pound) [LB]'
      ,text:'Libra (pound) [LB]'
    },
    {
       key: '85'
      ,value:'Botella [LC]'
      ,text:'Botella [LC]'
    },
    {
       key: '86'
      ,value:'Litro por 100 km [LCK]'
      ,text:'Litro por 100 km [LCK]'
    },
    {
       key: '87'
      ,value:'Litro/Minuto [LMI]'
      ,text:'Litro/Minuto [LMI]'
    },
    {
       key: '88'
      ,value:'Litro/Molécula-segundo [LMS]'
      ,text:'Litro/Molécula-segundo [LMS]'
    },
    {
       key: '89'
      ,value:'Litro por hora [LPH]'
      ,text:'Litro por hora [LPH]'
    },
    {
       key: '90'
      ,value:'Metro [M]'
      ,text:'Metro [M]'
    },
    {
       key: '91'
      ,value:'1 / Metro cuadrado [M-2]'
      ,text:'1 / Metro cuadrado [M-2]'
    },
    {
       key: '92'
      ,value:'Mol por litro [M/L]'
      ,text:'Mol por litro [M/L]'
    },
    {
       key: '93'
      ,value:'Mol por metro cúbico [M/M]'
      ,text:'Mol por metro cúbico [M/M]'
    },
    {
       key: '94'
      ,value:'Metro/Segundo [M/S]'
      ,text:'Metro/Segundo [M/S]'
    },
    {
       key: '95'
      ,value:'Metro cuadrado [M2]'
      ,text:'Metro cuadrado [M2]'
    },
    {
       key: '96'
      ,value:'Metro cuadrado/Segundo [M2S]'
      ,text:'Metro cuadrado/Segundo [M2S]'
    },
    {
       key: '97'
      ,value:'Metro cúbico [M3]'
      ,text:'Metro cúbico [M3]'
    },
    {
       key: '98'
      ,value:'Metro cúbico/Hora [M3H]'
      ,text:'Metro cúbico/Hora [M3H]'
    },
    {
       key: '99'
      ,value:'Metro cúbico/Segundo [M3S]'
      ,text:'Metro cúbico/Segundo [M3S]'
    },
    {
       key: '100'
      ,value:'Megajulio [MEJ]'
      ,text:'Megajulio [MEJ]'
    },
    {
       key: '101'
      ,value:'Miligramo [MG]'
      ,text:'Miligramo [MG]'
    },
    {
       key: '102'
      ,value:'Miligramo/Litro [MGL]'
      ,text:'Miligramo/Litro [MGL]'
    },
    {
       key: '103'
      ,value:'Megaohmio [MGO]'
      ,text:'Megaohmio [MGO]'
    },
    {
       key: '104'
      ,value:'Miligramo/Metro cúbico [MGV]'
      ,text:'Miligramo/Metro cúbico [MGV]'
    },
    {
       key: '105'
      ,value:'Metro/Hora [MH]'
      ,text:'Metro/Hora [MH]'
    },
    {
       key: '106'
      ,value:'Milla [MI]'
      ,text:'Milla [MI]'
    },
    {
       key: '107'
      ,value:'Milla cuadrada [MI2]'
      ,text:'Milla cuadrada [MI2]'
    },
    {
       key: '108'
      ,value:'Minuto [MIN]'
      ,text:'Minuto [MIN]'
    },
    {
       key: '109'
      ,value:'Microsegundo [MIS]'
      ,text:'Microsegundo [MIS]'
    },
    {
       key: '110'
      ,value:'Mililitro [ML]'
      ,text:'Mililitro [ML]'
    },
    {
       key: '111'
      ,value:'Millimol por litro [MLF]'
      ,text:'Millimol por litro [MLF]'
    },
    {
       key: '112'
      ,value:'Millas por galón (EEUU) [MLG]'
      ,text:'Millas por galón (EEUU) [MLG]'
    },
    {
       key: '113'
      ,value:'Milílitro principio activo [MLW]'
      ,text:'Milílitro principio activo [MLW]'
    },
    {
       key: '114'
      ,value:'Milímetro [MM]'
      ,text:'Milímetro [MM]'
    },
    {
       key: '115'
      ,value:'Milímetro cuadrado [MM2]'
      ,text:'Milímetro cuadrado [MM2]'
    },
    {
       key: '116'
      ,value:'Milímetro cúbico [MM3]'
      ,text:'Milímetro cúbico [MM3]'
    },
    {
       key: '117'
      ,value:'Meganewton [MN]'
      ,text:'Meganewton [MN]'
    },
    {
       key: '118'
      ,value:'Milinewton/Metro [MNM]'
      ,text:'Milinewton/Metro [MNM]'
    },
    {
       key: '119'
      ,value:'Meses [MON]'
      ,text:'Meses [MON]'
    },
    {
       key: '120'
      ,value:'Milipascal por segundo [MPS]'
      ,text:'Milipascal por segundo [MPS]'
    },
    {
       key: '121'
      ,value:'Millisecond [MS]'
      ,text:'Millisecond [MS]'
    },
    {
       key: '122'
      ,value:'Metro/Segundo al cuadrado [MS2]'
      ,text:'Metro/Segundo al cuadrado [MS2]'
    },
    {
       key: '123'
      ,value:'Microsiemens por centímetro [MSC]'
      ,text:'Microsiemens por centímetro [MSC]'
    },
    {
       key: '124'
      ,value:'Megavoltioamperio [MVA]'
      ,text:'Megavoltioamperio [MVA]'
    },
    {
       key: '125'
      ,value:'Megavatio/Hora [MWH]'
      ,text:'Megavatio/Hora [MWH]'
    },
    {
       key: '126'
      ,value:'Newton/Metro [N/M]'
      ,text:'Newton/Metro [N/M]'
    },
    {
       key: '127'
      ,value:'Nanometro [NAM]'
      ,text:'Nanometro [NAM]'
    },
    {
       key: '128'
      ,value:'Nanofaradio [NF]'
      ,text:'Nanofaradio [NF]'
    },
    {
       key: '129'
      ,value:'Newton/Milímetro cuadrado [NMM]'
      ,text:'Newton/Milímetro cuadrado [NMM]'
    },
    {
       key: '130'
      ,value:'Megavoltio [NMP]'
      ,text:'Megavoltio [NMP]'
    },
    {
       key: '131'
      ,value:'Nanoamperio [NR]'
      ,text:'Nanoamperio [NR]'
    },
    {
       key: '132'
      ,value:'Nanosegundo [NS]'
      ,text:'Nanosegundo [NS]'
    },
    {
       key: '133'
      ,value:'Resistencia eléctrica espec. [OCM]'
      ,text:'Resistencia eléctrica espec. [OCM]'
    },
    {
       key: '134'
      ,value:'Onza [OZ]'
      ,text:'Onza [OZ]'
    },
    {
       key: '135'
      ,value:'Onza líquida EE.UU. [OZL]'
      ,text:'Onza líquida EE.UU. [OZL]'
    },
    {
       key: '136'
      ,value:'Puntos [P]'
      ,text:'Puntos [P]'
    },
    {
       key: '137'
      ,value:'Par [PAA]'
      ,text:'Par [PAA]'
    },
    {
       key: '138'
      ,value:'Paleta [PAL]'
      ,text:'Paleta [PAL]'
    },
    {
       key: '139'
      ,value:'Paquete [PAQ]'
      ,text:'Paquete [PAQ]'
    },
    {
       key: '140'
      ,value:'Pares [PAR]'
      ,text:'Pares [PAR]'
    },
    {
       key: '141'
      ,value:'Pascal-segundo [PAS]'
      ,text:'Pascal-segundo [PAS]'
    },
    {
       key: '142'
      ,value:'Picofaradio [PF]'
      ,text:'Picofaradio [PF]'
    },
    {
       key: '143'
      ,value:'Pliegos [PGO]'
      ,text:'Pliegos [PGO]'
    },
    {
       key: '144'
      ,value:'Plancha [PHA]'
      ,text:'Plancha [PHA]'
    },
    {
       key: '145'
      ,value:'Pie cuadrado [PI2]'
      ,text:'Pie cuadrado [PI2]'
    },
    {
       key: '146'
      ,value:'Pie cúbico [PI3]'
      ,text:'Pie cúbico [PI3]'
    },
    {
       key: '147'
      ,value:'1/minuto [PMI]'
      ,text:'1/minuto [PMI]'
    },
    {
       key: '148'
      ,value:'Partes por billón [PPB]'
      ,text:'Partes por billón [PPB]'
    },
    {
       key: '149'
      ,value:'Parts per million [PPM]'
      ,text:'Parts per million [PPM]'
    },
    {
       key: '150'
      ,value:'Partes por trillón [PPT]'
      ,text:'Partes por trillón [PPT]'
    },
    {
       key: '151'
      ,value:'Número de personas [PRS]'
      ,text:'Número de personas [PRS]'
    },
    {
       key: '152'
      ,value:'Picosegundo [PS]'
      ,text:'Picosegundo [PS]'
    },
    {
       key: '153'
      ,value:'Pinta EE.UU., líquido [PT]'
      ,text:'Pinta EE.UU., líquido [PT]'
    },
    {
       key: '154'
      ,value:'Pulgada [PUL]'
      ,text:'Pulgada [PUL]'
    },
    {
       key: '155'
      ,value:'Pieza [PZA]'
      ,text:'Pieza [PZA]'
    },
    {
       key: '156'
      ,value:'Gramos/Centímetro cúbico [RHO]'
      ,text:'Gramos/Centímetro cúbico [RHO]'
    },
    {
       key: '157'
      ,value:'Resma [RMA]'
      ,text:'Resma [RMA]'
    },
    {
       key: '158'
      ,value:'Rollos [ROL]'
      ,text:'Rollos [ROL]'
    },
    {
       key: '159'
      ,value:'Revoluciones por minuto [RPM]'
      ,text:'Revoluciones por minuto [RPM]'
    },
    {
       key: '160'
      ,value:'Unidades enzimas [RS]'
      ,text:'Unidades enzimas [RS]'
    },
    {
       key: '161'
      ,value:'items [ST]'
      ,text:'items [ST]'
    },
    {
       key: '162'
      ,value:'Tonelada [T]'
      ,text:'Tonelada [T]'
    },
    {
       key: '163'
      ,value:'Talonarios [TAL]'
      ,text:'Talonarios [TAL]'
    },
    {
       key: '164'
      ,value:'Pie [TF]'
      ,text:'Pie [TF]'
    },
    {
       key: '165'
      ,value:'Tonelada [TO]'
      ,text:'Tonelada [TO]'
    },
    {
       key: '166'
      ,value:'Tonelada/Metro cúbico [TOM]'
      ,text:'Tonelada/Metro cúbico [TOM]'
    },
    {
       key: '167'
      ,value:'Tonelada EE.UU. [TON]'
      ,text:'Tonelada EE.UU. [TON]'
    },
    {
       key: '168'
      ,value:'Tambor [TR]'
      ,text:'Tambor [TR]'
    },
    {
       key: '169'
      ,value:'Miles [TS]'
      ,text:'Miles [TS]'
    },
    {
       key: '170'
      ,value:'Tubos [TUB]'
      ,text:'Tubos [TUB]'
    },
    {
       key: '171'
      ,value:'Unidad [UN]'
      ,text:'Unidad [UN]'
    },
    {
       key: '172'
      ,value:'Unidad de potencia [UP]'
      ,text:'Unidad de potencia [UP]'
    },
    {
       key: '173'
      ,value:'Voltioamperio [VA]'
      ,text:'Voltioamperio [VA]'
    },
    {
       key: '174'
      ,value:'Artículo de valor [VAL]'
      ,text:'Artículo de valor [VAL]'
    },
    {
       key: '175'
      ,value:'Semanas [WCH]'
      ,text:'Semanas [WCH]'
    },
    {
       key: '176'
      ,value:'Conductibilidad del calor [WMK]'
      ,text:'Conductibilidad del calor [WMK]'
    },
    {
       key: '177'
      ,value:'Velocidad de evaporación [WTL]'
      ,text:'Velocidad de evaporación [WTL]'
    },
    {
       key: '178'
      ,value:'Yarda [YD]'
      ,text:'Yarda [YD]'
    },
    {
       key: '179'
      ,value:'Yarda cuadrada [YD2]'
      ,text:'Yarda cuadrada [YD2]'
    },
    {
       key: '180'
      ,value:'Yarda cúbica [YD3]'
      ,text:'Yarda cúbica [YD3]'
    },
    {
       key: '181'
      ,value:'Microamperio [µA]'
      ,text:'Microamperio [µA]'
    },
    {
       key: '182'
      ,value:'Microfaradio [µF]'
      ,text:'Microfaradio [µF]'
    },
    {
       key: '183'
      ,value:'Microgramo/Litro [µGL]'
      ,text:'Microgramo/Litro [µGL]'
    },
    {
       key: '184'
      ,value:'Microgramo/Metro cúbico [µGV]'
      ,text:'Microgramo/Metro cúbico [µGV]'
    },
    {
       key: '185'
      ,value:'Microlitro [µL]'
      ,text:'Microlitro [µL]'
    },
    {
       key: '186'
      ,value:'Micrometro [µM]'
      ,text:'Micrometro [µM]'
    }]
  opcionesSiNo = [
    {
      key: '0',
      value: 'Si',
      text: 'Si'
    }, {
      key: '1',
      value: 'No',
      text: 'No'
    },
  ]
  opcionesPlanta = [
  {
     key: '0',
     value:'4102 - JAEN - LDC PERU A',
     text:'4102 - JAEN - LDC PERU A'
  },
  {
     key: '1'
    ,value:'4106 - MOYOBAMBA- LDC PERU'
    ,text:'4106 - MOYOBAMBA- LDC PERU'
  },
  {
     key: '2'
    ,value:'4202 - Callao, Perú - LDC Metals'
    ,text:'4202 - Callao, Perú - LDC Metals'
  },
  {
     key: '3'
    ,value:'4302 - Jaen - Perú'
    ,text:'4302 - Jaen - Perú'
  },
  {
     key: '4'
    ,value:'4306 - MOYOBAMBA- LDC PROC'
    ,text:'4306 - MOYOBAMBA- LDC PROC'
  },
  {
     key: '5'
    ,value:'6101 - Puebla - LDC Mexico SA de CV'
    ,text:'6101 - Puebla - LDC Mexico SA de CV'
  },
  {
     key: '6'
    ,value:'6102 - El Cofre - LDC Mexico SA de CV'
    ,text:'6102 - El Cofre - LDC Mexico SA de CV'
  },
  {
     key: '7'
    ,value:'6103 - Calera - LDC Mexico SA de CV'
    ,text:'6103 - Calera - LDC Mexico SA de CV'
  },
  {
     key: '8'
    ,value:'6104 - Tapacula - LDC México'
    ,text:'6104 - Tapacula - LDC México'
  },
  {
     key: '9'
    ,value:'6105 - Zacapoaxtla - LDC México'
    ,text:'6105 - Zacapoaxtla - LDC México'
  },
  {
     key: '10'
    ,value:'6107 - Alsur - LDC México'
    ,text:'6107 - Alsur - LDC México'
  },
  {
     key: '11'
    ,value:'6201 - COMPROMINMANZANILLO'
    ,text:'6201 - COMPROMINMANZANILLO'
  },
  {
     key: '12'
    ,value:'8101 - Bogotá - LDC Colombia'
    ,text:'8101 - Bogotá - LDC Colombia'
  },
  {
     key: '13'
    ,value:'8102 - Ibagué - LDC Colombia'
    ,text:'8102 - Ibagué - LDC Colombia'
  },
  {
     key: '14'
    ,value:'8103 - Pereira - LDC Colombia'
    ,text:'8103 - Pereira - LDC Colombia'
  },
  {
     key: '15'
    ,value:'9101 - Villanueva - LDC Honduras'
    ,text:'9101 - Villanueva - LDC Honduras'
  },
  {
     key: '16'
    ,value:'A101 - GRAL LAGOS'
    ,text:'A101 - GRAL LAGOS'
  },
  {
     key: '17'
    ,value:'A102 - TIMBUES'
    ,text:'A102 - TIMBUES'
  },
  {
     key: '18'
    ,value:'A103 - BUENOS AIRES'
    ,text:'A103 - BUENOS AIRES'
  },
  {
     key: '19'
    ,value:'A104 - ROSARIO'
    ,text:'A104 - ROSARIO'
  },
  {
     key: '20'
    ,value:'AIDS - PERGAMINO'
    ,text:'AIDS - PERGAMINO'
  },
  {
     key: '21'
    ,value:'A106 - CHARATA'
    ,text:'A106 - CHARATA'
  },
  {
     key: '22'
    ,value:'A107 - AMERICA'
    ,text:'A107 - AMERICA'
  },
  {
     key: '23'
    ,value:'A108 - SARAH'
    ,text:'A108 - SARAH'
  },
  {
     key: '24'
    ,value:'A110 - JESUS MARIA'
    ,text:'A110 - JESUS MARIA'
  },
  {
     key: '25'
    ,value:'A111 - SAN FRANCISCO'
    ,text:'A111 - SAN FRANCISCO'
  },
  {
     key: '26'
    ,value:'A112 - OLAVARRIA'
    ,text:'A112 - OLAVARRIA'
  },
  {
     key: '27'
    ,value:'A113 - CDU V'
    ,text:'A113 - CDU V'
  },
  {
     key: '28'
    ,value:'A114 - MAR DEL PLATA'
    ,text:'A114 - MAR DEL PLATA'
  },
  {
     key: '29'
    ,value:'A115 - BAHIA BLANCA'
    ,text:'A115 - BAHIA BLANCA'
  },
  {
     key: '30'
    ,value:'A116 - GRAL LEVALLE'
    ,text:'A116 - GRAL LEVALLE'
  },
  {
     key: '31'
    ,value:'A117 - BOLIVAR'
    ,text:'A117 - BOLIVAR'
  },
  {
     key: '32'
    ,value:'A118 - SAN JUSTO'
    ,text:'A118 - SAN JUSTO'
  },
  {
     key: '33'
    ,value:'A119 - BANDERA'
    ,text:'A119 - BANDERA'
  },
  {
     key: '34'
    ,value:'A120 - PCIA DE LA PLAZA'
    ,text:'A120 - PCIA DE LA PLAZA'
  },
  {
     key: '35'
    ,value:'A121 - CURUZU CUATIA'
    ,text:'A121 - CURUZU CUATIA'
  },
  {
     key: '36'
    ,value:'A122 - LAS BRENAS'
    ,text:'A122 - LAS BRENAS'
  },
  {
     key: '37'
    ,value:'A123 - ALGODON'
    ,text:'A123 - ALGODON'
  },
  {
     key: '38'
    ,value:'A124 - BIODIESEL'
    ,text:'A124 - BIODIESEL'
  },
  {
     key: '39'
    ,value:'A125 - VILLAGUAY'
    ,text:'A125 - VILLAGUAY'
  },
  {
     key: '40'
    ,value:'A126 - BASAVILBASO'
    ,text:'A126 - BASAVILBASO'
  },
  {
     key: '41'
    ,value:'A127 - QUIMIU'
    ,text:'A127 - QUIMIU'
  },
  {
     key: '42'
    ,value:'A128 - MANEREY'
    ,text:'A128 - MANEREY'
  },
  {
     key: '43'
    ,value:'A129 - CORLASA'
    ,text:'A129 - CORLASA'
  },
  {
     key: '44'
    ,value:'A130 - LA SIBILA'
    ,text:'A130 - LA SIBILA'
  },
  {
     key: '45'
    ,value:'A131 - EERTIUZANTES'
    ,text:'A131 - EERTIUZANTES'
  },
  {
     key: '46'
    ,value:'A132 - EERTIUZANTES'
    ,text:'A132 - EERTIUZANTES'
  },
  {
     key: '47'
    ,value:'A133 - EERTIUZANTES'
    ,text:'A133 - EERTIUZANTES'
  },
  {
     key: '48'
    ,value:'A134 - EERTIUZANTES'
    ,text:'A134 - EERTIUZANTES'
  },
  {
     key: '49'
    ,value:'A135 - EERTIUZANTES'
    ,text:'A135 - EERTIUZANTES'
  },
  {
     key: '50'
    ,value:'A141 - Baradero'
    ,text:'A141 - Baradero'
  },
  {
     key: '51'
    ,value:'A142 - Desmotadora Quimili'
    ,text:'A142 - Desmotadora Quimili'
  },
  {
     key: '52'
    ,value:'A143 - Irineo Portela'
    ,text:'A143 - Irineo Portela'
  },
  {
     key: '53'
    ,value:'A144 - Peyrano'
    ,text:'A144 - Peyrano'
  },
  {
     key: '54'
    ,value:'A14S - Saladillo'
    ,text:'A14S - Saladillo'
  },
  {
     key: '55'
    ,value:'A201 - ARGENER'
    ,text:'A201 - ARGENER'
  },
  {
     key: '56'
    ,value:'A301 - INVIMMO'
    ,text:'A301 - INVIMMO'
  },
  {
     key: '57'
    ,value:'P101 - ASUNCION'
    ,text:'P101 - ASUNCION'
  },
  {
     key: '58'
    ,value:'P107 - CURUGUATY'
    ,text:'P107 - CURUGUATY'
  },
  {
     key: '59'
    ,value:'P108 - TUNA'
    ,text:'P108 - TUNA'
  },
  {
     key: '60'
    ,value:'P109 - Pozuelo'
    ,text:'P109 - Pozuelo'
  },
  {
     key: '61'
    ,value:'P201 - Logico Paraguay'
    ,text:'P201 - Logico Paraguay'
  },
  {
     key: '62'
    ,value:'P301 - MERCO'
    ,text:'P301 - MERCO'
  },
  {
     key: '63'
    ,value:'U102 - TRES BOCAS'
    ,text:'U102 - TRES BOCAS'
  },
  {
     key: '64'
    ,value:'U103 - PAYSANDÚ'
    ,text:'U103 - PAYSANDÚ'
  },
  {
     key: '65'
    ,value:'U201 - Urugrain SA'
    ,text:'U201 - Urugrain SA'
  },
  {
     key: '66'
    ,value:'U301 - LDC Trading & Service Co'
    ,text:'U301 - LDC Trading & Service Co'
  }]

  componentDidMount() {}

  render() {
    const { requiereStock } = this.state
    return (<Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Proveedor/ Marca Sugeridos</Header>
          <Input fluid={true} control="input" placeholder=""/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">Presentación</Header>
          <Input fluid={true} control="input" placeholder=""/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Planta</Header>
          <Dropdown placeholder='Seleccione Planta Requiriente' fluid={true} search={true} selection={true} options={this.opcionesPlanta}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">Sector</Header>
          <Dropdown options={this.opcionesSector} placeholder='Seleccione Sector' fluid={true} search={true} selection={true}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Criticidad</Header>
          <Dropdown placeholder='Seleccione' fluid={true} search={false} selection={true} options={this.opcionesGradoDeCriticidad}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h4">¿Se Repara?</Header>
          <Dropdown options={this.opcionesSiNo} placeholder='Seleccione' fluid={true} search={false} selection={true}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">Valor Unitario (U$D)</Header>
          <Input label='USD$' fluid={true} placeholder='Monto'/>
        </Grid.Column>

        <Grid.Column width={8}>
          <Header as="h4">TAG de equipo que lo utiliza</Header>
          <Input fluid={true} control="input" placeholder="Ej: 3 unidades"/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h4">¿Requiere Stock?</Header>
          <Dropdown placeholder='Seleccione Planta Requiriente' onChange={this.handleChange} value={requiereStock} fluid={true} search={false} selection={true} options={this.opcionesSiNo}/>
        </Grid.Column>





        {requiereStock === 'Si' && (
          <Grid.Column width={8}>
            <Header as="h4">Consumo Anual Esperable</Header>
            <Input fluid={true} control="input" placeholder="Ej: 300 unidades"/>
          </Grid.Column> )}
      </Grid.Row>
    </Grid>);
  }
}

export default Camposcomunes;
