export class AuthService {
    loggedIn = false;

    // 假裝在進行驗證 , 但結果是失敗
    isAuthenticated() {
        // alert('驗證開始!!');
        const promise = new Promise((resolve, reject) => {
            // setTimeout(() => {
            //     if (this.loggedIn) {
            //         alert('驗證成功');
            //     } else {
            //         alert('驗證失敗');
            //     }

            // }, 800);
            resolve(this.loggedIn);
        });
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}
