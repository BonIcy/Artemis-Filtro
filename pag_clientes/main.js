import myHeader from "../components/myHeader.js";
import { navbar } from "../components/navbar.js";
import { user } from "../components/cliente.js";
import {openModal, closeModal} from "../components/modal.js";
myHeader.show();
navbar();
openModal(); closeModal();
user();
