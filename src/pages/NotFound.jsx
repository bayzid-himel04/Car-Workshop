
const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Page Not Found</h1>
      <p style={styles.subtitle}>Status: 404</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#777',
  },
};

export default NotFound;
