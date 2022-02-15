import DogGal from '../componets/DogGal';
import Login from '../componets/Login';



export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Login',
    component: Login,
  },
  {
    id: 2,
    path: '/doggalery',
    title: 'Galeria de Perros',
    component: DogGal,
  },
  
];