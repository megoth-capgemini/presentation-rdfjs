import { Schema } from "shexj";

/**
 * =============================================================================
 * profileSchema: ShexJ Schema for profile
 * =============================================================================
 */
export const profileSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://ldo.js.org/shapes/Profile",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "TripleConstraint",
          predicate: "http://xmlns.com/foaf/0.1/name",
          valueExpr: {
            type: "NodeConstraint",
            datatype: "http://www.w3.org/2001/XMLSchema#string",
          },
        },
      },
    },
  ],
};
