import axios from 'axios';

export async function patchProfile(profile) {
  const apiUrl = 'https://digiquest-back.herokuapp.com';

  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error()
    }
    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    }
    const response = await axios.patch(
      `${apiUrl}/profile/${profile.profileId}`, 
      {
        firstName: profile.profileName,
        lastName: profile.lastName,
        birthDate: profile.birthDate,
      },
      config
    );
    const message = response.data;
    console.log('Message récupéré :', message);
    return message;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil :', error);
    throw error;
  }
}
