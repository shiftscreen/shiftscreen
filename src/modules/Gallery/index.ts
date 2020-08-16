import { Module } from 'types';
import { defaultConfig as defaultConfig__STABLE } from './stable/GalleryUtils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

library.add(faImage);

const GalleryModule: Module = {
  id: 'Gallery',
  icon: faImage,
  title: 'Galeria',
  color: '#154C7E',
  hiddenPreview: false,
  versions: [
    {
      name: 'stable',
      defaultConfig: defaultConfig__STABLE,
    },
  ]
};

export default GalleryModule;
