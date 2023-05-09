import myHeader from "../components/myHeader.js";
import { navbar } from "../components/navbar.js";
import {openModal, closeModal} from "../components/modal.js";
import { empleados } from "../components/empleado.js";
myHeader.show();
openModal(); closeModal();
navbar();
empleados();
