import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * profileContext: JSONLD Context for profile
 * =============================================================================
 */
export const profileContext: ContextDefinition = {
  name: {
    "@id": "http://xmlns.com/foaf/0.1/name",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
};
