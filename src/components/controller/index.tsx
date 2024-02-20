import {useParams} from "react-router-dom";

export default function Controller() {
    const {presentationId} = useParams();
    return <>TEST: {presentationId}</>;
}