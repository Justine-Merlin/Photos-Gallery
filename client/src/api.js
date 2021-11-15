const API_URL = process.env.REACT_APP_API_URL;
export const USER_ID = process.env.REACT_APP_USER_ID;
export const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
export const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID; 

export const getImages = async (nextCursor) => {
    const params = new URLSearchParams();

    if(nextCursor){
        params.append('next_cursor', nextCursor)
    }
    const response = await fetch(`${API_URL}/photos?${params}`);
    const responseJson = await response.json();

    return responseJson;
}

export const filteredImages = async (filterValue, nextCursor) => {
    const params = new URLSearchParams();
    params.append(`expression`, `${filterValue}`);
    
    if(nextCursor){
        params.append('next_cursor', nextCursor)
    }

    const response = await fetch(`${API_URL}/search?${params}`);
    const responseJson = await response.json();

    return responseJson
}