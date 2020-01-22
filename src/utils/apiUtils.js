export async function filteredFetch(url, option) {
    return await fetch(
        url, option
    ).then(response => {
        if (!response.ok) {
            throw new Error('Unknow error');
        }
        return response.json();
    }).then(json => {

        console.log(json.response_code);
        if (json.message != "Get contacts") {
            throw new Error(json.message || 'Unknow error')
        }
        return json.data;
    });

}