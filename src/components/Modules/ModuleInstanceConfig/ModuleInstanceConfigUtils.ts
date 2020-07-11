import * as R from 'ramda';
import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { Module, ModuleVersion } from 'types';
import modules from 'modules';

export const getDefaultConfig = (instance: BasicAppInstancePartsFragment) => {
  const module = R.find<Module>(
    R.propEq('id', instance.appId)
  )(modules);

  const version = R.find<ModuleVersion>(
    R.propEq('name', instance.appVersion)
  )(module?.versions || []);

  return version?.defaultConfig || {};
};
