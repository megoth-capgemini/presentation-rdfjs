import {LdoDataset, parseRdf, toTurtle} from "ldo";
import {ProfileShapeType} from "../../../ldo/profile.shapeTypes.ts";

export async function parseTurtle(turtle: string, baseUrl: string): Promise<LdoDataset> {
    return parseRdf(turtle, {baseIRI: baseUrl});
}

export function changeName(dataset: LdoDataset, profileUrl: string, name: string) {
    const profile = dataset.usingType(ProfileShapeType).fromSubject(profileUrl);
    profile.name = name;
}

export async function serializeTurtle(dataset: LdoDataset) {
    return toTurtle(dataset);
}
