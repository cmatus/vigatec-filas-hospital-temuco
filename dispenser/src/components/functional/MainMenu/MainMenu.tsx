import { Fragment, useEffect } from "react";

import Menu from "@/components/ui/Menu";

import { useUI } from "@/store/hooks";

import styles from "./MainMenu.module.scss";

const menuOptions = [
  {
    name: "",
    text: "UNIDAD DE TOMA DE MUESTRAS LABORATORIO CLÍNICO",
    icon: "laboratorio.png",
    path: "/activities",
  },
  {
    name: "",
    text: "CENTRO DE DIAGNOSTICO Y TRATAMIENTO",
    icon: "tratamiento_diagnostico.png",
    path: "",
  },
];

const MainMenu = () => {
  const { setFooterButtons } = useUI();

  useEffect(() => {
    setFooterButtons(["logo"]);
  }, []);

  return (
    <Fragment>
      <h1>Bienvenido</h1>
      <h2>Por favor seleccione la unidad de atención</h2>
      <Menu options={menuOptions} />
    </Fragment>
  );
};

export default MainMenu;
