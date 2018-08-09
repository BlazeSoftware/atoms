export default class RouteProps {
  name: string;
  atoms: boolean;

  constructor({ name, atoms = false }) {
    this.name = name;
    this.atoms = atoms;
  }
}