// Crear un nuevo documento PDF
export const crearDocumento = (nombre, info) => {
    
  const doc = new jsPDF();

  // Definir las propiedades del documento
  const propiedades = {
    title: info.titulo,
    author:info.autor,
  };

  // Establecer las propiedades del documento
  doc.setProperties(propiedades);

  // Agregar texto al PDF mostrando las propiedades
  doc.text(`Título: ${info.titulo}`, 10, 20);
  doc.text(`Autor: ${info.autor}`, 10, 30);
    doc.text(`Tema: ${info.tema}`, 10, 40);
    doc.text('datos usuario', 10, 50);
    doc.text(`nombre : ${info.nombre}`)
    doc.text(`Apellidos : ${info.apellido1}  ${info.apellido2}`,10,70);
    doc.text(`telefono : ${info.telefono}`,10,80);
    doc.text(`correo : ${info.correo}`,10,90);


  // Guardar el PDF
  doc.save(nombre+ ".pdf");
}
export const mostrarDocumentos = (lista) => { 
    document.getElementById("documentosExistentes");
    
    
}