import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faFile,
  faFileImage,
  faFileVideo,
  faFolder,
  faPlus,
  faThLarge,
  faTv,
  faUnlink,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const icons = [
  faTv,
  faThLarge,
  faFolder,
  faUsers,
  faChevronLeft,
  faPlus,
  faUnlink,
  faFile,
  faFileImage,
  faFileVideo,
];

library.add(...icons);
