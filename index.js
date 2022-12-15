/* let productoEscogido = parseInt(
    prompt(
      'Escoge el producto que deseas comprar: 1.Iphone - 2.TV Samsung - 3.Ipad - 4.Computadora - 5.Galaxy Buds - 6.Xiaomi Mi Buds - 7.Samsung S21 - 8.Parlante Sony'
    )
  )
  let totalCompra = 0
  let seguirComprando = true
  let decision */
  
  //lista productos
  
  //clase producto
  class Producto {
    constructor(id, nombre, precio) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
  const iphone = new Producto(1, 'Iphone', 500)
  //productosExistentes.push(iphone)
  const tv = new Producto(2, 'TV Samsung', 1000)
  //productosExistentes.push(tv)
  const ipad = new Producto(3, 'Ipad', 200)
  //productosExistentes.push(ipad)
  const computador = new Producto(4, 'Computadora', 800)
  //productosExistentes.push(computadora)
  const Galaxy = new Producto(5, 'galaxy Buds', 200)
  //productosExistentes.push(computadora)
  const Xiaomi = new Producto(6, 'Xiaomi Mi Buds ', 150)
  //productosExistentes.push(computadora)
  const Samsung = new Producto(7, 'Samsung S21', 500)
  //productosExistentes.push(computadora)
  const Parlante = new Producto(8, 'Parlante Sony', 400)
  //productosExistentes.push(computadora)
  
  const productosExistentes = [iphone, tv, ipad, computador, Galaxy, Xiaomi, Samsung, Parlante]
  console.log(productosExistentes)

  
  const divProductos = document.getElementById("divProductos")

  productosExistentes.forEach(ProductoArray => {
    divProductos.innerHTML += `
    <div id="productos ${ProductoArray.id}" class="card tarjetas" style="width: 18%;">
    <img src="./image/iphone-xs-max.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${ProductoArray.nombre} </h5>
      <p class="card-text">precio:$ ${ProductoArray.precio} </p>
      <a href="#" class="btn btn-primary bott">agregar al carrito</a>
    </div>`
  })

  
  /* while (seguirComprando === true) {
  
    const productoCLiente = productosExistentes.find(producto => producto.id === productoEscogido)
    if (productoCLiente) {
      totalCompra = totalCompra + productoCLiente.precio
    } else {
      productoEscogido = parseInt(
        prompt(
          'Escoge un producto habilitado: 1.Iphone - 2.TV - 3.Ipad - 4.Computadora - 5.Galaxy Buds - 6.Xiaomi Mi Buds - 7.Samsung S21 - 8.Parlante Sony'
        )
      )
      continue
    }
    console.log(productoCLiente)
  
    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
      producto = parseInt(
        prompt(
          'Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computadora - 5.Galaxy Buds - 6.Xiaomi Mi Buds - 7.Samsung S21 - 8.Parlante Sony'
        )
      )
    } else {
      seguirComprando = false
    }
  } */
  alert(`El total de tu compra es ${totalCompra}`)
  //alert('El total de tu compra es '+totalCompra)
  
  // 1.Iphone: 500
  // 2.TV: 1000
  // 3.Ipad: 200
  // 4.Computador: 800            