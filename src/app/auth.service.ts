export class AuthService{
    isLoggedIn=false;
    login(){
        this.isLoggedIn=true;
    }
    logout(){
        this.isLoggedIn=false;
    }
    isAuthenticated(){
        return this.isLoggedIn;
    }
    isAddToCart=false;
    add(){
        this.isAddToCart=true;
    }
    addOut(){
        this.isAddToCart=false;
    }
    isAdded(){
        return this.isAddToCart;
    }
}