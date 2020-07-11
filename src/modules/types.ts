import { IconName } from '@fortawesome/fontawesome-common-types';

export interface Module {
  id: string
  title: string;
  icon: IconName;
  color: string;
  versions: ModuleVersion[];
}

export interface ModuleVersion {
  name: string;
  defaultConfig: any;
}

export interface ModuleConfigProps {
  submitForm(): void;
}
