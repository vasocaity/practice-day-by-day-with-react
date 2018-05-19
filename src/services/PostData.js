export function PostData(type, userData) {

    let BaseURL = 'http://localhost/api/checkLogin.php';
    return new Promise((resolve, reject) =>{         
        fetch(BaseURL, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });  
      });
}