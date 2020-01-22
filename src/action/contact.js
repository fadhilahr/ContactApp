export const FIND_ALL_CONTACT = 'FIND_ALL_CONTACT';
export const FIND_ALL_CONTACT_SUCCESS = 'FIND_ALL_CONTACT_SUCCESS';
export const FIND_ALL_CONTACT_ERROR = 'FIND_ALL_CONTACT_ERROR';



export function findAllContact() {
    return {
        type: FIND_ALL_CONTACT
    };
}