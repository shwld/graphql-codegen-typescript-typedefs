import {
  Types,
  PluginValidateFn,
  PluginFunction,
} from '@graphql-codegen/plugin-helpers';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { stripIgnoredCharacters } from 'graphql';

const print = (schema) => `
  import gql from 'graphql-tag';
  export const typeDefs = gql\`${schema}\`;
`;

export const plugin: PluginFunction<{}, Types.ComplexPluginOutput> = (
  schema,
  _documents,
  _config,
  _info
) => {
  return {
    content: print(stripIgnoredCharacters(printSchemaWithDirectives(schema))),
  };
};

export const validate: PluginValidateFn<any> = async (
  _schema,
  _documents,
  _config,
  _outputFile
) => {};
