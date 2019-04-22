import uuid from'uuid';

//typ akcji
export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';
// export const EDIT_COMMENT = 'EDIT_COMMENT'

//kreator akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        votes: 0
    }
};


function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

// function editComment(text, id) {
//     return {
//         type: EDIT_COMMENT,
//         id,
//         text
//     }
// }



function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
        
    }
}


function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}

export {addComment, thumbUpComment, thumbDownComment, removeComment}
