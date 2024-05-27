export default function Podaci({ podaci }) {
  return (
    <div className="Podaci">
      <p>Tvoje ime je: {podaci.name}</p>
      <p>Tvoje prezime je: {podaci.surname}</p>
      <p>Tvoja lozinka je: {podaci.password}</p>
    </div>
  );
}
