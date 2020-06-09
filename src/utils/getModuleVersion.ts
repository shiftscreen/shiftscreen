import * as R from 'ramda';
import { Module, ModuleVersion } from 'types';
import modules from 'modules';

const findModule = (id: string): Module | undefined => (
  R.find<Module>(R.propEq('id', id))(modules)
);

const findVersion = (version: string, module: Module): ModuleVersion<any> | undefined => (
  R.find<ModuleVersion<any>>(R.propEq('name', version))(module.versions)
);

const getModuleVersion = (id: string, version: string): ModuleVersion<any> | undefined => {
  const module = findModule(id);

  if (module === undefined) {
    return;
  }

  return findVersion(version, module);
};

export default getModuleVersion;
