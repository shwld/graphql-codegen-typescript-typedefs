import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { stripIgnoredCharacters } from 'graphql';
const print = (schema) => `
  import gql from 'graphql-tag';
  export const typeDefs = gql\`${schema}\`;
`;
export const plugin = (schema, _documents, _config, _info) => {
    return {
        content: print(stripIgnoredCharacters(printSchemaWithDirectives(schema))),
    };
};
export const validate = async (_schema, _documents, _config, _outputFile) => { };
