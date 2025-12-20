const user = {
  name: "El Aarabi Rida",
  imageUrl: "/rida.jpg", 
  imageSize: 90,
  dateNaissance: "09/02/2000",
  lieuNaissance: "Taroudant",
};

export default function Rida() {
  return (
    <>
      <h1>{user.name}</h1>

      <p><strong>Date de naissance :</strong> {user.dateNaissance}</p>
      <p><strong>Lieu de naissance :</strong> {user.lieuNaissance}</p>

      <img
        src={user.imageUrl}
        alt={"Photo de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
    </>
  );
}
