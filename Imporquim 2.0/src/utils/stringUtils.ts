export function splitByKey(text: string, key: string): [string, string] {
  const index = text.indexOf(key);

  if (index !== -1) {
    const before = text.substring(0, index).trim();
    const after = text.substring(index + key.length).trim();
    return [before, after];
  } else {
    // Si la palabra clave no se encuentra en el texto, devolveremos null
    return [text, ""];
  }
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatoFecha(fecha: Date) {
  fecha = new Date(fecha);
  const salida: string = fecha.toLocaleTimeString("es-ES", {
    year: "numeric",
    day: "2-digit",
    weekday: "long",
    month: "long",
    hour12: true,
  });
  return fecha;
}

export function obtenerDetallesFecha(fecha: Date | null): {
  nombreDia: string;
  nombreMes: string;
  numeroDia: number;
} {
  // Array de nombres de días de la semana
  const nombresDias: string[] = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Array de nombres de meses
  const nombresMeses: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let nombreDia: string = "ND";
  let nombreMes: string = "ND";
  let numeroDia: number = 0;
  if (fecha != null) {
    // Obtener el nombre del día
    nombreDia = nombresDias[fecha.getDay()];

    // Obtener el nombre del mes
    nombreMes = nombresMeses[fecha.getMonth()];

    // Obtener el número del día
    numeroDia = fecha.getDate();
  }

  return { nombreDia, nombreMes, numeroDia };
}

export function capitalizarPrimeraLetra(texto: string): string {
  if (texto.length === 0) {
    return texto;
  } else {
    return texto[0].toUpperCase() + texto.slice(1);
  }
}

export function parseFecha(fechaString: string) {
  const partes = fechaString.split(" ");

  if (partes.length !== 8) {
    throw new Error("Formato de fecha no válido");
  }

  const nombreDia = partes[0];
  const numeroDia = parseInt(partes[1], 10);
  const mesTexto = partes[3];
  const año = parseInt(partes[5], 10);
  const hora = partes[7];

  const meses: { [key: string]: number } = {
    Enero: 1,
    Febrero: 2,
    Marzo: 3,
    Abril: 4,
    Mayo: 5,
    Junio: 6,
    Julio: 7,
    Agosto: 8,
    Septiembre: 9,
    Octubre: 10,
    Noviembre: 11,
    Diciembre: 12,
  };

  const numeroMes = meses[mesTexto];

  return {
    nombreDia: nombreDia,
    nombreMes: mesTexto,
    numeroDia: numeroDia,
    numeroMes: numeroMes,
    año: año,
    hora: hora,
  };
}
