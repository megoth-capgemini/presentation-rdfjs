import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for profile
 * =============================================================================
 */

/**
 * Profile Type
 */
export interface Profile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  name: string;
}
