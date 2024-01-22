"use strict"
import{check, validationResult} from 'express-validator'

export const validacion = [
    //validar el nombre del cliente
    check("nameCliente").exists().notEmpty().isLength({min:5, max:40}).withMessage("El nombre del cliente no debe estar vacío, debe tener entre 5 y 40 caracteres"),
    check("emailCliente").exists().notEmpty().isEmail().withMessage("El email del cliente no debe estar vacío y debe tener formato de email"),
    check("tlfnoCliente").exists().notEmpty().isLength({min:9, max:9}).isNumeric().withMessage("El teléfono del cliente no debe estar vacío, debe tener 9 números"),
    check("empresaCliente").exists().notEmpty().matches(/^[A-Z][a-zñA-ZÑ0-9\s]{4,49}$/).withMessage("El teléfono del cliente no debe estar vacío, debe tener 9 números"),
    (req, res, next)=>{
        const errors=validationResult(req); //Array tantas filas como campos valide
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors:errors.array() //devolver el mensaje
            })
        } else{ //Todo correcto  
            next(); //Sigue la ejecución del siguiente middleware
        }
    }
]
