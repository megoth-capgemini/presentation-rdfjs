import { ShapeType } from "ldo";
import { profileSchema } from "./profile.schema";
import { profileContext } from "./profile.context";
import { Profile } from "./profile.typings";

/**
 * =============================================================================
 * LDO ShapeTypes profile
 * =============================================================================
 */

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: profileSchema,
  shape: "https://ldo.js.org/shapes/Profile",
  context: profileContext,
};
