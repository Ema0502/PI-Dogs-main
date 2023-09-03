const validation = (input) => {
  const errors = {};

  if (!/^.{1,20}$/.test(input.name) && input.name) {
    errors.name = "El nombre debe contener máximo 20 caracteres";
  }

  if (!/^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif)$/.test(input.image) && input.image) {
    errors.image = "La imagen debe ser de tipo jpg, jpeg, png o gif";
  }

  if (!input.life_span && input.life_span) {
    errors.life_span = "Debe ingresar el tiempo de vida";
  } else if (parseInt(input.life_span) > 35){
    errors.height = "El tamaño debe ser menor a 35";
  }

  if (!/^\d+$/.test(input.height) && input.height) {
    errors.height = "El tamaño solo puede contener números";
  } else if (parseInt(input.height) > 90 && input.height){
    errors.height = "El tamaño debe ser menor a 90";
  }

  if (!/^\d+$/.test(input.weight) && input.weight) {
    errors.weight = "El peso debe ser un número";
  } else if (parseInt(input.weight) > 70 && input.weight) {
    errors.weight = "El peso debe ser menor a 70";
  }

  if (/\d/.test(input.temperament) && input.temperament) {
    errors.temperament = "Solo puedes agregar caracteres";
  }

  return errors;
};

export default validation;