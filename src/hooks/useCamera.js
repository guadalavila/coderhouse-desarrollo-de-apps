import * as ImagePicker from 'expo-image-picker';

function useCamera(){

    const getPermissionCamera = async () => {
        const { status } = await ImagePicker.getCameraPermissionsAsync()
        console.log(status);
        if (status !== 'granted') {
          return false
        }
        return true
      }
    
    const launchCamera = async () => {
        // const isVerified = getPermission()
        // if (!isVerified) {
        //   return
        // }
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 1,
        })
        return image?.uri;
    
    }

    const launchGallery = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
              return result;
          }
    }

    return { getPermissionCamera, launchCamera, launchGallery }
    
}

export default useCamera;