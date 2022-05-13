export async function callMSGraph(endpoint, token) {

    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        return data.value;
    } catch (error) {
        return console.error(error);
    }
}