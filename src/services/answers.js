export const toggleLike = async (list, answerId, likerId) => {
    const check = (answer) => {
        if (answer.id === answerId) {
            const isExist = answer.likes.findIndex(liker => liker.id === likerId) !== -1;
            if (isExist) {
                return null;
            }
            return answer.likes.push({ likerId });
        }
    }
    return list.map(check);
};
