import useGuestList from "./useGuestList";

export default function GuestDetails({ guestId, setGuestId }) {
  const { guests, isLoading, error } = useGuestList(guestId);
  const guest = guests[0];

  if (isLoading) return <p>Loading guest details...</p>;
  if (error) return <p>Error loading guests; {error.message}</p>;
  if (!guest) return <p>No guest found.</p>;

  return (
    <div className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Return</button>
    </div>
  );
}
