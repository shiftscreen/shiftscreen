import { IconName, IconLookup } from '@fortawesome/fontawesome-common-types';

export interface Module {
  id: string
  title: string;
  icon: IconName | IconLookup;
  color: string;
  versions: ModuleVersion[];
  hiddenPreview?: boolean;
}

export interface ModuleVersion {
  name: string;
  defaultConfig: any;
}

export interface ModuleConfigProps {
  submitForm(): void;
}
