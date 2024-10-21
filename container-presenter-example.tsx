// Presenter Component (Dumb)
const UserProfile = ({ user }: { user: { name: string; email: string } }) => (
  <div>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

// Container Component (Smart)
const UserProfileContainer: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  useEffect(() => {
    // Fetch user data from an API
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return <UserProfile user={user} />;
};
