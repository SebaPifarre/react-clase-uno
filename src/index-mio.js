import { CheckboxListWithState } from "./tarea/Tarea4.js";

// ReactDOM.render(
//   <Tarjeta
//     nombre="Sebastian Pifarre"
//     titulo="Programador FullStack"
//     imagen="https://avatars.githubusercontent.com/u/114502133?"
//   />,
//   document.getElementById('react-app')
// );

// ReactDOM.render(
//   <BlogPost
//     titulo="Ardillas"
//     parrafos={`Hoy vi una ardilla.
// La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
// Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
//     autor={{
//       nombre: "Sebastian Pifarre",
//       titulo: "Programador FullStack",
//       imagen: "https://avatars.githubusercontent.com/u/114502133?v=4",
//     }}
//   />,
//   document.getElementById('react-app')
// );

// ReactDOM.render(
//   <MatchNombre nombre="seba" />,
//   document.getElementById("react-app")
// );

// ReactDOM.render(
//   <ValidationInput
//     validation={(value) => value.length >= 8}
//     isPassword={false}
//   />,
//   document.getElementById("react-app")
// );

// ReactDOM.render(<UncontrolledCheckbox name="prueba" initialValue={false} />, document.getElementById("react-app"));

// ReactDOM.render(
//   <CheckboxList items={{ uno: false, dos: true, tres: false }} />,
//   document.getElementById("react-app")
// );

ReactDOM.render(
    <CheckboxListWithState items={{ uno: false, dos: true, tres: false }} />,
    document.getElementById("react-app")
  );
  