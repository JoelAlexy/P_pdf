
const URL = "http://localhost:3000/";

export async function getData(tabla){ 
  try {
    const respose = await axios.get(URL + tabla)
    return respose.data
  } catch (error) { 
console.log("error al consultar "+tabla);
  }
}
export async function getDataByID(tabla, id) {
  try {
    const response = await axios.get(URL + tabla, { params: { id } });
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null;
  }
}

export async function createData(tabla, data) {
  try {
    const response = await axios.post(URL + tabla, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear datos:", error);
    return null;
  }
}

export async function updateData(tabla, id, newData) {
  try {
    const response = await axios.put(URL + tabla + `/${id}`, newData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar datos:", error);
    return null;
  }
}

export async function deleteData(tabla, id) {
  try {
    const response = await axios.delete(URL + tabla + `/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar datos:", error);
    return null;
  }
}
