const patronDeModulo = (() => {
  return {
    show: async () => {
      try {
        const url = "https://randomuser.me/api/?results=10";
        const response = await fetch(url);
        console.log("Response: ", response);
        if (response.status !== 404) {
          const datos = await response.json();
          return datos;
        } else {
          throw new Error("404!!!");
        }
      } catch (err) {
        alert(err);
      }
    },

    imprimir: (datos) => {
      console.log(datos);
      let resultado = document.querySelector("#user-data");
      for (let x of datos.results) {
        resultado.innerHTML += `
      <div class="card">
        <img src="${x.picture.large}" alt="">
        <p>${x.name.title} ${x.name.first} ${x.name.last}</p>
        <p>${x.email}</p>
        <p>${x.phone}</p>
      </div>
      `;
      }
    },
  }; //return
})();

// resolviendo la promesa
patronDeModulo.show().then((user) => patronDeModulo.imprimir(user));
