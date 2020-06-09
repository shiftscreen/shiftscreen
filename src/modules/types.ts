import React from 'react';

export interface Module {
  id: string
  title: string;
  versions: ModuleVersion<any>[];
}

export interface ModuleVersion<T> {
  name: string;
  View: React.FC<{ config: T }>;
  ConfigView: React.FC<ModuleConfigProps<T>>;
}

export interface ModuleConfigProps<T> {
  onChange(config: T): T;
}
