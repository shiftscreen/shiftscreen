import { IconLookup, IconName } from '@fortawesome/fontawesome-common-types';

export interface Module {
  id: string
  title: string;
  icon: IconName | IconLookup;
  color: string;
  versions: ModuleVersion[];
  blockDuration?: boolean;
  hiddenPreview?: boolean;
}

export interface ModuleVersion {
  name: string;
  defaultConfig: any;
}

export interface ModuleConfigProps {
  submitForm(): void;
}
