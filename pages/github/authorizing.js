import { useGithubAuthRedirect } from "react-tinacms-github";

export default function Authorizing() {
  useGithubAuthRedirect();
  return <h2>Verificando a autorização...</h2>;
}
