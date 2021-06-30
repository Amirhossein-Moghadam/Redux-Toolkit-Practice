
const getRealTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const realTime = hours + ":" + `${minutes < 10 ? `0${minutes}` : minutes}`;
    return realTime;
}

export default getRealTime;