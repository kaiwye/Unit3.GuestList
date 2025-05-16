import useGuestList from "./useGuestList";

export default function GuestList({ setGuestId }) {
  const { guests, isLoading, error } = useGuestList();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <main>
      <h1>Guest List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Select a guest above to see more details</h3>
      </main>
    </>
  );
}
