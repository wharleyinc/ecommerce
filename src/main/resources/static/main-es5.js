(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-stepper></app-stepper>\n  <app-ecommerce></app-ecommerce>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/billing/billing.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/billing/billing.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <header class=\"card-header\">\n    <h4 class=\"card-title mt-2\">Billing</h4>\n  </header>\n  <article class=\"card-body\">\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col form-group\">\n          <label>First name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n        <div class=\"col form-group\">\n          <label>Last name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"\">\n            <small class=\"form-text text-muted\">You will receive a confirmation email.</small>\n        </div>\n      <div class=\"form-group\">\n        <label>Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label>Country</label>\n          <select id=\"inputState\" class=\"form-control\">\n            <option>Canada</option>\n            <option>Hong Kong</option>\n            <option selected=\"\">Ireland</option>\n            <option>Japan</option>\n            <option>United States</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n            <label>Zip/Postal Code</label>\n            <input type=\"text\" class=\"form-control\">\n        </div>\n      </div>\n    </form>\n  </article>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/ecommerce.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/ecommerce.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [hidden]=\"orderFinished\">\n  <h2 class=\"title-doc\">Limited Offers</h2>\n  <div class=\"col-md-12\">\n    <app-products #productsC (onOrderFinished)=finishOrder($event)></app-products>\n  </div>\n  <div class=\"col-md-12\">\n    <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC></app-shopping-cart>\n  </div>\n</div>\n<div [hidden]=\"!orderFinished\">\n  <h2 class=\"title-doc\">Secure Checkout</h2>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-payment></app-payment>\n    </div>\n    <div class=\"col-md-6\">\n      <app-orders #ordersC></app-orders>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/orders/orders.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/orders/orders.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"text-center\">ORDER</h2>\n<ul>\n  <li *ngFor=\"let order of orders.productOrders\">\n    {{ order.product.name }} - ${{ order.product.price }} x {{ order.quantity}} pcs.\n  </li>\n</ul>\n<h3 class=\"text-right\">Total amount: ${{ total }}</h3>\n\n<button class=\"btn btn-primary btn-block\" (click)=\"pay()\" *ngIf=\"!paid\">Pay</button>\n\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\n  <strong>Congratulation!</strong> You successfully made the order.\n</div> -->\n\n<div class=\"card\">\n  <header class=\"card-header\">\n    <h4 class=\"card-title mt-2\">Order Summary</h4>\n  </header>\n  <table class=\"table table-hover shopping-cart-wrap\">\n    <thead class=\"text-muted\">\n      <tr>\n        <th scope=\"col\">Product</th>\n        <th scope=\"col\" width=\"0\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders.productOrders\">\n        <td>\n          <figure class=\"media\">\n            <div class=\"img-wrap\"><img src={{order.product.pictureUrl}} class=\"img-thumbnail img-sm\"></div>\n            <figcaption class=\"media-body\">\n              <h6 class=\"title text-truncate\">{{ order.quantity }} × {{ order.product.name }}</h6>\n              <dl class=\"dlist-inline small\" *ngIf=\"order.size !== 'N/A'\">\n                <dt style=\"padding-right: 5px;\">Size:</dt>\n                <dd>{{ order.size }}</dd>\n              </dl>\n              <dl class=\"dlist-inline small\">\n                <dt style=\"padding-right: 5px;\">Colour:</dt>\n                <dd>{{ order.product.colour }}</dd>\n              </dl>\n            </figcaption>\n          </figure>\n        </td>\n        <td>\n          <div class=\"price-wrap\">\n            <var class=\"price\">€{{ order.product.price * order.quantity }}</var>\n            <small class=\"text-muted\" *ngIf=\"(order.quantity > 1)\">(€{{ order.product.price }} each)</small>\n          </div> <!-- price-wrap .// -->\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"box\">\n        <dl class=\"dlist-align\">\n          <dt>Delivery</dt>\n          <dd class=\"text-right\">Free</dd>\n        </dl>\n        <dl class=\"dlist-align\">\n          <dt>Payment Total </dt>\n          <dd class=\"text-right h5 b\">€{{ total }}</dd>\n        </dl>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/payment/payment.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/payment/payment.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form role=\"form\" [formGroup]=\"stripeTest\" (ngSubmit)=\"checkout()\" *ngIf=\"!paymentFinished\">\n  <!-- Billing -->\n  <div class=\"card\">\n    <header class=\"card-header\">\n      <h4 class=\"card-title mt-2\">Billing</h4>\n    </header>\n    <article class=\"card-body\">\n        <div class=\"form-row\">\n          <div class=\"col form-group\">\n            <label>First name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"fname\" placeholder=\"\" [ngClass]=\"{'is-invalid' : (fname.invalid && (fname.dirty || fname.touched)) }\">\n          </div>\n          <div class=\"col form-group\">\n            <label>Last name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"lname\" placeholder=\"\" [ngClass]=\"{'is-invalid' : (lname.invalid && (lname.dirty || lname.touched)) }\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"\" [ngClass]=\"{'is-invalid' : (email.invalid && (email.dirty || email.touched)) }\">\n          <small class=\"form-text text-muted\">You will receive a confirmation email.</small>\n        </div>\n        <div class=\"form-group\">\n          <label>Address</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"\" [ngClass]=\"{'is-invalid' : (address.invalid && (address.dirty || address.touched)) }\">\n        </div>\n        <div class=\"form-group\">\n          <label>City</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"\" [ngClass]=\"{'is-invalid' : (city.invalid && (city.dirty || city.touched)) }\">\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Country</label>\n            <select id=\"inputState\" class=\"form-control\" formControlName=\"country\" [ngClass]=\"{'is-invalid' : (country.invalid && (country.dirty || country.touched)) }\">\n              <option>Canada</option>\n              <option>Hong Kong</option>\n              <option selected=\"\">Ireland</option>\n              <option>Japan</option>\n              <option>United States</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Zip/Postal Code</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"zip\" [ngClass]=\"{'is-invalid' : (zip.invalid && (zip.dirty || zip.touched)) }\">\n          </div>\n        </div>\n      \n    </article>\n  </div>\n  <!-- Payment -->\n  <article class=\"card\" style=\"margin-top: 1em;\">\n    <header class=\"card-header\">\n      <h4 class=\"card-title mt-2\">Payment</h4>\n    </header>\n    <div class=\"alert\" role=\"alert\" *ngIf=\"isError\" [ngClass]=\"{'alert-danger' : (errorStatus === '500'), 'alert-warning' : (errorStatus !== '500')}\">\n      <i class=\"icon ion-md-warning\"></i> <strong style=\"margin-left: 5px\">Error {{ errorStatus }}</strong>\n      <p>{{ errorMessage }}</p>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n        <label for=\"cardNumber\">Card number</label>\n        <div class=\"input-group\">\n          <div type=\"text\" class=\"form-control\" name=\"cardNumber\" placeholder=\"\"\n            style=\"border-right: none; padding: 0px  0px  0px 10px;\" id=\"card-element\"></div>\n          <div class=\"input-group-append\">\n            <span class=\"input-group-text\" style=\"border-left: none; background-color: #fff;\">\n              <img src=\"https://img.icons8.com/color/48/000000/visa.png\" class=\"payment-card\">\n              <img src=\"https://img.icons8.com/color/48/000000/mastercard.png\" class=\"payment-card\">\n              <img src=\"https://img.icons8.com/color/48/000000/amex.png\" class=\"payment-card\">\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <button class=\"subscribe btn btn-success btn-block\" type=\"submit\" [disabled]=\"isProcessing\">\n        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\" *ngIf=\"isProcessing\"></span>\n        <span *ngIf=\"!isProcessing\">Place Order</span>\n      </button>\n    </div>\n  </article>\n</form>\n<!-- Success -->\n<app-success *ngIf=\"paymentFinished\" [formModel]=\"formModel\"></app-success>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/products/products.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/products/products.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row card-deck\">\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        <h4>{{order.product.name}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <a href=\"#\"><img class=\"card-img-top\" src={{order.product.pictureUrl}} alt=\"\"></a>\n        <h5 class=\"card-title\">${{order.product.price}}</h5>\n        <div class=\"row\">\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n            <input type=\"number\" min=\"0\" class=\"form-control\" [(ngModel)]=order.quantity>\n          </div>\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n            <button class=\"btn btn-primary\" (click)=\"addToCart(order)\" [disabled]=\"order.quantity <= 0\">Add To Cart\n            </button>\n          </div>\n          <div class=\"col-12\" *ngIf=\"isProductSelected(order.product)\">\n            <button class=\"btn btn-primary btn-block\" (click)=\"removeFromCart(order)\">Remove From Cart\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"row card-deck\" style=\"\">\n  <div class=\"col-lg-12 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\n\n    <div class=\"card\">\n      <div class=\"row no-gutters\">\n        <aside class=\"col-sm-5 justify-content-center border-right\">\n          <article class=\"gallery-wrap\">\n            <div class=\"img-big-wrap\">\n              <img style=\"\" src={{order.product.pictureUrl}}>\n            </div>\n          </article>\n          \n        </aside>\n        <aside class=\"col-sm-7\">\n          <article class=\"p-5\">\n            <h3 class=\"title mb-3\">{{ order.product.name }}</h3>\n            <div class=\"mb-3\">\n              <var class=\"price h3\" style=\"color: #F57C00\">\n                <span class=\"currency\">€</span><span class=\"num\">{{ order.product.price }}</span>\n              </var>\n              <span></span>\n            </div> <!-- price-detail-wrap .// -->\n            <dl>\n              <dt>Description</dt>\n              <dd>\n                <p>{{ order.product.description }}</p>\n              </dd>\n            </dl>\n            <dl class=\"row\">\n              <dt class=\"col-sm-3\">Model#</dt>\n              <dd class=\"col-sm-9\">{{ order.product.id }}</dd>\n\n              <dt class=\"col-sm-3\">Brand</dt>\n              <dd class=\"col-sm-9\">{{ order.product.brand }}</dd>\n\n              <dt class=\"col-sm-3\">Colour</dt>\n              <dd class=\"col-sm-9\">{{ order.product.colour }}</dd>\n\n            </dl>\n            <div class=\"rating-wrap\">\n\n              <ul class=\"rating-stars\" style=\"padding-right: 10px;\">\n                <li style=\"width:80%\" class=\"stars-active\">\n                  <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i>\n                  <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i>\n                  <i class=\"fa fa-star\"></i>\n                </li>\n                <li>\n                  <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i>\n                  <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i>\n                  <i class=\"fa fa-star\"></i>\n                </li>\n              </ul>\n              <div class=\"label-rating\">132 reviews</div>\n            </div> <!-- rating-wrap.// -->\n            <hr>\n            <div class=\"row\">\n              \n              <div class=\"col-sm-5\">\n                <dl class=\"dlist-inline\">\n                  <dt style=\"padding-right: 10px;\">Quantity: </dt>\n                  <dd>\n                    <select class=\"form-control form-control-sm\" style=\"width:70px;\" [(ngModel)]=order.quantity>\n                      <option selected=\"selected\" [value]=1> 1 </option>\n                      <option [value]=2> 2 </option>\n                      <option [value]=3> 3 </option>\n                    </select>\n                  </dd>\n                </dl> <!-- item-property .// -->\n              </div> <!-- col.// -->\n              <div class=\"col-sm-7\" *ngIf=\"order.product.category === 'CLOTHES'\">\n                <dl class=\"dlist-inline\">\n                  <dt style=\"padding-right: 10px;\">Size: </dt>\n                  <dd>\n                    <form>\n                        <label class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\"\n                              value=\"SM\" [(ngModel)]=order.size [ngClass]=\"{'is-invalid' : isInvalid }\">\n                            <span class=\"form-check-label\">SM</span>\n                          </label>\n                          <label class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\"\n                            value=\"MD\" [(ngModel)]=order.size [ngClass]=\"{'is-invalid' : isInvalid }\">\n                            <span class=\"form-check-label\">MD</span>\n                          </label>\n                          <label class=\"form-check form-check-inline\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\"\n                            value=\"LG\" [(ngModel)]=order.size [ngClass]=\"{'is-invalid' : isInvalid }\">\n                            <span class=\"form-check-label\">LG</span>\n                          </label>\n                    </form>\n                  </dd>\n                </dl>\n              </div>\n\n              <div class=\"col-sm-7\" *ngIf=\"order.product.category === 'SHOES'\">\n                  <div class=\"invalid-feedback\" *ngIf=\"isInvalid\">Please select a size.</div>\n                  <dl class=\"dlist-inline\">\n                    <dt style=\"padding-right: 10px;\">Size:</dt>\n                    <dd>\n                      <select class=\"form-control form-control-sm\" style=\"width:80px;\"\n                        [ngClass]=\"{'is-invalid' : isInvalid }\" [(ngModel)]=order.size>\n                        <option selected=\"selected\" [value]=9>9</option>\n                        <option [value]=9.5>9.5</option>\n                        <option [value]=10>10</option>\n                        <option [value]=10.5>10.5</option>\n                        <option [value]=11>11</option>\n                        <option [value]=11.5>11.5</option>\n                        <option [value]=12>12</option>\n                      </select>\n                    </dd>\n                  </dl>\n                </div>\n              \n            </div>\n            <hr>\n            <a class=\"btn btn-primary\" style=\"margin-right: 10px; color: #fff\" (click)=\"addToCartAndFinishOrder(order)\"> Buy now </a>\n            <a class=\"btn btn-outline-primary\" (click)=\"addToCart(order)\" style=\"color: #007bff\"> <i class=\"fas fa-shopping-cart\"></i> Add to cart </a>\n          </article>\n        </aside>\n      </div>\n    </div>\n  </div>\n  <div #divToScroll></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/shopping-cart/shopping-cart.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n    <div class=\"card-header text-center\">Shopping Cart</div>\n    <div class=\"card-body\">\n        <p>Shopping-cart component</p>\n        <h5 class=\"card-title\">Total: ${{total}}</h5>\n        <hr>\n        <h6 class=\"card-title\">Items bought:</h6>\n\n        <ul>\n            <li *ngFor=\"let order of orders.productOrders\">\n                {{ order.product.name }} - {{ order.quantity}} pcs.\n            </li>\n        </ul>\n\n        <button class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\n                [disabled]=\"orders.productOrders.length == 0\">Checkout\n        </button>\n    </div>\n</div> -->\n\n<div *ngIf=\"!(orders.productOrders.length == 0)\" style=\"padding-bottom: 50px;\" id=\"shoppingCart\">\n    <h2 class=\"title-doc\">Your Order</h2>\n    <div class=\"card\" #shoppingCart>\n            <table class=\"table table-hover shopping-cart-wrap\">\n              <thead class=\"text-muted\">\n                <tr>\n                  <th scope=\"col\">Product</th>\n                  <th scope=\"col\" width=\"120\">Quantity</th>\n                  <th scope=\"col\" width=\"120\">Price</th>\n                  <th scope=\"col\" width=\"200\" class=\"text-right\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let order of orders.productOrders\">\n                  <td>\n                    <figure class=\"media\">\n                      <div class=\"img-wrap\"><img src={{order.product.pictureUrl}} class=\"img-thumbnail img-sm\"></div>\n                      <figcaption class=\"media-body\">\n                        <h6 class=\"title text-truncate\"> {{ order.product.name }} </h6>\n                        <dl class=\"dlist-inline small\" *ngIf=\"order.size !== 'N/A'\">\n                          <dt style=\"padding-right: 5px;\">Size:</dt>\n                          <dd>{{ order.size }}</dd>\n                        </dl>\n                        <dl class=\"dlist-inline small\">\n                          <dt style=\"padding-right: 5px;\">Colour:</dt>\n                          <dd>{{ order.product.colour }}</dd>\n                        </dl>\n                      </figcaption>\n                    </figure>\n                  </td>\n                  <td>\n                      <span> {{ order.quantity}} </span>\n                  </td>\n                  <td>\n                    <div class=\"price-wrap\">\n                      <var class=\"price\">€{{ order.product.price * order.quantity }}</var>\n                      <small class=\"text-muted\" *ngIf=\"(order.quantity > 1)\">(€{{ order.product.price }} each)</small>\n                    </div> <!-- price-wrap .// -->\n                  </td>\n                  <td class=\"text-right\">\n                    <a class=\"btn btn-outline-danger\" (click)=\"removeFromCart(order)\" style=\"color: #dc3545; border-radius: 25px;\"> × Remove </a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"box\">\n              <dl class=\"dlist-align\">\n                  <dt>Total cost: </dt>\n                  <dd class=\"text-right h5 b\" > €{{total}} </dd>\n              </dl>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-md-4\">\n                    <button class=\"btn btn-primary btn-block\" (click)=\"finishOrder()\" [disabled]=\"orders.productOrders.length == 0\">Proceed to Checkout</button>\n                </div>\n              </div>\n              </div>\n          </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/stepper/stepper.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/stepper/stepper.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 1em;\">\n        <div id=\"stepper1\" class=\"bs-stepper\">\n          <div class=\"bs-stepper-header\">\n            <div class=\"step\">\n              <button class=\"step-trigger\" (click)=\"returnToStore()\" [disabled]=\"shopDisabled\">\n                <span class=\"bs-stepper-circle\" [ngClass]=\"{'stepper-active' : (step === 1) }\">1</span>\n                <span class=\"bs-stepper-label\" [ngClass]=\"{'stepper-text-active' : (step === 1) }\">Store</span>\n              </button>\n            </div>\n            <div class=\"line\"></div>\n            <div class=\"step\">\n              <button class=\"step-trigger\" (click)=\"returnToCheckout()\" [disabled]=\"!checkoutVisited\">\n                <span class=\"bs-stepper-circle\" [ngClass]=\"{'stepper-active' : (step === 2) }\">2</span>\n                <span class=\"bs-stepper-label\" [ngClass]=\"{'stepper-text-active' : (step === 2) }\">Checkout</span>\n              </button>\n            </div>\n            <div class=\"line\"></div>\n            <div class=\"step\">\n              <button class=\"step-trigger\" [disabled]=\"step !== 4\">\n                <span class=\"bs-stepper-circle\" [ngClass]=\"{'stepper-active' : (step === 4) }\">3</span>\n                <span class=\"bs-stepper-label\" [ngClass]=\"{'stepper-text-active' : (step === 4) }\">Confirmation</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/success/success.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/success/success.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 text-center\">\n                    <i class=\"icon ion-md-checkmark-circle-outline\" style=\"font-size: 64px; color: #4CAF50\"></i>\n            </div>\n        </div>\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12\">\n                    <h2 class=\"title-doc\">Thank you for your purchase!</h2>\n                    <p>You will receive an order confirmation email at <strong>{{ formModel.email }}</strong> with details of your order.</p>\n                    <p>Your order # is: <strong>{{ formModel.id }}</strong></p>\n                    <a class=\"btn btn-primary\" style=\"margin-top: 6em; color: #fff\" (click)=\"refresh()\"> <i class=\"fas fa-shopping-cart\"></i> Continue Shopping </a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ecommerce/products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecommerce/shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ecommerce/orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _ecommerce_billing_billing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ecommerce/billing/billing.component */ "./src/app/ecommerce/billing/billing.component.ts");
/* harmony import */ var _ecommerce_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ecommerce/payment/payment.component */ "./src/app/ecommerce/payment/payment.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _ecommerce_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ecommerce/stepper/stepper.component */ "./src/app/ecommerce/stepper/stepper.component.ts");
/* harmony import */ var _ecommerce_services_StepperService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ecommerce/services/StepperService */ "./src/app/ecommerce/services/StepperService.ts");
/* harmony import */ var _ecommerce_success_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ecommerce/success/success.component */ "./src/app/ecommerce/success/success.component.ts");


















var appRoutes = [
    {
        path: '',
        component: _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceComponent"],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_7__["EcommerceComponent"],
                _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"],
                _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_10__["OrdersComponent"],
                _ecommerce_billing_billing_component__WEBPACK_IMPORTED_MODULE_12__["BillingComponent"],
                _ecommerce_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"],
                _ecommerce_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_15__["StepperComponent"],
                _ecommerce_success_success_component__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                ngx_stripe__WEBPACK_IMPORTED_MODULE_14__["NgxStripeModule"].forChild('pk_test_LYR0rKmCAwHjTuMjvGnz8jQ000088t2byd')
            ],
            providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_11__["EcommerceService"], _ecommerce_services_StepperService__WEBPACK_IMPORTED_MODULE_16__["StepperService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ecommerce/billing/billing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/billing/billing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9iaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/billing/billing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/billing/billing.component.ts ***!
  \********************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BillingComponent = /** @class */ (function () {
    function BillingComponent() {
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! raw-loader!./billing.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/ecommerce/billing/billing.component.css")]
        })
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.css":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _services_StepperService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/StepperService */ "./src/app/ecommerce/services/StepperService.ts");




var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent(ecommerceService, stepperService) {
        this.ecommerceService = ecommerceService;
        this.stepperService = stepperService;
        this.collapsed = true;
        this.orderFinished = false;
    }
    EcommerceComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    EcommerceComponent.prototype.finishOrder = function (orderFinished) {
        // this.orderFinished = orderFinished;
        this.ecommerceService.OrderFinished = orderFinished;
        this.orderFinished = this.ecommerceService.OrderFinished;
        this.stepperService.Step = 2;
        this.stepperService.visitCheckout();
    };
    EcommerceComponent.prototype.reset = function () {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    };
    EcommerceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrderFinishedChanged.subscribe(function () {
            _this.orderFinished = _this.ecommerceService.OrderFinished;
        });
    };
    EcommerceComponent.prototype.ngAfterViewInit = function () {
        // this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
        //   console.log('Eccomerce component ... ordersChanged event');
        //   console.log(this.shoppingCartEl.nativeElement);
        //   this.shoppingCartEl.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // });
    };
    EcommerceComponent.ctorParameters = function () { return [
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"] },
        { type: _services_StepperService__WEBPACK_IMPORTED_MODULE_3__["StepperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsC', { read: true, static: false })
    ], EcommerceComponent.prototype, "productsC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC', { read: true, static: false })
    ], EcommerceComponent.prototype, "shoppingCartC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC', { read: true, static: false })
    ], EcommerceComponent.prototype, "shoppingCartEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersC', { read: true, static: false })
    ], EcommerceComponent.prototype, "ordersC", void 0);
    EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! raw-loader!./ecommerce.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.css */ "./src/app/ecommerce/ecommerce.component.css")]
        })
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-order.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/models/product-order.model.ts ***!
  \*********************************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/app/ecommerce/models/product.model.ts");

var ProductOrder = /** @class */ (function () {
    function ProductOrder(product, quantity, size) {
        this.product = product;
        this.quantity = quantity;
        this.size = size;
    }
    ProductOrder.ctorParameters = function () { return [
        { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
        { type: Number },
        { type: String }
    ]; };
    return ProductOrder;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product-orders.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/models/product-orders.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
var ProductOrders = /** @class */ (function () {
    function ProductOrders() {
        this.productOrders = [];
    }
    return ProductOrders;
}());



/***/ }),

/***/ "./src/app/ecommerce/models/product.model.ts":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/models/product.model.ts ***!
  \***************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, price, pictureUrl, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
        this.category = category;
    }
    Product.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return Product;
}());



/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.orders = this.ecommerceService.ProductOrders;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.orders = _this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    };
    OrdersComponent.prototype.pay = function () {
        this.paid = true;
        // this.ecommerceService.saveOrder(this.orders).subscribe();
    };
    OrdersComponent.prototype.loadTotal = function () {
        var _this = this;
        this.sub = this.ecommerceService.TotalChanged.subscribe(function () {
            _this.total = _this.ecommerceService.Total;
        });
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"] }
    ]; };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/ecommerce/orders/orders.component.css")]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/payment/payment.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/payment/payment.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/payment/payment.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/payment/payment.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_StepperService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/StepperService */ "./src/app/ecommerce/services/StepperService.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");






var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(fb, stripeService, stepperService, ecommerceService) {
        this.fb = fb;
        this.stripeService = stripeService;
        this.stepperService = stepperService;
        this.ecommerceService = ecommerceService;
        this.isProcessing = false;
        this.isError = false;
        this.paymentFinished = false;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fname = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.lname = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.city = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.zip = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.country = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.stripeTest = this.fb.group({
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            address: this.address,
            city: this.city,
            zip: this.zip,
            country: this.country,
        });
        this.stripeService.elements().subscribe(function (elements) {
            _this.elements = elements;
            if (!_this.card) {
                _this.card = _this.elements.create('card', {
                    hidePostalCode: true,
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '1rem',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                _this.card.mount('#card-element');
            }
        });
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentComponent.prototype.ngOnDestroy = function () {
    };
    PaymentComponent.prototype.checkout = function () {
        var _this = this;
        if (this.stripeTest.status === 'INVALID') {
            return;
        }
        // Disable form and Stepper state 3: User cannot modify order.
        this.isProcessing = true;
        this.stripeTest.disable();
        this.stepperService.Step = 3;
        // TokenData from Stripe API.
        var name = this.stripeTest.get('fname').value + " " + this.stripeTest.get('lname').value;
        var tokenData = {
            name: name,
            address_line1: this.stripeTest.get('address').value,
            address_line2: '',
            address_state: '',
            address_city: this.stripeTest.get('city').value,
            address_zip: this.stripeTest.get('zip').value,
            address_country: '',
        };
        this.stripeService.createToken(this.card, tokenData).subscribe(function (result) {
            if (result.error) {
                throw new Error(result.error.message);
            }
            // @ts-ignore
            _this.ecommerceService.ProductOrders.token = result.token.id;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.firstName = _this.stripeTest.get('fname').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.lastName = _this.stripeTest.get('lname').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.email = _this.stripeTest.get('email').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.address = _this.stripeTest.get('address').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.city = _this.stripeTest.get('city').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.country = _this.stripeTest.get('country').value;
            // @ts-ignore
            _this.ecommerceService.ProductOrders.zip = _this.stripeTest.get('zip').value;
            _this.formModel = _this.stripeTest.getRawValue();
            var res = _this.ecommerceService.saveOrder(_this.ecommerceService.ProductOrders);
            res.then(function (res) {
                // @ts-ignore
                _this.formModel.id = res.id;
                _this.stepperService.Step = 4;
                _this.paymentFinished = true;
            }, function (error) {
                _this.handleError(error);
            });
        });
    };
    PaymentComponent.prototype.handleError = function (error) {
        this.isError = true;
        var message = error.error.message;
        message = message.split(';');
        this.errorMessage = message[0];
        this.errorStatus = error.status;
        if (this.errorStatus !== '500') {
            this.isProcessing = false;
            this.stripeTest.enable();
            this.stepperService.Step = 2;
        }
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_2__["StripeService"] },
        { type: _services_StepperService__WEBPACK_IMPORTED_MODULE_4__["StepperService"] },
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_5__["EcommerceService"] }
    ]; };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/ecommerce/payment/payment.component.css")]
        })
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/products/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\r\n    padding-right: 0;\r\n    padding-left: 1;\r\n}\r\n\r\n\r\n\r\n.img-wrap {\r\n    border-radius: 0.2rem 0.2rem 0 0;\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 220px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctMCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbWctd3JhcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMC4ycmVtIDAgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.productOrders = [];
        this.products = [];
        this.productSelected = false;
        this.isInvalid = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    };
    ProductsComponent.prototype.ngAfterViewInit = function () {
    };
    ProductsComponent.prototype.addToCart = function (order) {
        if (order.quantity === 0) {
            order.quantity = 1;
        }
        if (order.product.category === 'SHOES' && order.size === 'N/A') {
            this.isInvalid = true;
            return;
        }
        if (order.product.category === 'CLOTHES' && order.size === 'N/A') {
            this.isInvalid = true;
            return;
        }
        this.isInvalid = false;
        if (this.ecommerceService.ProductOrders.productOrders.length === 0) {
            this.addToCartService(order);
        }
        else {
            this.checkDuplicates(order);
        }
        // document.getElementById('bottom').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    ProductsComponent.prototype.addToCartService = function (order) {
        this.ecommerceService.SelectedProductOrder = order;
        this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
        this.productSelected = true;
    };
    ProductsComponent.prototype.checkDuplicates = function (order) {
        var _this = this;
        this.ecommerceService.ProductOrders.productOrders.forEach(function (item) {
            if (item.product.id === order.product.id) {
                _this.shoppingCartOrders.productOrders.splice(_this.getProductIndex(item.product), 1);
            }
        });
        this.addToCartService(order);
    };
    ProductsComponent.prototype.removeFromCart = function (productOrder) {
        var index = this.getProductIndex(productOrder.product);
        if (index > 1) {
            this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    };
    ProductsComponent.prototype.getProductIndex = function (product) {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(function (value) { return value.product === product; });
    };
    ProductsComponent.prototype.isProductSelected = function (product) {
        return this.getProductIndex(product) > -1;
    };
    ProductsComponent.prototype.loadProducts = function () {
        var _this = this;
        this.ecommerceService.getAllProducts().subscribe(function (products) {
            _this.products = products;
            _this.products.forEach(function (product) {
                _this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0, 'N/A'));
            });
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.loadOrders = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.shoppingCartOrders = _this.ecommerceService.ProductOrders;
            console.log('orders changed from ProductsComponent');
            console.log(_this.shoppingCartOrders);
        });
    };
    ProductsComponent.prototype.reset = function () {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    };
    ProductsComponent.prototype.scroll = function (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    ProductsComponent.prototype.addToCartAndFinishOrder = function (order) {
        this.addToCart(order);
        if (!this.isInvalid) {
            this.orderFinished = true;
            this.ecommerceService.Total = this.calculateTotal(this.ecommerceService.ProductOrders.productOrders);
            this.onOrderFinished.emit(this.orderFinished);
        }
    };
    ProductsComponent.prototype.calculateTotal = function (products) {
        var sum = 0;
        products.forEach(function (value) {
            sum += (value.product.price * value.quantity);
        });
        return sum;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProductsComponent.prototype, "onOrderFinished", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divToScroll', { read: true, static: false })
    ], ProductsComponent.prototype, "divToScroll", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/ecommerce/products/products.component.css")]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/services/EcommerceService.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
  \********************************************************/
/*! exports provided: EcommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceService", function() { return EcommerceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var EcommerceService = /** @class */ (function () {
    function EcommerceService(http) {
        this.http = http;
        this.productsUrl = "/api/products";
        this.ordersUrl = "/api/orders";
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_1__["ProductOrders"]();
        this.productOrderSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ordersSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.totalSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.orderFinishedSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Used to toggle between Shop --> Checkout pages.
        this.orderFinished = false;
        this.ProductOrderChanged = this.productOrderSubject.asObservable();
        this.OrdersChanged = this.ordersSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
        this.OrderFinishedChanged = this.orderFinishedSubject.asObservable();
    }
    EcommerceService.prototype.getAllProducts = function () {
        return this.http.get(this.productsUrl);
    };
    EcommerceService.prototype.saveOrder = function (order) {
        return this.http.post(this.ordersUrl, order).toPromise();
    };
    Object.defineProperty(EcommerceService.prototype, "SelectedProductOrder", {
        get: function () {
            return this.productOrder;
        },
        set: function (value) {
            this.productOrder = value;
            this.productOrderSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcommerceService.prototype, "ProductOrders", {
        get: function () {
            return this.orders;
        },
        set: function (value) {
            console.log(value.productOrders);
            this.orders = value;
            this.ordersSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcommerceService.prototype, "Total", {
        get: function () {
            return this.total;
        },
        set: function (value) {
            this.total = value;
            this.totalSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EcommerceService.prototype, "OrderFinished", {
        get: function () {
            return this.orderFinished;
        },
        set: function (value) {
            this.orderFinished = value;
            this.orderFinishedSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    EcommerceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EcommerceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
    ], EcommerceService);
    return EcommerceService;
}());



/***/ }),

/***/ "./src/app/ecommerce/services/StepperService.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/services/StepperService.ts ***!
  \******************************************************/
/*! exports provided: StepperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperService", function() { return StepperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StepperService = /** @class */ (function () {
    function StepperService() {
        this.step = 1;
        this.checkoutVisited = false;
        this.shopDisabled = false;
        this.stepSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.shopDisabledSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.StepChanged = this.stepSubject.asObservable();
        this.ShopDisabledChanged = this.shopDisabledSubject.asObservable();
        // disableShop() {
        //     this.shopDisabled = true;
        // }
    }
    Object.defineProperty(StepperService.prototype, "Step", {
        get: function () {
            return this.step;
        },
        set: function (step) {
            this.step = step;
            this.stepSubject.next();
        },
        enumerable: true,
        configurable: true
    });
    StepperService.prototype.visitCheckout = function () {
        this.checkoutVisited = true;
    };
    StepperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StepperService);
    return StepperService;
}());



/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");






var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.loadCart();
        this.loadTotal();
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShoppingCartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Auto-scroll to shopping-cart.
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            if (_this.ecommerceService.ProductOrders.productOrders.length > 1) {
                return;
            }
            else {
                setTimeout(function () {
                    window.scrollBy({
                        top: window.innerHeight * 4,
                        left: 0,
                        behavior: 'smooth'
                    });
                }, 250);
            }
        });
    };
    ShoppingCartComponent.prototype.calculateTotal = function (products) {
        var sum = 0;
        products.forEach(function (value) {
            sum += (value.product.price * value.quantity);
        });
        return sum;
    };
    ShoppingCartComponent.prototype.loadTotal = function () {
        var _this = this;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            console.log('orders changed from ShoppingCartComponent');
            _this.total = _this.calculateTotal(_this.orders.productOrders);
        });
    };
    ShoppingCartComponent.prototype.finishOrder = function () {
        this.orderFinished = true;
        this.ecommerceService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    };
    ShoppingCartComponent.prototype.loadCart = function () {
        var _this = this;
        this.sub = this.ecommerceService.ProductOrderChanged.subscribe(function () {
            var productOrder = _this.ecommerceService.SelectedProductOrder;
            if (productOrder) {
                _this.orders.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_4__["ProductOrder"](productOrder.product, productOrder.quantity, productOrder.size));
            }
            _this.ecommerceService.ProductOrders = _this.orders;
            _this.orders = _this.ecommerceService.ProductOrders;
            _this.total = _this.calculateTotal(_this.orders.productOrders);
        });
    };
    ShoppingCartComponent.prototype.removeFromCart = function (order) {
        console.log(order);
        var index = this.getProductIndex(order.product);
        console.log(index);
        if (index > -1) {
            this.ecommerceService.ProductOrders.productOrders.splice(index, 1);
        }
        this.total = this.calculateTotal(this.orders.productOrders);
    };
    ShoppingCartComponent.prototype.getProductIndex = function (product) {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(function (value) { return value.product === product; });
    };
    ShoppingCartComponent.prototype.reset = function () {
        this.orderFinished = false;
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orders.productOrders = [];
        this.loadTotal();
        this.total = 0;
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ShoppingCartComponent.prototype, "onOrderFinished", void 0);
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css")]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/stepper/stepper.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/stepper/stepper.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/stepper/stepper.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/stepper/stepper.component.ts ***!
  \********************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_StepperService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/StepperService */ "./src/app/ecommerce/services/StepperService.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");




var StepperComponent = /** @class */ (function () {
    function StepperComponent(stepperService, ecommerceService) {
        this.stepperService = stepperService;
        this.ecommerceService = ecommerceService;
    }
    StepperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.step = this.stepperService.Step;
        this.checkoutVisited = false;
        this.sub = this.stepperService.StepChanged.subscribe(function () {
            _this.step = _this.stepperService.Step;
            if (_this.step === 2) {
                _this.checkoutVisited = true;
            }
            if (_this.step === 3) {
                _this.checkoutVisited = false;
                _this.shopDisabled = true;
            }
        });
    };
    StepperComponent.prototype.returnToStore = function () {
        if (this.checkoutVisited) {
            this.stepperService.Step = 1;
            this.ecommerceService.OrderFinished = false;
        }
    };
    StepperComponent.prototype.returnToCheckout = function () {
        if (this.checkoutVisited) {
            this.ecommerceService.OrderFinished = true;
            this.stepperService.Step = 2;
        }
    };
    StepperComponent.ctorParameters = function () { return [
        { type: _services_StepperService__WEBPACK_IMPORTED_MODULE_2__["StepperService"] },
        { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"] }
    ]; };
    StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.css */ "./src/app/ecommerce/stepper/stepper.component.css")]
        })
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/ecommerce/success/success.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/success/success.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/success/success.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/success/success.component.ts ***!
  \********************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent.prototype.refresh = function () {
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SuccessComponent.prototype, "formModel", void 0);
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/ecommerce/success/success.component.css")]
        })
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\darcy\Documents\project-boris\ecommerce\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map