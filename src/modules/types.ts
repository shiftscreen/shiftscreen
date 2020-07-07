import { IconName } from '@fortawesome/fontawesome-common-types';

export interface Module {
  id: string
  title: string;
  icon: IconName;
  color: string;
  versions: string[];
}

export interface ModuleConfigProps<T> {
  onChange(config: T): T;
  config: T;
}
