import DogGal from '../componets/DogGal';
import Login from '../componets/Login';
import Perfil from '../componets/Perfil';


export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Inicio',
    component: Login,
  },
  {
    id: 2,
    path: '/doggalery',
    title: 'Galeria de Mascotas',
    component: DogGal,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil de usuario',
    component: Perfil,
  },
];