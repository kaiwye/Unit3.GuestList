import useGuestList from "./useGuestList";

export default function GuestCard({ setGuestId, guestId }) {
  const { guests, isLoading, error } = useGuestList(`${API}${guestId}`);
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
