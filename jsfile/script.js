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


const handleSendRequest = async (userId, userName) => {
    try {
        const authInfo = JSON.parse(localStorage.getItem('authInfo'));
        if (!authInfo) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please Login First",
            });
            window.location.href = '/login';
            return;
        }

        const response = await fetch('https://sapthapadhimatrimony.in/backend/app/sendrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authInfo.token}`,
            },
            body: JSON.stringify({ toUserId: userId }),
        });

        const result = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `Request sent to ${userName}!`,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message || 'Failed to send request.',
            });
        }
    } catch (error) {
        console.error('Error sending request:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong. Please try again later.',
        });
    }
};

