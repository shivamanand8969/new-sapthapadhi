async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://sapthapadhimatrimony.in/backend/app/viewUserProfile/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}
