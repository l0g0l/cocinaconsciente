//método para recuperar datos del servidor. En el caso de que accedamos a recursos protegidos, la solicitud HTTP necesita un encabezado de autorización.Verifica el almacenamiento local para el "user".Si ha iniciado sesión "user" con accessToken(JWT), devuelva el encabezado de autorización HTTP. De lo contrario, devuelve un objeto vacío.

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user')); 
  
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken};
    } else {
      return {};
    }
  }