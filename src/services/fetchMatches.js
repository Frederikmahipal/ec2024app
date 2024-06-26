import axios from 'axios';

async function fetchMatches(setMatches, setError) {
  try {
    const response = await axios.get('https://ec2024server.onrender.com/api/matches');
    const modifiedMatches = response.data.matches.map(match => ({
      ...match,
      group: match.group ? match.group.replace('_', ' ') : match.group
    }));
    setMatches(modifiedMatches);
  } catch (error) {
    console.error('Fetch error:', error);
    setError(error.toString());
  }
}

export default fetchMatches;