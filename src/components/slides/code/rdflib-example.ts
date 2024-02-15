import {graph, lit, namedNode, parse, serialize, st, Store} from "rdflib";
import * as $rdf from "rdflib";
import solidNamespace from "solid-namespace";

const namespace = solidNamespace($rdf);

export async function parseTurtle(turtle: string, baseUrl: string): Promise<Store> {
    const store = graph()
    return new Promise((resolve) => parse(turtle, store, baseUrl, 'text/turtle', (error) => {
        if (error) throw error;
        resolve(store);
    }));
}

export function changeName(store: Store, profileUrl: string, name: string) {
    store.remove(store.match(namedNode(profileUrl), namespace.foaf("name"), null));
    store.add(st(namedNode(profileUrl), namespace.foaf("name"), lit(name)));
}

export async function serializeTurtle(store: Store) {
    return new Promise((resolve) => serialize(null, store, null, 'text/turtle', (error, result) => {
        if (error) throw error
        resolve(result!);
    }));
}
