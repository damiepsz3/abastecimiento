import React, {Component} from "react";
import {
  Header,
  Grid,
  Input,
  Dropdown

} from "semantic-ui-react";
import "../../App.css";





class CamposDinamicos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantillaSeleccionada: {
       "Característica 1": "TIPO",
        "Característica 2": "PRESENTACIÓN",
        "Característica 3": "",
        "Característica 4": "",
        "Característica 5": "",
        "Característica 6": "",
        "Comentarios": "",
        "Creador": "Lucas Costansi",
        "Item Type": "Item",
        "Modified By": "Hernan Franch",
        "Nombre Plantilla": "PASTA",
        "Nombre Plantilla (breve)": "PASTA",
        "Número Base Material": "0",
        "Path": "sites/Abastecimientos/almacenes/ABM_Materiales/Lists/Plantillas",
        "Taxonomia BOLD": "C31200000",
        "Taxonomia BOLD:Descripción": "Adhesivos y selladores",
        "Tipo de Material": "ZRES",
        "Vigente": "VERDADERO"
      }
    };
  }


  opcionesUnidadesDeMedida = [
    {
      key : '1',
      value: 'Pulgada cúbica [2 Pulgada cuadrada 3]',
      text: 'Pulgada cúbica [2 Pulgada cuadrada 3]',
    },
    {
      key : '2',
      value: 'Porcentaje [%]',
      text: 'Porcentaje [%]',
    },
    {
      key : '3',
      value: 'Tanto por mil [%O]',
      text: 'Tanto por mil [%O]',
    },
    {
      key : '4',
      value: 'Metro/Minuto [0]',
      text: 'Metro/Minuto [0]',
    },
    {
      key : '5',
      value: ' [1]',
      text: ' [1]',
    },
    {
      key : '6',
      value: 'Siemens por metro [A/U]',
      text: 'Siemens por metro [A/U]',
    },
    {
      key : '7',
      value: 'Resistencia eléctrica espec. [AA]',
      text: 'Resistencia eléctrica espec. [AA]',
    },
    {
      key : '8',
      value: 'Acre [ACR]',
      text: 'Acre [ACR]',
    },
    {
      key : '9',
      value: 'Alqueire [AL]',
      text: 'Alqueire [AL]',
    },
    {
      key : '10',
      value: 'Bidón [BID]',
      text: 'Bidón [BID]',
    },
    {
      key : '11',
      value: 'Block [BLK]',
      text: 'Block [BLK]',
    },
    {
      key : '12',
      value: 'Bolsa [BOL]',
      text: 'Bolsa [BOL]',
    },
    {
      key : '13',
      value: 'Bulto [BTO]',
      text: 'Bulto [BTO]',
    },
    {
      key : '14',
      value: 'Cada uno [C/U]',
      text: 'Cada uno [C/U]',
    },
    {
      key : '15',
      value: 'Centímetro cúbico/Segundo [C3S]',
      text: 'Centímetro cúbico/Segundo [C3S]',
    },
    {
      key : '16',
      value: 'Caja [CA]',
      text: 'Caja [CA]',
    },
    {
      key : '17',
      value: 'Cartón [CAR]',
      text: 'Cartón [CAR]',
    },
    {
      key : '18',
      value: 'Participación en grupo en % [CEB]',
      text: 'Participación en grupo en % [CEB]',
    },
    {
      key : '19',
      value: 'Caja [CJ]',
      text: 'Caja [CJ]',
    },
    {
      key : '20',
      value: 'Centilitro [CL]',
      text: 'Centilitro [CL]',
    },
    {
      key : '21',
      value: 'Centímetros [CM]',
      text: 'Centímetros [CM]',
    },
    {
      key : '22',
      value: 'Centímetro cuadrado [CM2]',
      text: 'Centímetro cuadrado [CM2]',
    },
    {
      key : '23',
      value: 'Centímetro cúbico [CM3]',
      text: 'Centímetro cúbico [CM3]',
    },
    {
      key : '24',
      value: 'Centímetro/Segundo [CMS]',
      text: 'Centímetro/Segundo [CMS]',
    },
    {
      key : '25',
      value: 'Milifaradio [CO]',
      text: 'Milifaradio [CO]',
    },
    {
      key : '26',
      value: 'Cuarto galón, EE.UU., líquido [CTO]',
      text: 'Cuarto galón, EE.UU., líquido [CTO]',
    },
    {
      key : '27',
      value: 'Días [D]',
      text: 'Días [D]',
    },
    {
      key : '28',
      value: 'Grado [DEG]',
      text: 'Grado [DEG]',
    },
    {
      key : '29',
      value: 'Dias [DIA]',
      text: 'Dias [DIA]',
    },
    {
      key : '30',
      value: 'Decímetro [DM]',
      text: 'Decímetro [DM]',
    },
    {
      key : '31',
      value: 'Decímetro cúbico [DM3]',
      text: 'Decímetro cúbico [DM3]',
    },
    {
      key : '32',
      value: 'Docena [DOC]',
      text: 'Docena [DOC]',
    },
    {
      key : '33',
      value: 'Unidades enzimas/Milímetro [EML]',
      text: 'Unidades enzimas/Milímetro [EML]',
    },
    {
      key : '34',
      value: 'Estuches [EST]',
      text: 'Estuches [EST]',
    },
    {
      key : '35',
      value: 'Frasco [FCO]',
      text: 'Frasco [FCO]',
    },
    {
      key : '36',
      value: 'Gramo [G]',
      text: 'Gramo [G]',
    },
    {
      key : '37',
      value: 'Gramo aditivo/Litro [G/L]',
      text: 'Gramo aditivo/Litro [G/L]',
    },
    {
      key : '38',
      value: 'Gramo oro [GAU]',
      text: 'Gramo oro [GAU]',
    },
    {
      key : '39',
      value: 'Gigajulio [GJ]',
      text: 'Gigajulio [GJ]',
    },
    {
      key : '40',
      value: 'Gramo/Litro [GLI]',
      text: 'Gramo/Litro [GLI]',
    },
    {
      key : '41',
      value: 'Galón (EE.UU.) [GLN]',
      text: 'Galón (EE.UU.) [GLN]',
    },
    {
      key : '42',
      value: 'Gramo/Mol [GM]',
      text: 'Gramo/Mol [GM]',
    },
    {
      key : '43',
      value: 'Gramo/Metro cuadrado [GM2]',
      text: 'Gramo/Metro cuadrado [GM2]',
    },
    {
      key : '44',
      value: 'Gramo/Metro cúbico [GM3]',
      text: 'Gramo/Metro cúbico [GM3]',
    },
    {
      key : '45',
      value: 'Gigaohmio [GOH]',
      text: 'Gigaohmio [GOH]',
    },
    {
      key : '46',
      value: 'Gramo principio activo [GPA]',
      text: 'Gramo principio activo [GPA]',
    },
    {
      key : '47',
      value: 'Galones por hora (EE.UU) [GPH]',
      text: 'Galones por hora (EE.UU) [GPH]',
    },
    {
      key : '48',
      value: 'Galones por milla (EE.UU) [GPM]',
      text: 'Galones por milla (EE.UU) [GPM]',
    },
    {
      key : '49',
      value: 'Grande [GRD]',
      text: 'Grande [GRD]',
    },
    {
      key : '50',
      value: 'Hora [H]',
      text: 'Hora [H]',
    },
    {
      key : '51',
      value: 'Hectárea [HA]',
      text: 'Hectárea [HA]',
    },
    {
      key : '52',
      value: 'Hojas [HJA]',
      text: 'Hojas [HJA]',
    },
    {
      key : '53',
      value: 'Hectolitro [HL]',
      text: 'Hectolitro [HL]',
    },
    {
      key : '54',
      value: 'Caballos de Fuerza [HP]',
      text: 'Caballos de Fuerza [HP]',
    },
    {
      key : '55',
      value: 'Horas [HRA]',
      text: 'Horas [HRA]',
    },
    {
      key : '56',
      value: ' [JG]',
      text: ' [JG]',
    },
    {
      key : '57',
      value: 'Años (annum) [JHR]',
      text: 'Años (annum) [JHR]',
    },
    {
      key : '58',
      value: 'Julio/Kilogramo [JKG]',
      text: 'Julio/Kilogramo [JKG]',
    },
    {
      key : '59',
      value: 'Capac.térmica espec. [JKK]',
      text: 'Capac.térmica espec. [JKK]',
    },
    {
      key : '60',
      value: 'Julio/Mol [JMO]',
      text: 'Julio/Mol [JMO]',
    },
    {
      key : '61',
      value: 'Kilogramo/Decímetro cúbico [KD3]',
      text: 'Kilogramo/Decímetro cúbico [KD3]',
    },
    {
      key : '62',
      value: 'Kilogramo [KG]',
      text: 'Kilogramo [KG]',
    },
    {
      key : '63',
      value: 'Kilogramo/Mol [KGM]',
      text: 'Kilogramo/Mol [KGM]',
    },
    {
      key : '64',
      value: 'Kilogramo principio activo [KGP]',
      text: 'Kilogramo principio activo [KGP]',
    },
    {
      key : '65',
      value: 'Kilogramo/Segundo [KGS]',
      text: 'Kilogramo/Segundo [KGS]',
    },
    {
      key : '66',
      value: 'Kilogramo/Metro cúbico [KGV]',
      text: 'Kilogramo/Metro cúbico [KGV]',
    },
    {
      key : '67',
      value: 'Kit [KIT]',
      text: 'Kit [KIT]',
    },
    {
      key : '68',
      value: 'Kilojulio/Kilogramo [KJK]',
      text: 'Kilojulio/Kilogramo [KJK]',
    },
    {
      key : '69',
      value: 'Kilojulio/Mol [KJM]',
      text: 'Kilojulio/Mol [KJM]',
    },
    {
      key : '70',
      value: 'Kilómetro [KM]',
      text: 'Kilómetro [KM]',
    },
    {
      key : '71',
      value: 'Kilómetro cuadrado [KM2]',
      text: 'Kilómetro cuadrado [KM2]',
    },
    {
      key : '72',
      value: 'Kilómetro/Hora [KMH]',
      text: 'Kilómetro/Hora [KMH]',
    },
    {
      key : '73',
      value: 'Kilomol [KML]',
      text: 'Kilomol [KML]',
    },
    {
      key : '74',
      value: 'Kelvin/Minuto [KMN]',
      text: 'Kelvin/Minuto [KMN]',
    },
    {
      key : '75',
      value: 'Kelvin/Segundo [KMS]',
      text: 'Kelvin/Segundo [KMS]',
    },
    {
      key : '76',
      value: 'Kilonewton [KN]',
      text: 'Kilonewton [KN]',
    },
    {
      key : '77',
      value: 'Kilopascal [KPA]',
      text: 'Kilopascal [KPA]',
    },
    {
      key : '78',
      value: 'Kilotoneladas [KT]',
      text: 'Kilotoneladas [KT]',
    },
    {
      key : '79',
      value: 'Kilovoltioamperio [KVA]',
      text: 'Kilovoltioamperio [KVA]',
    },
    {
      key : '80',
      value: 'Kilovatio [KW]',
      text: 'Kilovatio [KW]',
    },
    {
      key : '81',
      value: 'Kilovatio-hora [KWH]',
      text: 'Kilovatio-hora [KWH]',
    },
    {
      key : '82',
      value: 'Kg principio activo/kg [KWK]',
      text: 'Kg principio activo/kg [KWK]',
    },
    {
      key : '83',
      value: 'Litro [L]',
      text: 'Litro [L]',
    },
    {
      key : '84',
      value: 'Libra (pound) [LB]',
      text: 'Libra (pound) [LB]',
    },
    {
      key : '85',
      value: 'Botella [LC]',
      text: 'Botella [LC]',
    },
    {
      key : '86',
      value: 'Litro por 100 km [LCK]',
      text: 'Litro por 100 km [LCK]',
    },
    {
      key : '87',
      value: 'Litro/Minuto [LMI]',
      text: 'Litro/Minuto [LMI]',
    },
    {
      key : '88',
      value: 'Litro/Molécula-segundo [LMS]',
      text: 'Litro/Molécula-segundo [LMS]',
    },
    {
      key : '89',
      value: 'Litro por hora [LPH]',
      text: 'Litro por hora [LPH]',
    },
    {
      key : '90',
      value: 'Metro [M]',
      text: 'Metro [M]',
    },
    {
      key : '91',
      value: '1 / Metro cuadrado [M-2]',
      text: '1 / Metro cuadrado [M-2]',
    },
    {
      key : '92',
      value: 'Mol por litro [M/L]',
      text: 'Mol por litro [M/L]',
    },
    {
      key : '93',
      value: 'Mol por metro cúbico [M/M]',
      text: 'Mol por metro cúbico [M/M]',
    },
    {
      key : '94',
      value: 'Metro/Segundo [M/S]',
      text: 'Metro/Segundo [M/S]',
    },
    {
      key : '95',
      value: 'Metro cuadrado [M2]',
      text: 'Metro cuadrado [M2]',
    },
    {
      key : '96',
      value: 'Metro cuadrado/Segundo [M2S]',
      text: 'Metro cuadrado/Segundo [M2S]',
    },
    {
      key : '97',
      value: 'Metro cúbico [M3]',
      text: 'Metro cúbico [M3]',
    },
    {
      key : '98',
      value: 'Metro cúbico/Hora [M3H]',
      text: 'Metro cúbico/Hora [M3H]',
    },
    {
      key : '99',
      value: 'Metro cúbico/Segundo [M3S]',
      text: 'Metro cúbico/Segundo [M3S]',
    },
    {
      key : '100',
      value: 'Megajulio [MEJ]',
      text: 'Megajulio [MEJ]',
    },
    {
      key : '101',
      value: 'Miligramo [MG]',
      text: 'Miligramo [MG]',
    },
    {
      key : '102',
      value: 'Miligramo/Litro [MGL]',
      text: 'Miligramo/Litro [MGL]',
    },
    {
      key : '103',
      value: 'Megaohmio [MGO]',
      text: 'Megaohmio [MGO]',
    },
    {
      key : '104',
      value: 'Miligramo/Metro cúbico [MGV]',
      text: 'Miligramo/Metro cúbico [MGV]',
    },
    {
      key : '105',
      value: 'Metro/Hora [MH]',
      text: 'Metro/Hora [MH]',
    },
    {
      key : '106',
      value: 'Milla [MI]',
      text: 'Milla [MI]',
    },
    {
      key : '107',
      value: 'Milla cuadrada [MI2]',
      text: 'Milla cuadrada [MI2]',
    },
    {
      key : '108',
      value: 'Minuto [MIN]',
      text: 'Minuto [MIN]',
    },
    {
      key : '109',
      value: 'Microsegundo [MIS]',
      text: 'Microsegundo [MIS]',
    },
    {
      key : '110',
      value: 'Mililitro [ML]',
      text: 'Mililitro [ML]',
    },
    {
      key : '111',
      value: 'Millimol por litro [MLF]',
      text: 'Millimol por litro [MLF]',
    },
    {
      key : '112',
      value: 'Millas por galón (EEUU) [MLG]',
      text: 'Millas por galón (EEUU) [MLG]',
    },
    {
      key : '113',
      value: 'Milílitro principio activo [MLW]',
      text: 'Milílitro principio activo [MLW]',
    },
    {
      key : '114',
      value: 'Milímetro [MM]',
      text: 'Milímetro [MM]',
    },
    {
      key : '115',
      value: 'Milímetro cuadrado [MM2]',
      text: 'Milímetro cuadrado [MM2]',
    },
    {
      key : '116',
      value: 'Milímetro cúbico [MM3]',
      text: 'Milímetro cúbico [MM3]',
    },
    {
      key : '117',
      value: 'Meganewton [MN]',
      text: 'Meganewton [MN]',
    },
    {
      key : '118',
      value: 'Milinewton/Metro [MNM]',
      text: 'Milinewton/Metro [MNM]',
    },
    {
      key : '119',
      value: 'Meses [MON]',
      text: 'Meses [MON]',
    },
    {
      key : '120',
      value: 'Milipascal por segundo [MPS]',
      text: 'Milipascal por segundo [MPS]',
    },
    {
      key : '121',
      value: 'Millisecond [MS]',
      text: 'Millisecond [MS]',
    },
    {
      key : '122',
      value: 'Metro/Segundo al cuadrado [MS2]',
      text: 'Metro/Segundo al cuadrado [MS2]',
    },
    {
      key : '123',
      value: 'Microsiemens por centímetro [MSC]',
      text: 'Microsiemens por centímetro [MSC]',
    },
    {
      key : '124',
      value: 'Megavoltioamperio [MVA]',
      text: 'Megavoltioamperio [MVA]',
    },
    {
      key : '125',
      value: 'Megavatio/Hora [MWH]',
      text: 'Megavatio/Hora [MWH]',
    },
    {
      key : '126',
      value: 'Newton/Metro [N/M]',
      text: 'Newton/Metro [N/M]',
    },
    {
      key : '127',
      value: 'Nanometro [NAM]',
      text: 'Nanometro [NAM]',
    },
    {
      key : '128',
      value: 'Nanofaradio [NF]',
      text: 'Nanofaradio [NF]',
    },
    {
      key : '129',
      value: 'Newton/Milímetro cuadrado [NMM]',
      text: 'Newton/Milímetro cuadrado [NMM]',
    },
    {
      key : '130',
      value: 'Megavoltio [NMP]',
      text: 'Megavoltio [NMP]',
    },
    {
      key : '131',
      value: 'Nanoamperio [NR]',
      text: 'Nanoamperio [NR]',
    },
    {
      key : '132',
      value: 'Nanosegundo [NS]',
      text: 'Nanosegundo [NS]',
    },
    {
      key : '133',
      value: 'Resistencia eléctrica espec. [OCM]',
      text: 'Resistencia eléctrica espec. [OCM]',
    },
    {
      key : '134',
      value: 'Onza [OZ]',
      text: 'Onza [OZ]',
    },
    {
      key : '135',
      value: 'Onza líquida EE.UU. [OZL]',
      text: 'Onza líquida EE.UU. [OZL]',
    },
    {
      key : '136',
      value: 'Puntos [P]',
      text: 'Puntos [P]',
    },
    {
      key : '137',
      value: 'Par [PAA]',
      text: 'Par [PAA]',
    },
    {
      key : '138',
      value: 'Paleta [PAL]',
      text: 'Paleta [PAL]',
    },
    {
      key : '139',
      value: 'Paquete [PAQ]',
      text: 'Paquete [PAQ]',
    },
    {
      key : '140',
      value: 'Pares [PAR]',
      text: 'Pares [PAR]',
    },
    {
      key : '141',
      value: 'Pascal-segundo [PAS]',
      text: 'Pascal-segundo [PAS]',
    },
    {
      key : '142',
      value: 'Picofaradio [PF]',
      text: 'Picofaradio [PF]',
    },
    {
      key : '143',
      value: 'Pliegos [PGO]',
      text: 'Pliegos [PGO]',
    },
    {
      key : '144',
      value: 'Plancha [PHA]',
      text: 'Plancha [PHA]',
    },
    {
      key : '145',
      value: 'Pie cuadrado [PI2]',
      text: 'Pie cuadrado [PI2]',
    },
    {
      key : '146',
      value: 'Pie cúbico [PI3]',
      text: 'Pie cúbico [PI3]',
    },
    {
      key : '147',
      value: '1/minuto [PMI]',
      text: '1/minuto [PMI]',
    },
    {
      key : '148',
      value: 'Partes por billón [PPB]',
      text: 'Partes por billón [PPB]',
    },
    {
      key : '149',
      value: 'Parts per million [PPM]',
      text: 'Parts per million [PPM]',
    },
    {
      key : '150',
      value: 'Partes por trillón [PPT]',
      text: 'Partes por trillón [PPT]',
    },
    {
      key : '151',
      value: 'Número de personas [PRS]',
      text: 'Número de personas [PRS]',
    },
    {
      key : '152',
      value: 'Picosegundo [PS]',
      text: 'Picosegundo [PS]',
    },
    {
      key : '153',
      value: 'Pinta EE.UU., líquido [PT]',
      text: 'Pinta EE.UU., líquido [PT]',
    },
    {
      key : '154',
      value: 'Pulgada [PUL]',
      text: 'Pulgada [PUL]',
    },
    {
      key : '155',
      value: 'Pieza [PZA]',
      text: 'Pieza [PZA]',
    },
    {
      key : '156',
      value: 'Gramos/Centímetro cúbico [RHO]',
      text: 'Gramos/Centímetro cúbico [RHO]',
    },
    {
      key : '157',
      value: 'Resma [RMA]',
      text: 'Resma [RMA]',
    },
    {
      key : '158',
      value: 'Rollos [ROL]',
      text: 'Rollos [ROL]',
    },
    {
      key : '159',
      value: 'Revoluciones por minuto [RPM]',
      text: 'Revoluciones por minuto [RPM]',
    },
    {
      key : '160',
      value: 'Unidades enzimas [RS]',
      text: 'Unidades enzimas [RS]',
    },
    {
      key : '161',
      value: 'items [ST]',
      text: 'items [ST]',
    },
    {
      key : '162',
      value: 'Tonelada [T]',
      text: 'Tonelada [T]',
    },
    {
      key : '163',
      value: 'Talonarios [TAL]',
      text: 'Talonarios [TAL]',
    },
    {
      key : '164',
      value: 'Pie [TF]',
      text: 'Pie [TF]',
    },
    {
      key : '165',
      value: 'Tonelada [TO]',
      text: 'Tonelada [TO]',
    },
    {
      key : '166',
      value: 'Tonelada/Metro cúbico [TOM]',
      text: 'Tonelada/Metro cúbico [TOM]',
    },
    {
      key : '167',
      value: 'Tonelada EE.UU. [TON]',
      text: 'Tonelada EE.UU. [TON]',
    },
    {
      key : '168',
      value: 'Tambor [TR]',
      text: 'Tambor [TR]',
    },
    {
      key : '169',
      value: 'Miles [TS]',
      text: 'Miles [TS]',
    },
    {
      key : '170',
      value: 'Tubos [TUB]',
      text: 'Tubos [TUB]',
    },
    {
      key : '171',
      value: 'Unidad [UN]',
      text: 'Unidad [UN]',
    },
    {
      key : '172',
      value: 'Unidad de potencia [UP]',
      text: 'Unidad de potencia [UP]',
    },
    {
      key : '173',
      value: 'Voltioamperio [VA]',
      text: 'Voltioamperio [VA]',
    },
    {
      key : '174',
      value: 'Artículo de valor [VAL]',
      text: 'Artículo de valor [VAL]',
    },
    {
      key : '175',
      value: 'Semanas [WCH]',
      text: 'Semanas [WCH]',
    },
    {
      key : '176',
      value: 'Conductibilidad del calor [WMK]',
      text: 'Conductibilidad del calor [WMK]',
    },
    {
      key : '177',
      value: 'Velocidad de evaporación [WTL]',
      text: 'Velocidad de evaporación [WTL]',
    },
    {
      key : '178',
      value: 'Yarda [YD]',
      text: 'Yarda [YD]',
    },
    {
      key : '179',
      value: 'Yarda cuadrada [YD2]',
      text: 'Yarda cuadrada [YD2]',
    },
    {
      key : '180',
      value: 'Yarda cúbica [YD3]',
      text: 'Yarda cúbica [YD3]',
    },
    {
      key : '181',
      value: 'Microamperio [µA]',
      text: 'Microamperio [µA]',
    },
    {
      key : '182',
      value: 'Microfaradio [µF]',
      text: 'Microfaradio [µF]',
    },
    {
      key : '183',
      value: 'Microgramo/Litro [µGL]',
      text: 'Microgramo/Litro [µGL]',
    },
    {
      key : '184',
      value: 'Microgramo/Metro cúbico [µGV]',
      text: 'Microgramo/Metro cúbico [µGV]',
    },
    {
      key : '185',
      value: 'Microlitro [µL]',
      text: 'Microlitro [µL]',
    },
    {
      key : '186',
      value: 'Micrometro [µM]',
      text: 'Micrometro [µM]',
    }]


  render() {


    return (
        <Grid>


          {this.state.plantillaSeleccionada["Característica 1"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 1"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 2"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 2"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 3"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 3"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 4"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 4"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 5"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 5"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Característica 6"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">{this.state.plantillaSeleccionada["Característica 6"] }</Header>
              <Input fluid control="input" placeholder=""/>
            </Grid.Column>
          </Grid.Row>)}

          {this.state.plantillaSeleccionada["Nombre Plantilla"] !== "" && (<Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4">Unidad de Medida Sugerida</Header>
              <Dropdown placeholder='Seleccione' fluid={true} search={true} selection={true} options={this.opcionesUnidadesDeMedida}/>
            </Grid.Column>
          </Grid.Row>)}

        </Grid>
        );
  }
}

export default CamposDinamicos;
