//this function will return a random photo-path from array
const randomPhotoProfile = (arr) => {
    return arr[~~(arr.length * Math.random())]
}

export default randomPhotoProfile;