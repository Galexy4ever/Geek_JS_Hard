

class ProductList {
    goods;
    allProducts;
    

    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];

        this.fetchGoods();
        this.render();
        this.sum();
    }

    sum() {
        const sum = this.goods.reduce((sum, { price }) => sum + price, 0);
       
        return sum
    }

    fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (const good of this.goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }
}





class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }

    
}

const pl = new ProductList();



// class Basketlist {
//             basketGoods;
//             basketAllProducts;
            
        
//             constructor(container = '.basket') {
//                 this.container = container;
//                 this.basketGoods = [];
//                 this.basketAllProducts = [];
        
//                 this.fetchGoods();
//                 this.render();
//             }
        
        
        
//             fetchGoods() {
//                 this.basketGoods = [
//                     {id: 1, title: 'Notebook', price: 20000},
//                     {id: 2, title: 'Mouse', price: 1500},
//                     {id: 3, title: 'Keyboard', price: 5000},
//                     {id: 4, title: 'Gamepad', price: 4500},
//                 ];
//             }
        
//             render() {
//                 const block = document.querySelector(this.container);
        
//                 for (const good of this.basketGoods) {
//                     const basketObject = new BasketItem(good);
//                     // console.log(productObject);
//                     this.basketAllProducts.push(basketObject);
//                     block.insertAdjacentHTML('afterbegin', basketObject.render());
//                 }
//             }
    
// }

// class BasketItem {
//     constructor(basket, img = 'https://via.placeholder.com/200x150') {
//         this.title = basket.title;
//         this.price = basket.price;
//         this.id = basket.id;
//         this.img = img;
//         this.quantity = 0;
//     }

//     render() {
//         return `<div class="basket-item" data-id="${this.id}">
//                       <img src="${this.img}" alt="Some img">
//                       <div class="desc">
//                           <h3>${this.title}</h3>
//                           <p>${this.price} \u20bd</p>
//                           <p>${this.quantity}шт</p>
                          
//                       </div>
//                   </div>`;
//     } 
// }

// const bpl = new Basketlist();