///Estructura: Utiliza el siguiente diseño para realizar el CRUD correspondiente:

class datos {
  id: number = 0
  nombre: string = ''
  edad: number = 0
  profesion: string = ''
  arrayDatos: Array<any> = []
}

interface Inombre extends datos {
  getAll(): void
  getById(): void
  getByName(): void
  create(): void
  update(): void
  Delete(): void
}

class Repository implements Inombre {
  id: number = 0
  nombre: string = ''
  edad: number = 0
  profesion: string = ''
  arrayDatos: Array<any> = []
  buscarId: number = 0
  i: number = 0
  buscarNombre: string = ''

  getAll(): void {
    try {
      if (this.arrayDatos.length != 0) {
        this.arrayDatos.map((m) => {
          alert(`
                        --------------------------------------------
                        id: ${m.id}
                        nombre : ${m.nombre} 
                        edad: ${m.edad}
                        profesion : ${m.profesion}
                        --------------------------------------------
                    `)
        })
      } else {
        alert('No hay registros en tu array!')
      }
    } catch (exe) {
      console.log(exe)
    }
  }

  getById(): void {
    try {
      this.buscarId = Number(prompt('Digita el id que quieres buscar'))

      if (this.arrayDatos.length != 0) {
        for (let i = 0; i <= this.arrayDatos.length; i++) {
          if (this.arrayDatos[i].id === this.buscarId) {
            alert(`
                    --------------------------------------------
                    nombre : ${this.arrayDatos[i].nombre} 
                    edad: ${this.arrayDatos[i].edad}
                    profesion : ${this.arrayDatos[i].profesion} 
                    --------------------------------------------
                    `)
          } else {
            alert(`No hay coincidencia en el id : ${this.arrayDatos[i].id}`)
          }
        }
      } else {
        alert('Perdon, no hay datos en el array')
      }
    } catch (exe) {
      console.log(exe)
    }
  }
  getByName(): void {
    try {
      this.buscarNombre = String(
        prompt('Digita el nombre de la persona que quieres buscar'),
      )
      if (this.arrayDatos.length != 0) {
        for (let i = 0; i <= this.arrayDatos.length; i++) {
          if (this.arrayDatos[i].nombre === this.buscarNombre) {
            alert(`
                    --------------------------------------------
                    nombre : ${this.arrayDatos[i].nombre} 
                    edad: ${this.arrayDatos[i].edad}
                    profesion : ${this.arrayDatos[i].profesion}
                    --------------------------------------------
                    `)
          } else {
            alert(`No hay coincidencia en el id : ${this.arrayDatos[i].id}`)
          }
        }
      } else {
        alert('Perdon no hay datos en el array')
      }
    } catch (exe) {
      console.log(exe)
    }
  }

  create(): void {
    try {
      this.id = this.id + 1
      this.nombre = String(prompt('Cual es el nombre?'))
      this.edad = Number(prompt('Cual es la edad de la persona?'))
      this.profesion = String(prompt('Cual es la profesion de la persona?'))

      this.arrayDatos.push({
        id: this.id,
        nombre: this.nombre,
        edad: this.edad,
        profesion: this.profesion,
      })
      alert('Registro creado!')
    } catch (exe) {
      console.log(exe)
    }
  }

  update(): void {
    try {
      alert('Vamos a modificar un registro')
      this.id = Number(
        prompt('Escribe el id de la persona que quieres modificar'),
      )
      for (let i = 0; i <= this.arrayDatos.length; i++) {
        if (this.arrayDatos[i].id === this.id) {
          this.nombre = String(prompt('Cual es el nombre nuevo?'))
          this.edad = Number(prompt('Cual es la nueva edad de la persona ?'))
          this.profesion = String(
            prompt('Cual es la nueva profesion de la persona?'),
          )

          this.arrayDatos[i].nombre = this.nombre
          this.arrayDatos[i].edad = this.edad
          this.arrayDatos[i].profesion = this.profesion

          alert('Actualizacion completada!')

          alert(`
                    --------------------------------------------
                    nombre : ${this.arrayDatos[i].nombre} 
                    edad: ${this.arrayDatos[i].edad}
                    profesion : ${this.arrayDatos[i].profesion}
                    --------------------------------------------
                    `)
        }
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  Delete(): void {
    try {
      this.buscarId = Number(
        prompt('Escribe el id del registro que quieres  eliminar'),
      )

      if (this.arrayDatos.length != 0) {
        for (let i = 0; i < this.arrayDatos.length; i++) {
          if (this.arrayDatos[i].id === this.buscarId) {
            this.arrayDatos.splice(i, 1)
            alert('Registro eliminado!')
          } else {
            alert(`No hay coincidencia en el id : ${this.arrayDatos[i].id}`)
          }
        }
      } else {
        alert('No hay resgitros en el array')
      }
    } catch (exe) {
      console.log(exe)
    }
  }
}

class Iniciar {
  opc: any = 0
  respuesta: string = ''
  Operar() {
    let controlador = new Repository()
    do {
      this.opc = prompt(`
             Elige una opcion:
             
             1: Mostrar Datos
             2: Mostrar datos por id
             3: Mostrar datos por nombre
             4: Crear registro
             5: Actualizar Registro
             6: Borrar Registro
             7: Salir
             `)

      switch (parseInt(this.opc)) {
        case 1:
          controlador.getAll()
          break

        case 2:
          controlador.getById()
          break

        case 3:
          controlador.getByName()
          break

        case 4:
          controlador.create()
          break

        case 5:
          controlador.update()
          break

        case 6:
          controlador.Delete()
          break

        case 7:
          this.respuesta = String(
            prompt('Seguro que quieres salir ? s : si,  n : no'),
          )

          if (this.respuesta === 's') {
            this.opc = 8
            alert('Hasta Luego')
          } else {
            this.opc = 0
          }
          break
        default:
          alert('Opcion Equivocada')
          this.opc = 0
          break
      }
    } while (this.opc < 7)
  }
}

let iniciar = new Iniciar()
iniciar.Operar()





